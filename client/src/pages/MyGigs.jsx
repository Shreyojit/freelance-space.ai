import { Link } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import getCurrentUser from '../utils/getCurrentUser';
import newRequest from '../utils/newRequest';

// Component to display individual gig row
const GigRow = ({ gig, onDelete, index }) => {
  const [integer, decimal] = gig.price.toFixed(2).split(".");

  return (
    <tr key={gig.id} className={index % 2 === 0 ? "odd:bg-[#bef1be]" : ""}>
      <td className="px-4 py-3">
        <img className="w-12 h-6 object-cover rounded" src={gig.image} alt="Gig" />
      </td>
      <td className="px-4 py-3 text-gray-800">{gig.title}</td>
      <td className="px-4 py-3 text-gray-700">{integer}.<sup>{decimal}</sup></td>
      <td className="px-4 py-3 text-gray-700">{gig.sales}</td>
      <td className="px-4 py-3">
        <img
          className="w-6 cursor-pointer"
          src="./img/delete.png"
          alt="Delete"
          onClick={() => onDelete(gig.id)}
        />
      </td>
    </tr>
  );
};

const MyGigs = () => {
  const currentUser = getCurrentUser();
  const queryClient = useQueryClient();

  // Fetch gigs using useQuery
  const { isLoading, error, data: gigs } = useQuery({
    queryKey: ["myGigs"],
    queryFn: () => newRequest.get(`/gigs?userId=${currentUser.id}`).then((res) => res.data),
  });

  // Handle deletion using useMutation
  const mutation = useMutation({
    mutationFn: (id) => newRequest.delete(`/gigs/${id}`),
    onSuccess: () => queryClient.invalidateQueries(["myGigs"]),
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  // Loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex justify-center bg-gray-100 py-8">
      <div className="container w-[1400px] bg-white p-6 rounded-lg shadow-lg">
        <div className="title flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">
            {currentUser.isSeller ? "Gigs" : "Orders"}
          </h1>
          {currentUser.isSeller && (
            <Link to="/add">
              <button className="bg-[#1a7e44] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#145d33] transition-all duration-300">
                Add New Gig
              </button>
            </Link>
          )}
        </div>
        <table className="w-full table-auto text-left">
          <thead>
            <tr className="bg-[#f3f4f6] border-b">
              <th className="px-4 py-3 text-sm font-medium text-gray-700">Image</th>
              <th className="px-4 py-3 text-sm font-medium text-gray-700">Title</th>
              <th className="px-4 py-3 text-sm font-medium text-gray-700">Price</th>
              <th className="px-4 py-3 text-sm font-medium text-gray-700">Sales</th>
              <th className="px-4 py-3 text-sm font-medium text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {gigs?.map((gig, index) => (
              <GigRow key={gig.id} gig={gig} onDelete={handleDelete} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyGigs;

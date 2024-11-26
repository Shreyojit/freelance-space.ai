import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { upload } from "../utils/upload.js"; // Image upload function
import { useMutation,useQueryClient } from "@tanstack/react-query"; // Using Tanstack Query (React Query)
import axios from "axios"; // For making API requests

const Add = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [features, setFeatures] = useState([]);
  const [imageUrls, setImageUrls] = useState([]); // State to hold the image URLs

  const queryClient = useQueryClient(); // Hook to access the queryClient

  // Mutation to create a gig
  const mutation = useMutation({
    mutationFn: async (gigData) => {
      try {
        // Sending gig data to backend API
        const response = await axios.post("/api/gigs", gigData); // Replace with your API endpoint
        return response.data;
      } catch (error) {
        throw new Error("Error creating gig");
      }
    },
    onSuccess: () => {
      alert("Gig created successfully!");
      reset(); // Reset the form after success
      setImageUrls([]); // Clear the image URLs after success
      queryClient.invalidateQueries(["myGigs"]); // Invalidate cached data for "myGigs"
    },
    onError: (error) => {
      console.error("Error creating gig:", error);
      alert("Failed to create gig. Please try again.");
    },
  });

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      // Upload cover image to Cloudinary
      let coverImageUrl = "";
      if (data.coverImage[0]) {
        coverImageUrl = await upload(data.coverImage[0]);
      }
  
      // Upload additional images to Cloudinary
      let uploadedUrls = [];
      if (data.uploadImages && data.uploadImages.length > 0) {
        const imageUploadPromises = Array.from(data.uploadImages).map((file) =>
          upload(file)
        );
        uploadedUrls = await Promise.all(imageUploadPromises); // Wait for all images to be uploaded
      }
  
      // Now that the images are uploaded, set the image URLs state
      setImageUrls(uploadedUrls); // Update the state with the uploaded image URLs
  
      // Prepare gig data
      const gigData = {
        userId: JSON.parse(localStorage.getItem("currentUser"))?.id, // Assuming user data is stored in localStorage
        title: data.title,
        desc: data.desc,
        cat: data.cat,
        price: parseInt(data.price, 10),
        cover: coverImageUrl,
        images: uploadedUrls, // Use the uploaded image URLs
        shortTitle: data.shortTitle,
        shortDesc: data.shortDesc,
        deliveryTime: parseInt(data.deliveryTime, 10),
        revisionNumber: parseInt(data.revisionNumber, 10),
        features: features, // Use state for features
      };
  
      // Trigger mutation to create the gig
      mutation.mutate(gigData);
    } catch (error) {
      console.error("Error uploading images:", error);
      alert("Failed to upload images. Please try again.");
    }
  };
  

  // Function to handle adding a new feature
  const handleAddFeature = () => {
    setFeatures((prevFeatures) => [...prevFeatures, ""]);
  };

  // Function to handle feature input change
  const handleFeatureChange = (index, value) => {
    setFeatures((prevFeatures) => {
      const newFeatures = [...prevFeatures];
      newFeatures[index] = value;
      return newFeatures;
    });
  };

  return (
    <div className="flex justify-center py-12 bg-gray-100">
      <div className="w-full max-w-6xl px-6 py-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-gray-500 text-3xl font-light mb-8">Add New Gig</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-16">
            {/* Info Section */}
            <div className="flex-1 space-y-6">
              {/* Title Field */}
              <div className="space-y-2">
                <label htmlFor="title" className="text-gray-600 text-lg">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="e.g. I will do something I'm really good at"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  {...register("title", { required: "Title is required" })}
                />
                {errors.title && (
                  <p className="text-red-500 text-sm">{errors.title.message}</p>
                )}
              </div>

              {/* Category Field */}
              <div className="space-y-2">
                <label htmlFor="category" className="text-gray-600 text-lg">
                  Category
                </label>
                <select
                  id="category"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  {...register("cat", { required: "Category is required" })}
                >
                  <option value="design">Design</option>
                  <option value="web">Web Development</option>
                  <option value="animation">Animation</option>
                  <option value="music">Music</option>
                </select>
                {errors.cat && (
                  <p className="text-red-500 text-sm">{errors.cat.message}</p>
                )}
              </div>

              {/* Cover Image Field */}
              <div className="space-y-2">
                <label htmlFor="coverImage" className="text-gray-600 text-lg">
                  Cover Image
                </label>
                <input
                  id="coverImage"
                  type="file"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  {...register("coverImage")}
                />
              </div>

              {/* Upload Images Field */}
              <div className="space-y-2">
                <label htmlFor="uploadImages" className="text-gray-600 text-lg">
                  Upload Images
                </label>
                <input
                  id="uploadImages"
                  type="file"
                  multiple
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  {...register("uploadImages")}
                />
              </div>


              {/* Display uploaded image URLs as comma-separated list */}
              {imageUrls.length > 0 && (
                <div className="space-y-2">
                  <label className="text-gray-600 text-lg">Uploaded Images</label>
                  <p className="text-gray-600">{imageUrls.join(", ")}</p>
                </div>
              )}

              {/* Description Field */}
              <div className="space-y-2">
                <label htmlFor="description" className="text-gray-600 text-lg">
                  Description
                </label>
                <textarea
                  id="description"
                  placeholder="Brief descriptions to introduce your service to customers"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  rows="16"
                  {...register("desc", { required: "Description is required" })}
                />
                {errors.desc && (
                  <p className="text-red-500 text-sm">{errors.desc.message}</p>
                )}
              </div>




                  
                 {/* Price Field */}
<div className="space-y-2">
  <label htmlFor="price" className="text-gray-600 text-lg">Price</label>
  <input
    id="price"
    type="number"
    className="w-full p-4 border border-gray-300 rounded-lg"
    {...register("price", { required: "Price is required", valueAsNumber: true })}
  />
  {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
</div>
 

              




              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full p-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600"
                >
                  Create
                </button>
              </div>
            </div>

            {/* Details Section */}
            <div className="flex-1 space-y-6">
              {/* Service Title Field */}
              <div className="space-y-2">
                <label htmlFor="shortTitle" className="text-gray-600 text-lg">
                  Service Title
                </label>
                <input
                  id="shortTitle"
                  type="text"
                  placeholder="e.g. One-page web design"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  {...register("shortTitle", { required: "Service title is required" })}
                />
                {errors.shortTitle && (
                  <p className="text-red-500 text-sm">{errors.shortTitle.message}</p>
                )}
              </div>

              {/* Short Description Field */}
              <div className="space-y-2">
                <label htmlFor="shortDesc" className="text-gray-600 text-lg">
                  Short Description
                </label>
                <textarea
                  id="shortDesc"
                  placeholder="Short description of your service"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  rows="10"
                  {...register("shortDesc", { required: "Short description is required" })}
                />
                {errors.shortDesc && (
                  <p className="text-red-500 text-sm">{errors.shortDesc.message}</p>
                )}
              </div>

              {/* Delivery Time Field */}
              <div className="space-y-2">
                <label htmlFor="deliveryTime" className="text-gray-600 text-lg">
                  Delivery Time (in days)
                </label>
                <input
                  id="deliveryTime"
                  type="number"
                  placeholder="e.g. 5"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  {...register("deliveryTime", { required: "Delivery time is required" })}
                />
                {errors.deliveryTime && (
                  <p className="text-red-500 text-sm">{errors.deliveryTime.message}</p>
                )}
              </div>

              {/* Features Section */}
              <div className="space-y-2">
                <label className="text-gray-600 text-lg">Features</label>
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) =>
                        handleFeatureChange(index, e.target.value)
                      }
                      className="w-full p-4 border border-gray-300 rounded-lg"
                      placeholder={`Feature ${index + 1}`}
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddFeature}
                  className="mt-2 text-blue-500"
                >
                  Add another feature
                </button>
              </div>

              {/* Revision Number */}
              <div className="space-y-2">
                <label htmlFor="revisionNumber" className="text-gray-600 text-lg">
                  Revision Number
                </label>
                <input
                  id="revisionNumber"
                  type="number"
                  placeholder="e.g. 3"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  {...register("revisionNumber", { required: "Revision number is required" })}
                />
                {errors.revisionNumber && (
                  <p className="text-red-500 text-sm">{errors.revisionNumber.message}</p>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;

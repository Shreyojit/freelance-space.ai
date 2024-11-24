import React from "react";
import { useForm } from "react-hook-form";

const Add = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
    // Submit data to API or backend
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
                <label htmlFor="title" className="text-gray-600 text-lg">Title</label>
                <input
                  id="title"
                  type="text"
                  placeholder="e.g. I will do something I'm really good at"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  {...register("title", { required: "Title is required" })}
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
              </div>

              {/* Category Field */}
              <div className="space-y-2">
                <label htmlFor="category" className="text-gray-600 text-lg">Category</label>
                <select
                  id="category"
                  name="category"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  {...register("category", { required: "Category is required" })}
                >
                  <option value="design">Design</option>
                  <option value="web">Web Development</option>
                  <option value="animation">Animation</option>
                  <option value="music">Music</option>
                </select>
                {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
              </div>

              {/* Cover Image Field */}
              <div className="space-y-2">
                <label htmlFor="coverImage" className="text-gray-600 text-lg">Cover Image</label>
                <input
                  id="coverImage"
                  type="file"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  {...register("coverImage")}
                />
              </div>

              {/* Upload Images Field */}
              <div className="space-y-2">
                <label htmlFor="uploadImages" className="text-gray-600 text-lg">Upload Images</label>
                <input
                  id="uploadImages"
                  type="file"
                  multiple
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  {...register("uploadImages")}
                />
              </div>

              {/* Description Field */}
              <div className="space-y-2">
                <label htmlFor="description" className="text-gray-600 text-lg">Description</label>
                <textarea
                  id="description"
                  placeholder="Brief descriptions to introduce your service to customers"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  rows="16"
                  {...register("description", { required: "Description is required" })}
                />
                {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button type="submit" className="w-full p-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600">
                  Create
                </button>
              </div>
            </div>

            {/* Details Section */}
            <div className="flex-1 space-y-6">
              {/* Service Title Field */}
              <div className="space-y-2">
                <label htmlFor="serviceTitle" className="text-gray-600 text-lg">Service Title</label>
                <input
                  id="serviceTitle"
                  type="text"
                  placeholder="e.g. One-page web design"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  {...register("serviceTitle", { required: "Service title is required" })}
                />
                {errors.serviceTitle && <p className="text-red-500 text-sm">{errors.serviceTitle.message}</p>}
              </div>

              {/* Short Description Field */}
              <div className="space-y-2">
                <label htmlFor="shortDescription" className="text-gray-600 text-lg">Short Description</label>
                <textarea
                  id="shortDescription"
                  placeholder="Short description of your service"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  rows="10"
                  {...register("shortDescription", { required: "Short description is required" })}
                />
                {errors.shortDescription && <p className="text-red-500 text-sm">{errors.shortDescription.message}</p>}
              </div>

              {/* Delivery Time Field */}
              <div className="space-y-2">
                <label htmlFor="deliveryTime" className="text-gray-600 text-lg">Delivery Time (e.g. 3 days)</label>
                <input
                  id="deliveryTime"
                  type="number"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  {...register("deliveryTime", { required: "Delivery time is required" })}
                />
                {errors.deliveryTime && <p className="text-red-500 text-sm">{errors.deliveryTime.message}</p>}
              </div>

              {/* Revision Number Field */}
              <div className="space-y-2">
                <label htmlFor="revisionNumber" className="text-gray-600 text-lg">Revision Number</label>
                <input
                  id="revisionNumber"
                  type="number"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  {...register("revisionNumber", { required: "Revision number is required" })}
                />
                {errors.revisionNumber && <p className="text-red-500 text-sm">{errors.revisionNumber.message}</p>}
              </div>

              {/* Add Features Fields */}
              <div className="space-y-2">
                <label htmlFor="features" className="text-gray-600 text-lg">Add Features</label>
                <input
                  type="text"
                  placeholder="e.g. page design"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  {...register("features")}
                />
                <input
                  type="text"
                  placeholder="e.g. file uploading"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  {...register("features")}
                />
                <input
                  type="text"
                  placeholder="e.g. setting up a domain"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  {...register("features")}
                />
                <input
                  type="text"
                  placeholder="e.g. hosting"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  {...register("features")}
                />
              </div>

              {/* Price Field */}
              <div className="space-y-2">
                <label htmlFor="price" className="text-gray-600 text-lg">Price</label>
                <input
                  id="price"
                  type="number"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  {...register("price", { required: "Price is required" })}
                />
                {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;

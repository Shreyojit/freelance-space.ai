// utils/upload.js
export const upload = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "fiverr"); // replace with your Cloudinary upload preset
  formData.append("cloud_name", "dznotjz8d"); // replace with your Cloudinary cloud name

  // Simulate delay before uploading the file
  const simulateDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  try {
    // Log before simulating delay
    console.log("Simulating delay before upload...");

    // Simulate a 2-second delay before starting the upload
    await simulateDelay(1000);

    // Log after delay
    console.log("Delay simulated, starting upload...");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dznotjz8d/image/upload", // replace with your Cloudinary URL
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    console.log("Upload successful, image URL:", data.secure_url);
    return data.secure_url; // Cloudinary image URL
  } catch (err) {
    console.log("Error during upload:", err);
    throw new Error("Image upload failed");
  }
};

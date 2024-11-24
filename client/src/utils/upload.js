// utils/upload.js
export const upload = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "fiverr"); // replace with your Cloudinary upload preset
  formData.append("cloud_name", "dznotjz8d"); // replace with your Cloudinary cloud name

  try {
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dznotjz8d/image/upload", // replace with your Cloudinary URL
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    return data.secure_url; // Cloudinary image URL
  } catch (err) {
    console.log(err);
    throw new Error("Image upload failed");
  }
};

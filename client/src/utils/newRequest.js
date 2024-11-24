import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://localhost:8800/api/", // Base URL for your backend
  withCredentials: true,                // Include cookies and credentials
});


export default newRequest;

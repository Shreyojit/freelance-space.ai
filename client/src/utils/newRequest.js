
import axios from "axios";

const newRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/api/", // Use environment variable for base URL
  withCredentials: true,                // Include cookies and credentials
});

export default newRequest;

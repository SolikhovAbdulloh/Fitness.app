import axios from "axios";
import { supabase } from "./supabaseClient";

// Common setting for API requests
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include JWT token
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    console.log("Token:", token);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosClient;

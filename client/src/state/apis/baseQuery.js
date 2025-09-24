import axios from "axios";
import { toast } from "react-toastify";
const baseUrl = import.meta.env.VITE_BASE_URL;
export const axiosBaseQuery = async ({ url, method, data }) => {
  try {
    const response = await axios({
      url: baseUrl + url,
      method,
      data,
      // withCredentials: true,
    });
    return { data: response.data };
  } catch (error) {
    const message = error?.response?.data?.msg || "Something went wrong";
    toast.error(message);
    return {
      error: {
        status: error.response?.status,
        data: error.response?.data,
      },
    };
  }
};

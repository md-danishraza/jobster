// baseQuery.js
import axios from "axios";
import { toast } from "react-toastify";
import { clearUser } from "../features/userSlice";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const axiosBaseQuery =
  () =>
  async ({ url, method, data }, api, _extraOptions) => {
    try {
      const token = api.getState().user?.user?.token;

      const response = await axios({
        url: baseUrl + url,
        method,
        data,
        headers: {
          Authorization: token ? `Bearer ${token}` : undefined,
        },
      });

      return { data: response.data };
    } catch (error) {
      // if unauthorized than logout
      if (error.response.status === 401) {
        api.dispatch(clearUser());
      }
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

import * as axios from "axios";
import queryString from "query-string";
import { BASE_URL } from "../constants/api";

/**
 * config url axios
 */
const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "content-type": "application/json",
    Accept: "application/json",
  },
  paramSerializer: (params) => queryString.stringify(params),
});

/**
 * Add request interceptor
 */
axiosClient.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    if (error.response.status === 401) {
      console.log("Bad request");
    }
    return error;
  }
);

/**
 * Add response interceptor
 */
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;

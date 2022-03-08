import axiosClient from "./axiosClient";

const productApi = {
  getAll: (params) => {
    const url = "/plant/getAll";
    return axiosClient.get(url, { params });
  },

  getById: (id) => {
    const url = `/plants/:${id}`;
    return axiosClient.get(url);
  },
};

export default productApi;

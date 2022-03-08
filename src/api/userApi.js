import axiosClient from "./axiosClient";

const userApi = {
  /**
   * [POST] LOGIN USER
   */
  signInUser: async (user) => {
    const url = "/user/login";
    const post = await axiosClient.post(url, user);
    return post;
  },

  /**
   * [POST] SIGNUP USER
   */
  signUpUser: async (data) => {
    const url = "user/register";
    const user = await axiosClient.post(url, data);
    return user;
  },
};

export default userApi;

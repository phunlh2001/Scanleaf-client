import userApi from "../../api/userApi";
import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
} from "../constants/constantTypes";

/**
 * LOGIN ACTION
 */
export const login = (user) => async (dispatch) => {
  try {
    const data = await userApi.signInUser(user);
    console.log(data);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log(error);
    dispatch({ type: USER_LOGIN_FAIL, payload: error });
  }
};

/**
 * LOGOUT ACTION
 */
export const logout = () => async (dispatch) => {
  dispatch({ type: USER_LOGOUT });
};

/**
 * SIGNUP ACTION
 */
export const signUp = (user) => async (dispatch) => {
  try {
    const data = await userApi.signUpUser(user);
    console.log(data);
    localStorage.setItem("userInfo", JSON.stringify(data));
    dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: USER_SIGNUP_FAIL, payload: error });
  }
};

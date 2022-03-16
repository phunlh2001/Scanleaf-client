import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_SUCCESS,
} from "../constants/constantTypes";

//INITIALIZATION
const INIT_STATE = { userInfo: null };

/**
 * LOGIN REDUCER
 */
export const UserLoginReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return { ...state, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

/**
 * SIGNUP REDUCER
 */
export const UserSignupReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case USER_SIGNUP_SUCCESS:
      return { ...state, userInfo: action.payload };
    case USER_SIGNUP_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

/**
 * LOG-OUT REDUCER
 */
export const UserLogoutReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case USER_LOGOUT:
      return { ...state };
    default:
      return state;
  }
};

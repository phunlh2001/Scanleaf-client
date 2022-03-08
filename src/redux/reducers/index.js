import { combineReducers } from "redux";
import { ProductReducer } from "../reducers/ProductReducer";
import {
  UserLoginReducer,
  UserLogoutReducer,
  UserSignupReducer,
} from "./UserReducer";

const rootReducer = combineReducers({
  Product: ProductReducer,
  UserLogin: UserLoginReducer,
  UserSignup: UserSignupReducer,
  UserLogout: UserLogoutReducer,
});

export default rootReducer;

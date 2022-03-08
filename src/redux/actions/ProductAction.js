import {
  FETCH_PRODUCT_FAILED,
  FETCH_PRODUCT_SUCCESS,
} from "../constants/constantTypes";
import productApi from "../../api/productApi";

export const fetchData = () => async (dispatch) => {
  try {
    const data = await productApi.getAll();
    console.log(data);
    dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCT_FAILED, payload: error.message });
    console.log(error.message);
  }
};

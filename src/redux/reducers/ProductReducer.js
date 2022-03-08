import * as actions from "../constants/constantTypes";

const initialState = {
  productList: [],
  page: 1,
};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_PRODUCT_SUCCESS:
      return { ...state, productList: action.payload };
    //
    case actions.FETCH_PRODUCT_FAILED:
      return { ...state, error: action.payload };
    //
    default:
      return state;
  }
};

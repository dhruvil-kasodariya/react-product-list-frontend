import { PRODUCT_ACTION_TYPE } from "./product.type";

const INITIAL_STATE = {
  productList: null,
  isLoading: false,
  productId: null,
  error: null,
  singleProduct: {
    productName: "",
    produtcImg: "",
    productStatus: "",
  },
};

export const productReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_ACTION_TYPE.FETCH_PRODUCT_START:
    case PRODUCT_ACTION_TYPE.GET_SINGLE_PRODUCT_START:
      return {
        ...state,
        isLoading: payload,
      };
    case PRODUCT_ACTION_TYPE.GET_ALL_PRODUCT:
      return {
        ...state,
        productList: payload,
        isLoading: false,
      };
    case PRODUCT_ACTION_TYPE.GET_ALL_PRODUCT_FAILED:
    case PRODUCT_ACTION_TYPE.GET_SINGLE_PRODUCT_FAILED:
      return {
        ...state,
        error: payload.response.data,
        isLoading: false,
      };
    case PRODUCT_ACTION_TYPE.GET_SINGLE_PRODUCT:
      return {
        ...state,
        singleProduct: payload,
        isLoading: false,
      };
    case PRODUCT_ACTION_TYPE.SET_SINGLE_PRODUCT_ID:
      return {
        ...state,
        productId: payload,
      };

    default:
      return state;
  }
};

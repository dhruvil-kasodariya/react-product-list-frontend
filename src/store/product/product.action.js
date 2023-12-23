import { createAction } from "../../utils/reducer/reducer.utils";
import { PRODUCT_ACTION_TYPE } from "./product.type";

export const fetchProductStart = (boolean) =>
  createAction(PRODUCT_ACTION_TYPE.FETCH_PRODUCT_START, boolean);

export const getAllProductSuccess =(products)=>
  createAction(PRODUCT_ACTION_TYPE.GET_ALL_PRODUCT,products);

export const getAllProductFailed=(error)=>
   createAction(PRODUCT_ACTION_TYPE.GET_ALL_PRODUCT_FAILED,error);

  export const setProductId =(id)=>
  createAction(PRODUCT_ACTION_TYPE.SET_SINGLE_PRODUCT_ID,id)

export const fetchSingleProductStart = (boolean) =>
   createAction(PRODUCT_ACTION_TYPE.GET_SINGLE_PRODUCT_START, boolean);
 
 export const getSingleProductSuccess =(products)=>
   createAction(PRODUCT_ACTION_TYPE.GET_SINGLE_PRODUCT,products);
 
 export const getSingleProductFailed=(error)=>
    createAction(PRODUCT_ACTION_TYPE.GET_SINGLE_PRODUCT_FAILED,error);

//   export const changeProductStatusStart=(boolean)=>
//    createAction(PRODUCT_ACTION_TYPE.CHANGE_PRODUCT_STATUS_START,boolean);

//    export const changeProductStatusSuccess =(status)=>
//    createAction(PRODUCT_ACTION_TYPE.CHANGE_PRODUCT_STATUS_SUCCESS,status);
 
//  export const changeProductStatusFailed=(error)=>
//     createAction(PRODUCT_ACTION_TYPE.CHANGE_PRODUCT_STATUS_FAILED,error);

//     export const deleteProductStar=(boolean)=>
//     createAction(PRODUCT_ACTION_TYPE.DELETE_PRODUCT_START,boolean);
 
//     export const deleteProductSuccess =(id)=>
//     createAction(PRODUCT_ACTION_TYPE.DELETE_PRODUCT_SUCCESS,id);
  
//   export const deleteProductFailed=(error)=>
//      createAction(PRODUCT_ACTION_TYPE.DELETE_PRODUCT_FAILED,error);




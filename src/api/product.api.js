import axios from "axios";
import { changeProductStatusApi, deleteProductApi, getAllProductApi, getSingleProductApi } from "./apiUrl.api";
import {

} from "../store/user/user.action";
import { fetchProductStart, fetchSingleProductStart, getAllProductFailed, getAllProductSuccess, getSingleProductFailed, getSingleProductSuccess } from "../store/product/product.action";

export const getAllProduct = async ( token,dispatch) => {
  try {
    dispatch(fetchProductStart(true));
    const responce = await axios.get(getAllProductApi, {
        headers: {
            token
        }
    });
    if (responce.status === 200) {
      const data = responce.data;
      dispatch(getAllProductSuccess(data));
      return data;
    }
    return responce;
  } catch (error) {
    dispatch(getAllProductFailed(error));
    console.log(error);
  }
};

export const getSingleProduct =async(_id,token,dispatch)=>{
  try {
    dispatch(fetchSingleProductStart(true));
    const responce =await axios.get(`${getSingleProductApi}/${_id}`,{
      headers:{
        token
      }
    });
    if(responce.status==200){
      const data =responce.data;
      dispatch(getSingleProductSuccess(data));
      return responce.status
    }
  } catch (error) {
    dispatch(getSingleProductFailed(error));
  }
}

export const changeProductStatus =async(_id,token,status,dispatch)=>{
  try{
    const responce =await axios.patch(`${changeProductStatusApi}/${_id}`,{productStatus:status},{
      headers:{
        token
      }
    })
    if(responce.status==201){
      await getAllProduct(token,dispatch)
    }
  }catch(error){
    console.log(error)
  }
}

export const deleteProduct =async(_id,token,dispatch)=>{
  try {
    const response =await axios.delete(`${deleteProductApi}/${_id}`,{
      headers:{
        token
      }
    })
    if(response.status==200){
      await getAllProduct(token,dispatch)
    }
  } catch (error) {
    
  }
}
import axios from "axios";
import { loginUrl } from "./apiUrl.api";
import {
  signInSuccess,
  signInFailed,
  emailSignInStart,
} from "../store/user/user.action";

const loginApi = async (userData, dispatch, navigate) => {
  try {
    dispatch(emailSignInStart(true));
    const responce = await axios.post(loginUrl, userData);
    if (responce.status === 200) {
      const data = responce.data;
      dispatch(signInSuccess(data));
      navigate("/productList");
      return data;
    }
    return responce;
  } catch (error) {
    dispatch(signInFailed(error));
    console.log(error);
  }
};

export default loginApi;


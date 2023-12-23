import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import Form from "./Form";
import loginApi from "../api/login.api";

function SignIn({ handleSwitch }) {
  const [userInfo, setUserInfo] = useState({
    useremail: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeUserInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    const { useremail, userpassword } = userInfo;
    if (!useremail || !userpassword) {
      !useremail && toast.error("enter user email");
      !userpassword && toast.error("enter password");
      return;
    } else {
      try {
        await loginApi(userInfo, dispatch, navigate);
        // const responce=await axios.post('http://localhost:4400/api/auth/signin',userInfo);
        // if(responce.status==200){
        //     console.log(responce.data)
        //     toast.success("user signIn successfully");
        //     navigate("/productList");
        // }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <Form
        title={"Sign In Form"}
        handleInputChange={handleChangeUserInfo}
        handleSubmit={handleSignInSubmit}
        userData={userInfo}
      />
      <button 
      className="w-full"
      onClick={handleSwitch}>
        Don't have account ? <span className="font-medium underline">Sign Up</span>
      </button>
    </div>
  );
}

export default SignIn;

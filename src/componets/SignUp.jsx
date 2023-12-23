import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import{ toast } from 'react-toastify';
import Form from './Form';
import signUpApi from '../api/signUp.api';

function SignUp({handleSwitch}) {
    const [user,setUser] =useState({
        username:"",
        useremail:"",
        userpassword:""
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChangeUserInfo =(e)=>{
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();
        const { useremail, username, userpassword } = user;
        if (!useremail || !username || !userpassword) {
          !username && toast.error("enter user name");
          !useremail && toast.error("enter user email");
          !userpassword && toast.error("enter password");
          return;
        }else{
            try {
                await signUpApi(user, dispatch, navigate)
                // const responce=await axios.post('http://localhost:4400/api/auth/signup',user);
                // if(responce.status==201){
                //     toast.success("user signUp successfully");
                //     navigate("/productList");
                // }else{
                //     toast.error("try agian");
                // }
            } catch (error) {
                console.log(error)
            }
        }
       
      };
  
  return (
    <div>
        <Form  
            title={"Sign Up Form"}
            handleInputChange={handleChangeUserInfo} 
            handleSubmit={handleSignUpSubmit} 
            userData={user}
            isSignUp={true}
        />
        <button
        className='w-full' 
        onClick={handleSwitch}>
        Already have account ?<span className="font-medium underline">Log In</span>
        </button>
    </div>
  )
}

export default SignUp
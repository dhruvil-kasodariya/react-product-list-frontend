import React from "react";

function Form({ title, handleInputChange, handleSubmit, userData, isSignUp }) {
  return (
     <div className="flex mt-[30vh] mb-5 w-full justify-center items-center" >
            <div className="flex flex-col m-auto h-fit w-fit p-5 justify-center items-center border border-black rounded-xl " >   
        <h1 className="text-xl font-semibold uppercase pb-3"  >{title}</h1>
      <form className="flex flex-col justify-center my-2 items-center gap-2 ">
        {isSignUp && (
          <input
            className="border border-black/30 px-5 py-1 rounded-lg"
            type="text"b
            name="username"
            value={userData.username}
            placeholder="Enter your name"
            onChange={(e) => handleInputChange(e)}
          />
        )}
        <input
        className="border border-black/30 px-5 py-1 rounded-lg"
          type="email"
          name="useremail"
          value={userData.useremail}
          placeholder="Enter your email"
          onChange={(e) => handleInputChange(e)}
        />
        <input
        className="border border-black/30 px-5 py-1 rounded-lg"
          type="password"
          name="userpassword"
          value={userData.userpassword}
          placeholder="Enter your password"
          onChange={(e) => handleInputChange(e)}
        />
        <button 
        className="border border-black px-5 py-2 rounded-full mt-4 hover:bg-gray-400 "
        type="submit" 
        onClick={handleSubmit}>
        {isSignUp ? "Sign up" : "Sign In"}
        </button>
      </form>
    </div>
    </div>
  );
}

export default Form;

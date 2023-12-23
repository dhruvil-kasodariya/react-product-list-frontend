import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCurrentUser } from '../store/user/user.selecter';
import { signOutSuccess } from '../store/user/user.action';


function Navbar() {
  const dispatch =useDispatch();
  const navigate =useNavigate();
  const currentUser =useSelector(selectCurrentUser);

  const handleLogOut =()=>{
    dispatch(signOutSuccess());
    navigate('/')
  }
  return (
    <div className='flex justify-between mx-10 my-15 bg-gray-200'>
    <span className='capitalize ml-5'>{currentUser.username}</span>
    <span className='mr-5 cursor-pointer'onClick={handleLogOut}>Log Out</span>
  </div>
  )
}

export default Navbar

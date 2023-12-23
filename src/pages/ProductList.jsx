import React, { useEffect } from 'react';
import { useSelector,useDispatch } from "react-redux";
import {selectCurrentUser} from "../store/user/user.selecter"
import ProductCard from '../componets/ProductCard'
import { getAllProduct, getSingleProduct } from '../api/product.api';
import { selectProductList } from '../store/product/product.selecter';
import Navbar from '../componets/Navbar';
import { Link, useNavigate } from 'react-router-dom';


function ProductList() {

  const dispatch =useDispatch();
  const navigate =useNavigate();
  const currentUser =useSelector(selectCurrentUser);
  const products =useSelector(selectProductList); 

 

  useEffect(()=>{
   const fetchData = async()=>{
      await getAllProduct(currentUser.accessToken,dispatch)
    }
    fetchData()
  },[])

  return (
    <div>
      <Navbar />
      <h1 className='flex justify-center items-center my-6 text-3xl font-semibold uppercase'>Product List</h1>
      <div className='ml-5 grid grid-cols-3 gap-x-5 gap-y-12 '>
       {
        products && products.map((product)=>(
          // <Link to='/productView'>
            <ProductCard key={product._id} product={product} currentUser={currentUser} dispatch={dispatch} navigate={navigate}/>
            // </Link>
        ))
       }
    </div>
    
    </div>
  )
}

export default ProductList
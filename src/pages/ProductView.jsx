import React, { useEffect } from 'react'
import Navbar from '../componets/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { selectProductId, selectSingleProduct } from '../store/product/product.selecter'
import { selectCurrentUser } from '../store/user/user.selecter';
import { getSingleProduct } from '../api/product.api';

function ProductView() {
  const dispatch =useDispatch();

  const currentUser =useSelector(selectCurrentUser);
  const _id =useSelector(selectProductId)
  const product = useSelector(selectSingleProduct);

   
    
  
    // useEffect(()=>{
    //   const getData=async()=>{
    //   await getSingleProduct(_id,currentUser.accessToken,dispatch)
    //   }

    //    getData();
    // },[_id,currentUser]) 

    console.log(product,"product")
  return (
  
        <div>
        <Navbar />
     {product && product.productImg && product.productName && product.productStatus &&
          <div>
            <img src={`./image/${product.productImg}` }/>
            <div>
                <span>{product.productName }</span>
                <div>
                    <span>{product.productStatus }</span>
                    <MdDelete />
                </div>
            </div>
          </div>
      
     }
    </div>
        )
}

export default ProductView
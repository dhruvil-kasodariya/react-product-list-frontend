import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { changeProductStatus, deleteProduct, getSingleProduct } from '../api/product.api';
import { setProductId } from '../store/product/product.action';


function ProductCard({product,currentUser,dispatch,navigate}) {

    const {_id,productName,productImg,productStatus} =product;
    const handleView= async()=>{

     dispatch(setProductId(_id))
      await getSingleProduct(_id,currentUser.accessToken,dispatch);
    }

    const handleOptionChange = (event) => {
      changeProductStatus(_id,currentUser.accessToken, event.target.value,dispatch)
    };

    const handleDeleteProduct =async()=>{
      await deleteProduct(_id,currentUser.accessToken,dispatch)
    }

  return (
    <div className='w-[95%] flex flex-col  h-[350px] items-center relative' onClick={handleView}>
        <img src={`./image/${productImg}`} alt={productName} className='w-full h-[90%] object-cover mb-3 hover:scale-110' />
        <div className='w-full h-[10%] flex justify-between text-lg border border-gray'>
           <span className='mb-4 capitalize'>{productName}</span>
          
           <select className='bg-white border border-gray-300' value={productStatus} onChange={handleOptionChange}>
            <option value='active'>Active</option>
            <option value='inactive'>Inactive</option>
           </select>
           <MdDelete className='mt-2 mr-3' onClick={handleDeleteProduct}/>
        </div>
    </div>
  )
}

export default ProductCard


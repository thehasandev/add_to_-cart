import React, { useState } from 'react'
import one from "./assets/a.jpg"
import { BiSolidCart } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

import Data from "./data/data"
import { useDispatch, useSelector } from 'react-redux';
import { addtocart, removecart } from './slices/cartSlice';


function App() {
  let [open,setOpen] =useState(false)
  let dispatch =useDispatch()
  let cartData =useSelector((state)=>state.cartSlice.cartitem)

 

  let handleAddtoCart =(item)=>{
    dispatch(addtocart({
      name     : item.productName,
      url      : item.productUrl,
      price    : item.productPrice,
      quantity : 1
    }))



  }

  let handleRemoveCart =(item)=>{
        dispatch(removecart(item)) 
  }
  return (
    <div className='max-w-[1400px] mx-auto '>
     <h1 className='font-bold text-[#111111] text-center pt-4 text-4xl'>Our New Arrival</h1>
     <div onClick={()=>setOpen(true)} className='flex justify-end relative'>
       <FaCartShopping />
       <p className='font-medium text-base text-orange-500 absolute top-[-17px] right-[-7px]'>{cartData&&cartData.length}</p>
     </div>
     {

     }
     <div className={`w-1/3 h-screen bg-slate-500 absolute  top-0  z-10 ${open ? "right-0" : "right-[-100%]"}`}>
      <IoClose className='text-white m-5' onClick={()=>{setOpen(false)}} size={25} />

      <div>
        <ul className='flex text-white justify-between mt-4 px-5'>
          <li>Action</li>
          <li>Name</li>
          <li>Image</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Tottal</li>
        </ul>
 
 {
  cartData &&
  cartData.map((item,index)=>(
        <ul key={index} className='flex text-white justify-between mt-4 items-center bg-green-500 px-5' >
          <li><IoClose onClick={()=>{handleRemoveCart(item,index)}} className='text-white' /></li>
          <li className='text-xs'>{item.name}</li>
          <li className='w-16'><img src={item.url} alt="" /></li>
          <li>{item.price}</li>
          <li className='flex items-center  px-0.5'>
            <button className='font-medium text-base text-white px-1.5 mr-1 bg-black'>-</button>
            <p>{item.quantity}</p>
            <button onClick={()=>{handelIncrement(item)}} className='font-medium text-base text-white px-1.5 ml-1 bg-black'>+</button>
          </li>
          <li>{item.quantity*item.price}</li>
        </ul>

  ))
 }

   

      </div>
     </div>

     <div className='flex justify-between flex-wrap mt-6 gap-y-4'>
      {
        Data.map((item,index)=>{ 
  return  <div key={index}>
            <div className='w-[330px] bg-white relative group overflow-hidden'> 
              <img src={item.productUrl} alt="" className='w-full h-[250px] '/>
              <div className='bg-white text-right pr-2 py-2 absolute group-hover:bottom-0 duration-500 -bottom-1/2 left-0 w-full'>
                <p className='font-medium text-black text-sm flex gap-x-2 items-center justify-end'>Add to Wish List <FaHeart/></p>
                <p className='font-medium my-2 text-black text-sm flex gap-x-2 items-center justify-end'>Comapare <FaCodeCompare/></p>
                <p onClick={()=>{handleAddtoCart(item)}}  className='font-medium cursor-pointer text-black text-sm flex gap-x-2 items-center justify-end'>Add to Cart <BiSolidCart size={20}/></p>
              </div>
            </div>
              <div className='flex justify-between px-2 pt-2'>
                <h1 className='font-semibold  text-xl  text-[#111111]'>{item.productName}</h1>
                <p className='font-semibold  text-base  text-[#111111]'>{item.productPrice} $</p>
              </div>

          </div>
        })
      }
     </div>
    </div>
  )
}

export default App
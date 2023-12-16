import React from 'react'
import one from "./assets/a.jpg"
import { BiSolidCart } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";

function App() {
  return (
    <div className='max-w-[1400px] mx-auto '>
     <h1 className='font-bold text-[#111111] text-center pt-4 text-4xl'>Our Best Product</h1>
     <div className='flex justify-between flex-wrap mt-4'>
      <div>
        <div className='w-[330px] bg-white relative group overflow-hidden'> 
          <img src={one} alt="" className='w-full  '/>
           <div className='bg-white text-right pr-2 py-2 absolute group-hover:bottom-0 duration-500 -bottom-1/2 left-0 w-full'>
             <p className='font-medium text-black text-sm flex gap-x-2 items-center justify-end'>Add to Wish List <FaHeart/></p>
             <p className='font-medium my-2 text-black text-sm flex gap-x-2 items-center justify-end'>Comapare <FaCodeCompare/></p>
             <p className='font-medium text-black text-sm flex gap-x-2 items-center justify-end'>Add to Cart <BiSolidCart size={20}/></p>
           </div>
        </div>
           <div className='flex justify-between px-2 pt-2'>
            <h1 className='font-semibold  text-xl  text-[#111111]'>New Arrival 1</h1>
            <p className='font-semibold  text-base  text-[#111111]'>44$</p>
           </div>

      </div>
     </div>
    </div>
  )
}

export default App
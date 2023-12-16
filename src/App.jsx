import React from 'react'
import one from "./assets/a.jpg"
import { BiSolidCart } from "react-icons/bi";

function App() {
  return (
    <div className='max-w-[1400px] mx-auto '>
     <h1 className='font-bold text-[#111111] text-center pt-4 text-4xl'>Our Best Product</h1>
     <div className='flex justify-between flex-wrap'>
        <div className='w-[330px] bg-white '> 
          <img src={one} alt="" className='w-full'/>
           <div className='bg-black/50 text-right pr-2'>
             <p className='font-medium text-black text-sm '>Add to Wish List <BiSolidCart/></p>
             <p className='font-medium text-black text-sm '>Compayere</p>
             <p className='font-medium text-black text-sm '>Add to cart</p>
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
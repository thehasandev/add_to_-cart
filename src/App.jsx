import React from 'react'
import one from "./assets/a.jpg"

function App() {
  return (
    <div className='max-w-[1400px] mx-auto '>
     <h1 className='font-bold text-[#111111] text-center pt-4 text-4xl'>Our Best Product</h1>
     <div className='flex justify-between flex-wrap'>
        <div className='w-[330px]  '> 
          <img src={one} alt="" className='w-full'/>
           <div className='flex justify-between'>
            <h1 className='font-semibold  text-xl  text-[#111111]'>New Arrival 1</h1>
            <p className='font-semibold  text-base  text-[#111111]'>44$</p>
           </div>
      
        </div>
     </div>
    </div>
  )
}

export default App
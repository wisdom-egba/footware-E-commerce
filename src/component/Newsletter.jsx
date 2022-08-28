import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white'>
      <div className=' max-w-[1240px] mx-auto grid lg:grid-cols-3 py-3'>
        <div>
            <h1 className='md:text-3xl sm:text-2xl text-2xl font-bold py-2'>Want to get latest info our latest products?</h1>
            <p className='py-2'> If yes, the sign up to our newsletter <AiOutlineArrowRight size={40}/> </p>
        </div>
        <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-around w-full'>
            <input className='p-3 flex w-[60%] h-[50px]' type="text" placeholder='Enter Email text-[#000300]'  /> 
            <button className=" bottom-1 bg-[#E2703A] w-[150px] rounded-md text-[#000300] my-5 py-3 mx-left cursor-pointer ">Notify Me</button>
            </div>
        </div>
         
      </div>
    </div>
  )
}

export default Newsletter

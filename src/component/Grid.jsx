import React from 'react'
import Shoe from '../assets/moughit-fawzi-OcQVgNIUYx0-unsplash.jpg'

const Grid = () => {
  return (
    <div className='w-full m-auto bg-white py-10 px-4 mx-w-[66%]  ' >
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
        <img className=' w-[400px] h-[550px] mx-auto' src={Shoe} alt="/" /> 
        <div className=' pl-3 flex flex-col justify-center'>
            <p className=' text-left uppercase font-bold text-[#E2703A] mt-4'>shoes in store</p>
            <h1 className=' font-bold md:text-4xl sm:text-3xl text-2xl py-2'>Get High Quality Shoes at very Affordable Prices</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ornare odio, vel lobortis dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent hendrerit.</p>
            <button className=" bottom-1 bg-[#000300] w-[150px] rounded-md text-[#E2703A] my-5 py-3 mx-left cursor-pointer ">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Grid

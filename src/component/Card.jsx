import React from 'react'
import { FaMale, FaFemale, FaChild } from 'react-icons/fa'

const Card = () => {
  return (
    <div className='w-full py-20 px-4 bg-white flex justify-center'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 sm:m-7 i'  >
            <div className=' w-full flex justify-center flex-col items-center shadow-xl  rounded-[10px] mx-auto '>
                <FaMale size={50}/>
                <h2 className='font-bold text-[#E2703A]'>Female FootWear</h2>
                <p className=' px-6 py-10 px-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare tellus scelerisque tellus hendrerit, lobortis molestie arcu bibendum. Cras sollicitudin.</p>
                <button className='text-[#E2703A] py-2 px-3 mb-4 bg-white border rounded-xl border-black'>Shop Here <span className=' text-black'>>></span></button>
            </div>
            <div className=' flex justify-center flex-col items-center shadow-xl  rounded-[10px]'>
                <FaMale size={50}/>
                <h2 className='font-bold text-[#E2703A]'>Male FootWear</h2>
                <p className=' px-6 py-10 px-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare tellus scelerisque tellus hendrerit, lobortis molestie arcu bibendum. Cras sollicitudin.</p>
                <button className='text-[#E2703A] py-2 px-3 mb-4 bg-white border rounded-xl border-black'>Shop Here <span className=' text-black'>>></span></button>
            </div>
            <div className=' flex justify-center flex-col items-center shadow-xl rounded-[10px]'>
                <FaChild className =' justify-center' size={50} />
                <h2 className='font-bold text-[#E2703A]'>Children FootWear</h2>
                <p className=' px-6 py-10 px-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare tellus scelerisque tellus hendrerit, lobortis molestie arcu bibendum. Cras sollicitudin.</p>
                <button className='text-[#E2703A] py-2 px-3 mb-4 bg-white border rounded-xl border-black'>Shop Here <span className=' text-black'>>></span></button>
            </div>
        </div>
      
    </div>
  )
}

export default Card

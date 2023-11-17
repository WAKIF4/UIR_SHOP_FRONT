import React from 'react'
import { FaCartShopping } from "react-icons/fa6";


function Panier() {
  return (
    <div 
        className='relative  duration-300 cursor-pointer group'
    >
        <span className='absolute -top-2 md:-right-2 -left-2  font-bold group-hover:text-uir-l  bg-uir-l group-hover:bg-uir place-content-center place-items-center w-4 h-4 text-white text-xs rounded-full  flex items-center justify-centerhover:bg-red-600 duration-300'>2</span>
        <FaCartShopping className=' text-2xl text-uir group-hover:text-uir-l' />
    </div>
  )
}

export default Panier
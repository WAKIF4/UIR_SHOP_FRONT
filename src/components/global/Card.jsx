import React from 'react'
import { FaCartPlus } from "react-icons/fa";


function Card({
    name,
    price,
    img,
    description,
    className,
    user,
    ...props}) {
        console.log(user?.role == "ADMIN")
  return (
    <div className={'rounded-3xl group  p-2 hover:scale-125 hover:text-white hover:bg-uir text-uir duration-300 ' + (user?.role == "ADMIN" ? "  bg-uir-bg " :" bg-uir-bg ") + className} {...props}>
        <img
        src={img}
        alt={name}
        className='w-full h-40 object-contain rounded-2xl -mt-20  drop-shadow-2xl mx-auto'
        />
        <div className='text-center'>
            <h3 className='font-black md:text-lg uppercase '>{
                name.length > 15 ? name.slice(0, 15) + '...' : name
            }</h3>
            <h5 className='text-xs'>{
                description.length > 30 ?description.slice(0,30)  + '...' : description
            }</h5>
            <h2 className='uppercase
            w-[calc(100%+1rem)] -translate-x-[8px]
            bg-uir duration-300 text-white group-hover:text-uir group-hover:bg-white'>
                red
            </h2>
            <div className='mt-7 flex justify-between items-center space-x-3'> 
                <button className='text-uir  hover:text-uir-l group-hover:text-white focus:text-uir-l duration-300'>
                    <FaCartPlus className='md:text-3xl text-lg inline-block mr-1' />
                </button>
                <select className='border-b-2 w-full duration-300 border-uir bg-transparent text-uir group-hover:text-uir-l group-hover:border-uir-l ring-0 rounded-md px-2 py-1 focus:outline-none focus:border-uir-l'>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                </select>
            </div>
            <div className='mt-3 flex justify-between px-2 duration-300  items-center'>
                <span className=' font-black md:text-2xl'>{price} MAD</span>
                <span className='
                font-bold after:absolute duration-300  relative after:w-full after:h-[4px] after:top-1/2 after:left-1/2  after:bg-uir-l after:rotate-[30deg] after:translate-x-[-50%] after:translate-y-[-50%]   
                '>{price}</span>
            </div>
        </div>
    </div>
  )
}


export default Card
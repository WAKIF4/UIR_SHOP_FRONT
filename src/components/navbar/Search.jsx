import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";


function Search() {
    const [focus, setFocus] = useState(false)
  return (
    <div className={'flex items-center cursor-pointer p-2relative before:absolute before:left-0 before:duration-300 before:h-[2px] before:bottom-0 before:bg-uir ' + (focus?"before:w-full":"before:w-0 ")}>
        {/* <input onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} type='text' placeholder='Rechercher un produit' className=' border-0 w-full bg-none outline-none' /> */}
        <IoSearch className='hover:text-uir-l  duration-300  text-uir text-2xl' />
    </div>
  )
}

export default Search
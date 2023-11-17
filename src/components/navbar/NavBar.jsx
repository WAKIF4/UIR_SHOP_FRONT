import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import Links from './Links'
import { RiLoginCircleFill } from "react-icons/ri";
import Panier from './Panier'
import { IoMdMenu } from "react-icons/io";
import { CgMenuMotion } from "react-icons/cg";
import { Link, useLocation } from 'react-router-dom';



function NavBar() {
    const [menu, setMenu] = useState(true)
    const currentRoute = useLocation().pathname
  return (
    <div className=' flex items-center justify-between  px-5 bg-white w-full space-x-10 relative '>
        <img src={Logo} alt='logo' className='h-20 invert-0' />
        <div className='flex items-center justify-between md:space-x-10 space-x-4 '>
            <Links menu={menu} />
            <Panier />
            {currentRoute != "/login" && <Link to={"/login"} className='bg-uir hover:bg-uir-l duration-300 text-white px-5 py-2 hidden md:block'>Connexion</Link>}
            <RiLoginCircleFill className='text-2xl text-uir md:hidden ' />
            {menu  &&<IoMdMenu className='text-2xl text-uir md:hidden cursor-pointer' onClick={()=>setMenu(!menu)}/>}
            {!menu  &&<CgMenuMotion className='text-2xl text-uir md:hidden cursor-pointer' onClick={()=>setMenu(!menu)}/>}
        </div>
    </div>
  )
}

export default NavBar
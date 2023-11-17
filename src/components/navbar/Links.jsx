import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Links({menu}) {

    const currentRoute = useLocation().pathname

    const classes = 'text-md flex hover:bg-uir before:absolute duration-300  relative md:before:w-full before:w-0 before:bottom-0 before:left-0  before:bg-uir md:hover:bg-transparent duration-300 place-items-center ' 
  return (
    <ul className={'flex flex-col  font-semibold uppercase absolute md:relative w-full  md:bg-transparent text-white  md:text-uir bg-uir-l  left-0 md:flex-row justify-between duration-300 place-content-center  md:space-x-3 ' + (menu?"bottom-full":"top-full" )}>
        <li className={classes + (currentRoute === '/' ? 'before:bg-uir-l before:h-2 bg-uir md:bg-transparent' : 'before:h-1')}>
            <Link to='/' className='p-2 w-full'>Uir shop</Link>
        </li>
        <li className={classes + (currentRoute === '/textile' ? 'before:bg-uir-l before:h-2 bg-uir md:bg-transparent' : 'before:h-1')} >
            <Link to='/textile' className='p-2 w-full'>Textile</Link>
        </li>
        <li className={classes + (currentRoute === '/goodies' ? 'before:bg-uir-l before:h-2 bg-uir md:bg-transparent' : 'before:h-1')} >
            <Link to='/goodies' className='p-2 w-full'>Goodies</Link>
        </li>
        <li className={classes + (currentRoute === '/hightech' ? 'before:bg-uir-l before:h-2 bg-uir md:bg-transparent' : 'before:h-1')}>
            <Link to='/hightech' className='p-2 w-full'>High tech</Link>
        </li>
    </ul>
  )
}

export default Links
import React from 'react'
import Input from '../global/Input'

function Header() {
  return (
   <div className='flex space-x-4 flex-row-reverse mb-5'>
      <div className='-space-y-1 w-full flex flex-col md:items-end items-center mx-auto'>
        <div className='header -space-y-4 flex flex-col text-center md:text-right items-end md:text-5xl text-4xl'>
            <h1 className='  text-uir font-bold'>Portez fièrement</h1>
            <h3
                className='  text-uir-l  font-bold  md:tracking-[1rem] tracking-[0.8rem]'
                >vos couleurs</h3>
        </div>
        <div className='flex flex-col items-end md:text-right text-center font-semibold w-max text-sm'>
          <h5 className='text-uir'>Ajoutez une touche de style a votre quotidien</h5>
          <h5 className='text-uir  w-full  bg-uir-l ' >que vous soyez au campus au ailleurs.</h5>
        </div>
      </div>
      <div className='w-full hidden md:block'>
      </div>
   </div>
  )
}

export default Header
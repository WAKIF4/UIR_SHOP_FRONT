import React from 'react'
import { Link } from 'react-router-dom'

function CopyRight() {
  return (
    <div className='w-full flex  '>
        <ul className='w-max flex md:space-x-4 space-y-4 md:space-y-0  flex-col md:flex-row p-2 text-sm  font-semibold'>
            <li>
                <Link to={"#"} className='cursor-pointer text-uir'>© Copyright 2023 UIR shop. Tous droits réservés.</Link>
            </li>
            <li>
                <Link to={"#"} className='cursor-pointer text-uir/50'>Conditions générales d'utilisation</Link>
            </li>
            <li>
                <Link to={"#"} className='cursor-pointer text-uir/50'>Mentions légales</Link>
            </li>
            <li>
                <Link to={"#"} className='cursor-pointer text-uir/50'>FAQ</Link>
            </li>
        </ul>
    </div>
  )
}

export default CopyRight
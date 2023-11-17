import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Souscategory() {
    const {sous_category} = useParams()
    const [category, setCategory] = React.useState("Tous")

    const click = (e) => {
        setCategory(e)
    }
  return (
    <div className='min-h-screen'>
        <div className='border-gray-200 border-t-2'>
            <div className='w-max flex space-x-4 text-uir  uppercase  my-4 text-sm  font-semibold'>
                    <Link to={"/"} className=''>UIR SHOP </Link> <span>/</span> <span>{sous_category}</span>
            </div>
            <div className='mb-4'>
                <h1 className='text-3xl uppercase italic font-black text-uir'> {sous_category} </h1>
            </div>
        </div>

        <div className='border-gray-200 border-t-2 mb-4'>
            <ul className='flex space-x-4 text-uir  uppercase  my-4 text-sm  font-semibold'>
                <li className='cursor-pointer' onClick={()=>click("Tous")}>
                    Tous
                </li>
                <li className='cursor-pointer' onClick={()=>click("Vetements")}>
                    Vetements
                </li>
                <li className='cursor-pointer' onClick={()=>click("Chaussures")}>
                    Chaussures
                </li>
                <li className='cursor-pointer' onClick={()=>click("Accessoires")}>
                    accessories
                </li>
            </ul>
        </div>
        <div className='border-gray-200 border-t-2 mt-4'>
            {category}
        </div>
    </div>
  )
}

export default Souscategory
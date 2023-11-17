import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddButton from '../../components/global/AddButton'


function Category() {
    const [categories,setCategories] = useState([])

    const [loading,setLoading] = useState(false)

    const getCategories = async () => {
        setLoading(true)
        const res = await axios.get(`${import.meta.env.VITE_API_URL}api/souscategorie`)
        .then(res => {
            setCategories(res.data)
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            setLoading(false)
        })
    }

    useEffect(()=>{
        getCategories()
    },[])

    if (loading) {
        return (
        <div className='text-center'>
            <h1 className='text-2xl font-bold text-gray-700'>Loading</h1>
        </div>
        )
    }
  return (
    <div className=''>
        <AddButton />
        <h1 className='text-2xl font-bold text-gray-700'>Categories</h1>   
        <div className='grid grid-cols-2 p-3 lg:grid-cols-3 gap-4'>
            {
                categories && categories.map((category,index) => (
                    <div className='bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700'>
                        <h1 className='text-2xl font-bold text-center text-gray-700'>
                        {
                            category.id + " | " + category.nom
                        }
                        </h1>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Category
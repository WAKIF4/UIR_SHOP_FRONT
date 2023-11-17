import React, { useEffect, useState } from 'react'
import Input from '../../components/global/Input'
import Button from '../../components/global/Button'
import axios from 'axios'
import Alert from '../../components/global/Alert'
import { useLocation, useNavigate } from 'react-router-dom'
import BackButton from '../../components/global/BackButton'
import {Cloudinary} from "@cloudinary/url-gen";
import HandleUpload from '../../components/global/Upload'


function AddCategory() {
    const [file,setFile] = useState()
    const [categories,setCategories] = useState([])
    const [sousCat,setSousCat] = useState({
        nom:"",
        category:{
            id:""
        },
    })
    const navigate = useNavigate()

    useEffect(()=>{
        const getCategories = async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}api/categories`)
            .then(res => {
                setCategories(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        }
        getCategories()
    },[])


    const [loading,setLoading] = useState(false)
    const [error,setError] = useState()

    const addCat = async () => {

       if (sousCat.nom == "" || sousCat.category.id == "") {
            return setError("Please enter a valid fields")
       }
        
            setLoading(true)

            const res = await axios.post(import.meta.env.VITE_API_URL+"api/souscategorie",sousCat)
            .then(res => {
                navigate("/dashboard/category")
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
            
    }

    if (loading) {
        return (
        <div className='text-center'>
            <h1 className='text-2xl font-bold text-gray-700'>Loading</h1>
        </div>
        )
    }
  return (
    <div className=''>
        <h1 className='text-2xl font-bold text-gray-700'>Add Category</h1>
        <BackButton />
        <div className='bg-white grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto p-4'>
            <Input type={"text"} placeholder={"Nom"} value={sousCat.nom} onChange={(e) => setSousCat({...sousCat,nom:e.target.value})} />
            <select className="border border-gray-300 rounded-md p-2" onChange={(e) => setSousCat({...sousCat,category:{id:e.target.value}})}>
                <option value="">Select Category</option>
                {
                    categories && categories.map((ca,index) => (
                        <option key={index} value={ca.id}>{ca.nom}</option>
                    ))
                }
            </select>

            <Button text={"Save"} className={"bg-uir text-white px-4 py-2 w-full  hover:bg-uir-l duration-300"} onClick={addCat} />
        </div>
       {error && <div className=" max-w-2xl mx-auto p-4">
            <Alert type={"error"} text={error}  />
        </div>}
    </div>
  )
}

export default AddCategory
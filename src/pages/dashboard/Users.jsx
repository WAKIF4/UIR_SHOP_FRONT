import React, { useState,useEffect } from 'react'
import Input from '../../components/global/Input'
import Button from '../../components/global/Button'
import axios from 'axios'
import Alert from '../../components/global/Alert'
import AddButton from '../../components/global/AddButton'
import UserCard from '../../components/User/UserCard'

function Users() {
    const [users,setUsers] = useState([])

    const [loading,setLoading] = useState(false)
    const getUsers = async () => {
        setLoading(true)
        const res = await axios.get(`${import.meta.env.VITE_API_URL}students`)
        .then(res => {
            setUsers(res.data)
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            setLoading(false)
        })
    }
    

    useEffect(()=>{
        getUsers()
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
        <h1 className='text-2xl font-bold text-gray-700'>Users</h1>   
        <div className='grid grid-cols-2 p-3 lg:grid-cols-3 gap-4'>
            {
                users && users.map((user,index) => (
                    <UserCard key={index} user={user} />
                ))
            }
        </div>
    </div>
  )
}

export default Users




 
 
 
 
 
 
 
 

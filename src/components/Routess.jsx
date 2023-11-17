import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Souscategory from '../pages/Souscategory'
import Users from '../pages/dashboard/users'
import AddUsers from '../pages/dashboard/AddUserss'
import AddCategory from '../pages/dashboard/AddCategory'
import Category from '../pages/dashboard/Category'

function Routess() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:sous_category" element={<Souscategory />} />
        <Route path='/dashboard' element={<div>Dashboard</div>} />
        <Route path='/dashboard/users' element={<Users />} />
        <Route path='/dashboard/users/add' element={<AddUsers />} />
        <Route path='/dashboard/categories' element={<Category />} />
        <Route path='/dashboard/categories/add' element={<AddCategory />} />
    </Routes>
  )
}

export default Routess
import { IoGrid } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { FaStore } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { GoSponsorTiers } from "react-icons/go";
import { GiThreeFriends } from "react-icons/gi";
import { IoMdCart } from "react-icons/io";
import { FaMicrophoneLines } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { useState } from 'react';
import LinkC from './LinkC';
import React from 'react';

function SideBar() {
  const [routes,setRoutes] = useState([
    {
      url: '/dashboard',
      text: 'Dashboard',
      Icon: <GoHomeFill className='flex-shrink-0 w-5 h-5 text-uir  transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
    },
    {
      url: '/dashboard/produits',
      text: 'Produits',
      Icon: <FaStore className='flex-shrink-0 w-5 h-5 text-uir  transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
    },
    {
      url: '/dashboard/categories',
      text: 'Categories',
      Icon: <IoGrid className='flex-shrink-0 w-5 h-5 text-uir  transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
    },
    {
      url: '/dashboard/order',
      text: 'Order',
      Icon: <IoMdCart  className='flex-shrink-0 w-5 h-5 text-uir  transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
    },
    {
      url: '/dashboard/payment',
      text: 'payment',
      Icon: <MdPayment className='flex-shrink-0 w-5 h-5 text-uir  transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
    },
    {
      url: '/dashboard/users',
      text: 'Users',
      Icon: <FaUsers className='flex-shrink-0 w-5 h-5 text-uir  transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
    }
  ])
  return (

      <aside id="separator-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
              {
                routes.map((route) => (
                  <LinkC url={route.url} text={route.text} Icon={route.Icon} />
                ))
              }
             
            </ul>
            <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
              <li>
                  <a href="#" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                    <BiLogOut className='flex-shrink-0 w-5 h-5 text-uir  transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                    <span class="ms-3">Logout</span>
                  </a>
              </li>
              
              <li>
                  <a href="#" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                    <FaUserCircle className='flex-shrink-0 w-5 h-5 text-uir  transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                    <span class="ms-3">Profile</span>
                  </a>
              </li>
            </ul>
        </div>
      </aside>

  )
}

export default SideBar
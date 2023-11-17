import React from 'react'

function UserCard(
    {user}
) {
  return (
    

    <div className="w-full max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center rounded-full p-4">
            <img className="max-w-20 max-h-20 mb-3 rounded-full shadow-lg" src={user.image} alt=""/>
            <h5 className="mb-1 text-xl  text-gray-900 uppercase font-bold dark:text-white">{user.fullname}</h5>
            <span className="text-sm text-uir dark:text-gray-400">{user.email}</span>
            <div className="flex mt-4 md:mt-6">
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-uir   focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Show Products</a>
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black bg-uir-l border border-gray-300  focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">Delete</a>
            </div>
        </div>
    </div>

  )
}

export default UserCard
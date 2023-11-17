import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function LinkC({
    url,
    text,
    Icon
}) {

    const route =  useLocation().pathname
  return (
    <li>
        <Link to={url} className={"flex items-center duration-300 p-2 text-uir rounded-lg dark:text-white  dark:hover:bg-gray-700 group" + (route === url ? ' bg-uir-l hover:bg-uir-l ' : ' border-transparent hover:bg-uir-l/20 ')}>
            {Icon}
            <span class="ms-3 font-bold">{text}</span>
        </Link>
    </li>
  )
}

export default LinkC
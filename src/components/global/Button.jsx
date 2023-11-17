import React from 'react'

function Button({
    text,
    onClick,
    className,
    type,
    ...props
}) {
  return (
    <button className='bg-uir text-white px-4 py-2 w-full  hover:bg-uir-l duration-300' onClick={onClick} type={type} {...props}>
        {text}
    </button>
  )
}

export default Button
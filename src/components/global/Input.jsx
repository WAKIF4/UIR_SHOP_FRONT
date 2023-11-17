import React from 'react'

function Input({
    type,
    placeholder,
    name,
    value,
    onChange,
    className,
    label,
    required,
    ...props}) {
  return (
    <div>
        <label htmlFor={name} className="block text-uir text-sm font-bold ">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            className={"shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" + className}
            id={name}
            required={required}
            {...props}
        />
    </div>
  )
}

export default Input
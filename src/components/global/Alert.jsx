import React from 'react'

function Alert({
    className,
    text,
    ...props
}) {
  return (
   <>
     <div className={"bg-red-100 border border-red-400 text-red-700 px-4 py-3  relative" + className} >
       {text}
    </div>
   </>
  )
}

export default Alert
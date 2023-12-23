import React from 'react'

const Button = ({children, onclick}) => {
  return (
<button className='flex items-center gap-2 rounded-md text-white' onClick={onclick}>
   {children}
   
</button>
  )
}

export default Button
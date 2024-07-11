import React from 'react'


export const Navbar = ({children}) => {
  return (
    <nav>
    <ul className="flex mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-black">
        {children}
    </ul>
    </nav>
  )
}

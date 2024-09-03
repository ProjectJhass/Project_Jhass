import React from 'react'


export const Navbar = ({children}) => {
  return (
    <nav>
    <ul className="flex mt-9 lg:p-0 p-[20px] rounded-2xl font-medium absolute lg:relative lg:flex-row flex-col right-4 lg:right-0  lg:space-x-8 lg:mt-0 bg-white text-black">
    {children}
    </ul>
    </nav>
  )
}

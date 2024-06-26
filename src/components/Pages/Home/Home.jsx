import React from 'react'
export const Home = ({children}) => {
  return (

    <div className="w-screen h-screen bg-[url('../../../../public/edificios.jpg')] flex justify-center items-center">
     {children}
    </div>
  )
}

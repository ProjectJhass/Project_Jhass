import React from 'react'

export const Main = ({children}) => {
  return (
    <div className='min-h-[300px] h-auto flex place-content-center items-center justify-evenly  text-center flex-wrap mx-[50px] my-[20px]'>
        {children}
    </div>
  )
}

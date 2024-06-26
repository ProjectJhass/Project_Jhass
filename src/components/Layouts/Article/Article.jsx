import React from 'react'

export const Article = ({children}) => {
  return (
    <article className='w-2/4 h-full flex justify-evenly items-center flex-col'>
        {children}
    </article>
  )
}

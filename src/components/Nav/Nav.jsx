import React from 'react'

export const Nav = ({children}) => {
  return (
    <nav>
        <ul className="flex space-x-8">
            {children}
        </ul>
    </nav>
  )
}

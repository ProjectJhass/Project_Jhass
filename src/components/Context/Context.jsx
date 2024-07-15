import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const AppContext =  createContext()

export const AppProvider = ({children}) => {

    const [isOpaque, setisOpaque] = useState(true);

  return (
    <AppContext.Provider value={{isOpaque, setisOpaque}} >
    {children}
    </AppContext.Provider>
  )
}

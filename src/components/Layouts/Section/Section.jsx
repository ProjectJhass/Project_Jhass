import React from 'react'

export const Section = ({ children }) => {
    return (
        <section className='w-full h-72 flex justify-evenly flex-row items-center'>
            {children}
        </section>
    )
}

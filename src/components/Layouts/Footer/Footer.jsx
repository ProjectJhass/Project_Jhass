import React from 'react'

export const Footer = () => {
  return (
    <footer className=' w-full h-1/6 flex flex-col justify-evenly items-center'>
        <button className='bg-[#0165FF] w-44 h-11 rounded-lg text-xl border-white border text-white'>Crear Cuenta</button>
        <a className='text-[#0165FF]' href="#">¿Ya Tienes Cuenta?</a>
    </footer>
  )
}

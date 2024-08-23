import React from 'react'
import face from '../../../assets/logo-de-facebook.png'
import inst from '../../../assets/logotipo-de-instagram.png'
import whats from '../../../assets/whastapp.png'

export const Footer = () => {
  return (
    <div className='w-full h-[100px] bg-[#EEEEEE] flex  items-center justify-around font-Open-Sans ' >
    <div className='flex items-center'>
        <div>
        <img className='px-[5px] w-[30px]' src={face} alt="" />
        </div>
        <div>
        <img className='px-[5px] w-[30px]' src={inst} alt="" />
        </div>
        <div>
        <img className='px-[5px] w-[35px]' src={whats} alt="" />
        </div>
        
        

    </div>
    <h3 className='font-Open-Sans'>Copyright 2024 Jhass CRM. Todos los derechos reservados.</h3>
    </div>
  )
}

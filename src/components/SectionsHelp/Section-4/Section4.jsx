import React from 'react'

export const Section4 = () => {
  return (
    <div className='w-full h-full flex  items-center justify-center bg-[#020C1D] '>
    <div className='w-[75%] flex flex-col items-center justify-center mt-8 mb-14'>

    <p className='text-4xl lg:text-5xl mb-6 text-white font-bold font-serif text-center '>Haz tu comentario</p>
    <textarea className='border-2 rounded-lg w-full h-96 mb-8 font-serif' placeholder='Escriba su pregunta o mensaje'></textarea>
    <button className='text-white bg-[#0165FF] rounded-lg w-56 h-9 font-serif'>Enviar comentario</button>

    </div>
    
    </div>
  )
}

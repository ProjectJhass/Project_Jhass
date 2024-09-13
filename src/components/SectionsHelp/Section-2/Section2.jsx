import React from 'react'

export const Section2 = () => {
  return (
    <div className=' w-full h-[600px] bg-[#0165FF] flex items-center justify-center place-content-center'>
    <div className='md:w-[40%] w-[50%] bg-[#0165FF] flex items-center justify-center  text-center'>
      
        <p className='text-white  text-xl w-[18.5rem] font-bold flex items-center justify-center font-serif
        2xl:text-5xl
        lx:text-5xl
        lg:text-4xl
        md:text-4xl  
                  sm:text-2xl '>Ayuda y comentarios para todos</p>  
     
     </div>
      <div className='h-[500px] w-[50%] bg-[#0165FF] text-2xl text-white flex flex-col items-center place-content-center justify-around '>

          <p className='w-[60%] font-serif  text-xs
                  md:text-xl 
                  sm:text-sm'>Jhass ayuda es un sitio web útil donde las 
          personas pueden obtener asistencia y dejar comentarios 
          desde mayo 2024.
          </p>
          <p className='w-[60%] font-serif  text-xs
                  md:text-xl
                   sm:text-sm'>
          Ofrecemos un foro amigable para que los usuarios hagan preguntas 
          y reciban consejos de nuestra comunidad solidaria. 
            
            </p>
            
            <p className='w-[60%] font-serif  text-xs
                  md:text-xl 
                   sm:text-sm'>
            Nuestro objetivo es crear un espacio positivo
            para que las personas se ayuden unas a otras con compasión.
              </p>
      </div>
</div>
  )
}

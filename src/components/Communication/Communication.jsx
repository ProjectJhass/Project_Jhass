import React from 'react'
import men from '../../images/8.png'


export const Communication = () => {
  return (
    <div className='w-full h-full flex'>
        <div className='w-full h-full flex mt-32 mb-32'>
        <div className='w-[60%] flex items-center justify-center'>
        <div>

         <p className='text-7xl mb-6 font-bold'>Contáctenos</p>
         <p className='text-gray-400 text-4xl mb-7'>Ponte en contacto con nosotros</p>

         <div className='flex mb-6 w-full h-full'>
          <div className='flex flex-col w-1/2 mr-6'>
 
         <p className='mb-4 text-2xl font-bold'>Nombre</p>
        <input className='border-2 rounded-lg h-9' type="text" placeholder='Nombre'/>
          
          </div>
          <div className='flex flex-col w-1/2 '>

         <p className='mb-4 text-2xl font-bold'>Apellidos</p>
         <input className='border-2 rounded-lg h-9' type="text" placeholder='Apellidos'/>
          
          </div>
         </div>


         <p className='mb-4 text-2xl font-bold'>Dirección del correo electronico</p>
         <input className='mb-4 border-2 rounded-lg w-full h-9' type="email" name="correo" id="1" placeholder='hola@gmail.com'/>
         <p className='mb-3 text-2xl font-bold'>Su mensaje</p>
         <textarea className='border-2 rounded-lg w-full h-52 mb-5' placeholder='Escriba su pregunta o mensaje'></textarea>
         
         <button className='rounded-lg bg-[#0165FF] w-full h-10 text-white'>Enviar</button>

        </div>

        </div>
        <div className='w-[49%] flex'>
           <img className='rounded-lg ' src={men} alt="" />
   
        </div>

        
        <div>

         </div>



        </div>
    </div>
  )
}

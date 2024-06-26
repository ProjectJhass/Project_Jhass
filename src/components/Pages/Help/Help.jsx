import React from 'react'
import { Communication } from '../../Communication/Communication'
import woman from '../../../images/9.png'
import { Footer } from '../../Layouts/Footer/Footer'
import Section1 from '../../Sections/Section-1/Section1'

export const Help = () => {
  return (
    
    <div className='w-full h-full '>
      <div>

            <Section1/>
      </div>
      
            <div className=' w-full h-full bg-[#0165FF] flex items-center justify-center'>
          <div className='w-[40%] bg-[#0165FF] flex items-center justify-center mt-96 mb-72'>
            
              <p className='text-white text-3xl w-14 flex items-center justify-center'>Ayuda y comentarios para todos</p>  
           
           </div>
            <div className='w-1/2 bg-[#0165FF] text-2xl text-white flex flex-col items-center justify-center '>

                <p className='w-[75%] mb-20 mt-32'>Jhass ayuda es un sitio web útil donde las 
                personas pueden obtener asistencia y dejar comentarios 
                desde mayo 2024.
                </p>
                <p className='w-[75%] mb-20 mt-32'>
                  
                Ofrecemos un foro amigable para que los usuarios hagan preguntas 
                y reciban consejos de nuestra comunidad solidaria. 
                  
                  </p>
                  
                  <p className='w-[75%] mb-20 mt-32'>
                  Nuestro objetivo es crear un espacio positivo
                  para que las personas se ayuden unas a otras con compasión.
                    </p>
            </div>
    </div>


            <div className='w-full h-full flex'>

            <Communication/>

            </div>
            
            <div className='w-full h-full flex  items-center justify-center bg-[#020C1D]'>
            <div className='w-[75%] flex flex-col items-center justify-center mt-8 mb-14'>

            <p className='text-white mb-8 text-7xl'>Haz tu comentario</p>
            <textarea className='border-2 rounded-lg w-full h-96 mb-8' placeholder='Escriba su pregunta o mensaje'></textarea>
            <button className='text-white bg-[#0165FF] rounded-lg w-72 h-9'>Enviar comentario</button>

            </div>
            
            </div>
            
            <div className='w-full h-full flex items-center justify-center mt-52 mb-52'>
              <div className='w-[90%] flex flex-row items-center justify-center border-2 rounded-xl'>

              <p className='mr-4 ml-[-15%] text-4xl text-gray-400 '>Comentario de nuestros clientes</p>

              <div className='flex flex-raw mr-[-5%]'>

              <img className='mt-10 mb-10 rounded-lg mr-10' src={woman} alt="" />
              <div className='flex flex-col items-center justify-center'>
              <p className='w-96 mb-4  text-gray-400 border-2 rounded-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti molestiae earum totam! Architecto commodi
                 cum deleniti qui dicta vero labore quas voluptas dolorum, maiores, beatae doloremque. 
                 Blanditiis assumenda voluptate accusantium!</p>

              <p className='text-5xl text-gray-400'>Juliana Restrepo</p>
              </div>
              </div>
              
              </div>
            
            </div>       
 

                 <div>
                  <Footer/>
                 </div>
           
            </div>

  
  )
}

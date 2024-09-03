import React from 'react'
import woman from '../../../assets/9.png';

export const Section5 = () => {
  return (
    <div className="w-full h-full flex items-center flex-wrap justify-center mt-32 mb-32">
    <div className="w-[90%] flex flex-col flex-wrap md:flex-row items-center justify-center border-2 rounded-xl p-4">
      <p className="text-2xl md:text-4xl text-center text-gray-400 font-serif  md:mr-8 mb-[15px]">
        Comentario de nuestros clientes
      </p>
      <div className="flex flex-col md:flex-row items-center">
        <img
          className="rounded-lg w-48 h-48 md:w-auto md:h-auto mb-4 md:mb-0 md:mr-10"
          src={woman}
          alt="Client"
        />
        <div className="flex flex-col items-center justify-center">
          <p className="w-full md:w-96 mb-4 text-gray-400 border-2 rounded-xl font-serif p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corrupti molestiae earum totam! Architecto commodi cum deleniti
            qui dicta vero labore quas voluptas dolorum, maiores, beatae
            doloremque. Blanditiis assumenda voluptate accusantium!
          </p>
          <p className="text-2xl md:text-4xl text-gray-400 font-serif">
            Juliana Restrepo
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

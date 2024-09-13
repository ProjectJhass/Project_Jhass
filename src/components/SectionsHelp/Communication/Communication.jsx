import React from 'react';

export const Communication = () => {
  return (
    <div className="w-full h-full flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row items-center justify-between">
        <div className="w-[90%] md:w-[50%] flex flex-col justify-center">
          <p className="text-4xl lg:text-5xl mb-6 font-bold font-serif text-center lg:text-left">
            Contáctenos
          </p>
          <p className="text-gray-400 text-xl lg:text-2xl mb-7 font-serif text-center lg:text-left">
            Ponte en contacto con nosotros
          </p>

          <div className="flex flex-col lg:flex-row lg:space-x-6 mb-6">
            <div className="flex flex-col w-full lg:w-1/2 mb-6 lg:mb-0">
              <p className="mb-4 text-lg lg:text-xl font-bold font-serif">Nombre</p>
              <input
                className="border-2 rounded-lg h-10 px-4"
                type="text"
                placeholder="Nombre"
              />
            </div>
            <div className="flex flex-col w-full lg:w-1/2">
              <p className="mb-4 text-lg lg:text-xl font-bold font-serif">Apellidos</p>
              <input
                className="border-2 rounded-lg h-10 px-4"
                type="text"
                placeholder="Apellidos"
              />
            </div>
          </div>

          <div className="mb-4">
            <p className="mb-4 text-lg lg:text-xl font-bold font-serif">Dirección del correo electrónico</p>
            <input
              className="border-2 rounded-lg w-full h-10 px-4"
              type="email"
              placeholder="hola@gmail.com"
            />
          </div>
          
          <div className="mb-5">
            <p className="mb-3 text-lg lg:text-xl font-bold font-serif">Su mensaje</p>
            <textarea
              className="border-2 rounded-lg w-full h-52 px-4 py-2"
              placeholder="Escriba su pregunta o mensaje"
            ></textarea>
          </div>
          
          <button className="rounded-lg bg-[#0165FF] w-full h-12 text-white font-serif">
            Enviar
          </button>
        </div>

        <div className="w-full h-full ml-[20px] mt-10 lg:mt-0 hidden lg:flex justify-center">
          <img className="rounded-lg" src={"https://res.cloudinary.com/dnweqtuch/image/upload/v1724450504/ContentImagesJhass/ouqu8csneugfjk0xl7oa.png"} alt="Contact us" />
        </div>
      </div>
    </div>
  );
};

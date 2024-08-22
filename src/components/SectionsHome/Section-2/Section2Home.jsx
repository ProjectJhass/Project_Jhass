import React from 'react';
import sampleImage from '../../../../public/home-s2.jpg'; 

export const Section2Home = () => {
  return (
    <div className="relative w-full h-[750px] flex flex-col  md:flex-row justify-center place-content-center p-6 md:p-10    md:py-14">
      <div className='w-[50vw] h-600px flex place-content-center' >

      <img 
        src={sampleImage} 
        alt="Sample" 
        className="w-full rounded-xl md:w-[22rem] md:absolute md:h-[32rem] object-cover relative mb-6 md:mb-0 mr-[190px]" // increased margin-right
      />
      <div className=" md:absolute top-0 md:top-[6rem] w-full ml-[190px] md:w-[23rem] bg-white p-4 md:p-6 border border-blue-500 rounded-[14px]">
        <h2 className="text-2xl md:text-5xl font-medium mb-2 font-serif">
          ¡Optimiza tu Gestión de Nómina con Nuestra Solución Automatizada!
        </h2>
        <p className="text-sm md:text-lg text-justify font-serif">
          Automatiza cálculos salariales, genera desprendibles detallados y crea informes de costos laborales. 
          Asegura compensaciones transparentes y eficientes, y ofrece herramientas poderosas para administrar recursos financieros y humanos.
        </p>
      </div>
        </div>
    </div>
  );
};
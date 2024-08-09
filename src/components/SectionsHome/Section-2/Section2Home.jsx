import React from 'react';
import sampleImage from '../../../assets/images/home-s2.jpg'; 

export const Section2Home = () => {
  return (
    <div className="relative w-full h-auto flex flex-col md:flex-row justify-center p-6 md:p-10 mb-8 md:mb-24 py-10 md:py-14">
      <img 
        src={sampleImage} 
        alt="Sample" 
        className="w-full rounded-xl md:w-[22rem]  md:h-[32rem] object-cover mb-6 md:mb-0 md:mr-96" // increased margin-right
      />
      <div className="relative md:absolute top-0 md:top-[6rem] w-full md:w-[23rem] bg-white p-4 md:p-6 border border-blue-500 rounded-[14px]">
        <h2 className="text-2xl md:text-5xl font-medium mb-2 font-serif">
          ¡Optimiza tu Gestión de Nómina con Nuestra Solución Automatizada!
        </h2>
        <p className="text-sm md:text-lg text-justify font-serif">
          Automatiza cálculos salariales, genera desprendibles detallados y crea informes de costos laborales. 
          Asegura compensaciones transparentes y eficientes, y ofrece herramientas poderosas para administrar recursos financieros y humanos.
        </p>
      </div>
    </div>
  );
};

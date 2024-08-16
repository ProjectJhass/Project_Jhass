import React from 'react';
import sampleImage from '../../../assets/images/home-s2.jpg'; 

export const Section2Home = () => {
  return (
    <div className="relative w-full h-auto flex justify-center p-10 mb-12 py-14">
      <img src={sampleImage} alt="Sample" className="w-[22rem] h-[28rem] object-cover mr-32" />
      <div className="absolute top-[6rem] right-[28rem] w-[23rem] bg-white  p-6 border border-blue-500 rounded-[14px]">
        <h2 className="text-5xl font-medium mb-2 font-Open-Sans ">¡Optimiza tu Gestión de Nómina con Nuestra Solución Automatizada!</h2>
        <p className="text-sm text-justify font-Open-Sans">
          Automatiza cálculos salariales, genera desprendibles detallados y crea informes de costos laborales. 
          Asegura compensaciones transparentes y eficientes, y ofrece herramientas poderosas para administrar recursos financieros y humanos.
        </p>
      </div>
    </div>
  );
};


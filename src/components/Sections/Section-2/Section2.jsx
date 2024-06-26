import React from 'react';
import sampleImage from '../../../images/4.jpg'; 

const ImageWithFloatingText = () => {
  return (
    <div className="relative w-full h-auto flex justify-center p-10 mb-12">
      <img src={sampleImage} alt="Sample" className="w-[22rem] h-[28rem] object-cover mr-32" />
      <div className="absolute top-[6rem] right-[28rem] w-[23rem] bg-white  p-6 border border-blue-500 rounded-md">
        <h2 className="text-5xl font-bold mb-2 ">¡Optimiza tu Gestión de Nómina con Nuestra Solución Automatizada!</h2>
        <p className="text-sm text-justify">
          Automatiza cálculos salariales, genera desprendibles detallados y crea informes de costos laborales. 
          Asegura compensaciones transparentes y eficientes, y ofrece herramientas poderosas para administrar recursos financieros y humanos.
        </p>
      </div>
    </div>
  );
};

export default ImageWithFloatingText;

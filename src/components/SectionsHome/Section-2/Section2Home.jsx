import React from 'react';

export const Section2Home = () => {
  return (
    <div className="relative w-full md:h-[750px] h-[600px] flex flex-col  md:flex-row justify-center place-content-center p-6 md:p-10    md:py-14">
      <div className='w-[90vw] md:h-600px h-600px flex place-content-center md:w-[50%] '  >

      <img 
        src="https://res.cloudinary.com/dnweqtuch/image/upload/v1724450247/ContentImagesJhass/k8vqcybqypqszmyfckuc.jpg" 
        alt="Sample" 
        className=" rounded-xl mr-[70px]  md:w-[22rem] w-[15rem] md:absolute md:h-[34rem]  h-[21rem]   mb-6 md:mb-0 md:mr-[190px] " 
      />
      <div className=" md:absolute absolute top-[9rem] md:top-[6rem] h-[21rem] md:h-[34rem] md:ml-[190px] ml-[70px] md:w-[23rem] w-[14rem] bg-white p-4 pb-7 md:p-6 border border-blue-500 rounded-[14px]">
        <h2 className="text-2xl md:text-5xl font-medium mb-2 font-serif">
          ¡Optimiza tu Gestión de Nómina con Nuestra Solución Automatizada!
        </h2>
        <p className="text-xs md:text-lg text-justify font-serif">
          Automatiza cálculos salariales, genera desprendibles detallados y crea informes de costos laborales. 
          Asegura compensaciones transparentes y eficientes, y ofrece herramientas poderosas para administrar recursos financieros y humanos.
        </p>
      </div>
        </div>
    </div>
  );
};

import React from 'react';
import img1 from '../../../src/assets/logo2_jhass.png';



export const Header = () => {
  return (
    <>
    <header className="bg-[#EEEEEE] shadow-md mx-8 rounded-lg relative">
      <div className="container mx-auto flex items-center justify-between py-4 text-2xl">
        <div className="flex items-center">
          <img src={img1} alt="Logo" className="h-10 w-14" />
        </div>

        <div>
          <button className="bg-blue-500 text-white text-xl rounded-lg px-0.5 py-0.5 hover:bg-[#0165FF]">Iniciar Sesión</button>
        </div>
      </div>
    </header>

    </>
  );
};
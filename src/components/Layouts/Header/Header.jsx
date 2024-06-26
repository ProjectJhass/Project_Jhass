import React from 'react';
import img1 from '../../../images/Logo3.png';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#EEEEEE] shadow-md mx-8 rounded-lg">
      <div className="container mx-auto flex items-center justify-evenly py-4 text-2xl">
        <div className="flex items-center">
          <img src={img1} alt="Logo" className="h-10 w-14" />
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li><a href="#" className="text-black">Inicio</a></li>
            <li><a href="#" className="text-black">Nosotros</a></li>
            <li><a href="#" className="text-black">Ayuda</a></li>
          </ul>
        </nav>
        <div>
          <button className="bg-blue-500 text-white text-xl rounded-lg px-2 py-1 hover:bg-[#0165FF]">Iniciar Sesión</button>
        </div>
      </div>
    </header>
  );
};

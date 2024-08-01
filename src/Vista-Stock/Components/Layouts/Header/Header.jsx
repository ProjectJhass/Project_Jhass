import React from 'react';
import logJhass from '../../../../assets/logo2_jhass.png'
import usuario from '../../../../assets/usuario.png'

const Header = () => {
  return (
    <header className="bg-[#EEEEEE]     w-full">
    <div className="container mx-auto flex items-center justify-evenly py-4 text-2xl">
      <div className="flex items-center">
      <img src={logJhass} alt="Logo" className="h-10 w-14 " />
      </div>
      <nav>
        <ul className="flex space-x-8 text-xl items-center">
          <li><a href="#" className="text-black font-Open-Sans">Inventario</a></li>
          <li><a href="#" className="text-black font-Open-Sans">Ventas</a></li>
          <li><a href="#" className="text-black font-Open-Sans">Calendario</a></li>
        </ul>
      </nav>
      <div className='flex items-center'>
      <img src={usuario} alt="Logo" className="h-8 w-8 mr-[10px]" />
        <h2 className=" text-black text-[21px] font-Open-Sans">Santiago Uribe Bohorquez</h2>
      </div>
    </div>
  </header>
  )
}

export default Header;

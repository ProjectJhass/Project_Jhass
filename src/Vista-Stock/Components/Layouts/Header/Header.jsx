import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#EEEEEE] p-4 rounded shadow-md mb-5 flex justify-evenly">
      <h1 className="text-xl font-semibold">jhass CRM</h1>
      <nav className="flex space-x-4 mt-2">
        <a href="#" className="text-gray-700 hover:text-gray-900">Inventario</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Ventas</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Calendario</a>
      </nav>
      <div className="flex justify-end mt-2">
        <span className="text-gray-700">Martin Hernandez</span>
      </div>
    </header>
  );
}

export default Header;

import React, { useContext, useEffect } from 'react';
import { HeaderUser } from "../Layouts/HeaderUser/HeaderUser";
import { Footer } from '../Layouts/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/Context';

export const SectionPreCompany = () => {
  const navigate = useNavigate();
  const { user, token, setUser } = useContext(AppContext);

  const handleButtonCreateCompany = () => {
    navigate('/Empresa');
  };

  const handleButtonJoinCompany = () => {
    navigate('/Unirse_Empresa');
  };

  
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderUser navItems={[""]} username={user ? user.name : "Usuario"} />
      <main className="flex-grow flex flex-col items-start px-8">
        <div className="flex justify-between w-full my-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleButtonCreateCompany}>
            Crear Empresa
          </button>
          <h2 className="text-lg font-semibold self-center">Mis Empresas</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleButtonJoinCompany}>
            Unirse Empresa
          </button>
        </div>
        <div className="bg-gray-200 p-4 rounded shadow-md text-center w-64 my-4">
          <p className="text-lg font-semibold">Nombre de la empresa</p>
          <p>Descripción</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

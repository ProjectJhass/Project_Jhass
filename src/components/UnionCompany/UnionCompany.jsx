// src/pages/UnionCompany.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const UnionCompany = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); 
  };

  const handleCreateCompany = () => {
    navigate("/Empresa"); 
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-cover bg-center bg-[url('../../../public/1.jpg')]">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0"></div>
      <div className="relative bg-black bg-opacity-75 p-20 rounded-lg shadow-lg max-w-xl w-full z-10">
        <button
          className="absolute top-4 left-4 text-white text-2xl cursor-pointer"
          onClick={handleBackClick}
        >
          <FaArrowLeft />
        </button>
        <h2 className="text-2xl font-bold text-center text-white mb-8">Unirse a Empresa</h2>
        <form onSubmit={[]}>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="empresaCorreo">Correo de la Empresa</label>
            <input
              type="email"
              id="empresaCorreo"
              name="empresaCorreo"
              placeholder="Correo de la Empresa"
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="personaCorreo">Correo Personal</label>
            <input
              type="email"
              id="personaCorreo"
              name="personaCorreo"
              placeholder="Correo personal"
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="rol">Rol</label>
            <input
              type="text"
              id="rol"
              name="rol"
              placeholder="Rol que desempeñará"
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Enviar
          </button>
          <p className="text-center text-white mt-4">
            ¿Ya tienes Empresa?
            <a href="#" className="text-blue-500 hover:underline ml-3" onClick={handleCreateCompany}>
              Crear Empresa
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

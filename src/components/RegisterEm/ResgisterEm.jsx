import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../Context/Context';

export const SectionRegister = () => {
  const NewContext = useContext(AppContext);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/Home');
  };

  const handleOpaqueClick = () => {
    NewContext.setisOpaque(!NewContext.isOpaque);
  };
  
  const handleLoginClick = () => {
    navigate('/IniciarSesion');
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-cover bg-center overflow-hidden bg-[url('../../../public/edificios.jpg')]">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0"></div>
      <div className="relative bg-black bg-opacity-75 p-12 rounded-lg shadow-lg max-w-4xl w-full z-10">
        <button
          className="absolute top-4 left-4 text-white text-2xl cursor-pointer w-[50px] h-[50px] flex justify-center items-center"
          onClick={() => {
            handleBackClick();
            handleOpaqueClick();
          }}
        >
          <FaArrowLeft />
        </button>
        <h2 className="text-2xl font-bold text-center text-white mb-8">Crear Empresa</h2>
        <form>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="nombreEmpresa">Nombre de la empresa</label>
            <input
              type="text"
              id="nombreEmpresa"
              placeholder="Nombre de la empresa"
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="correoEmpresa">Correo de la empresa</label>
            <input
              type="email"
              id="correoEmpresa"
              placeholder="nombre@empresa.com"
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="direccionEmpresa">Dirección de la empresa</label>
            <input
              type="text"
              id="direccionEmpresa"
              placeholder="Dirección de la empresa"
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="nichoMercado">Nicho de mercado</label>
            <input
              type="text"
              id="nichoMercado"
              placeholder="Nicho de mercado"
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="tipoEmpresa">Tipo de empresa</label>
            <input
              type="text"
              id="tipoEmpresa"
              placeholder="Tipo de empresa"
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="descripcion">Descripción</label>
            <textarea
              id="descripcion"
              placeholder="Descripción de la empresa"
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="certificado">Certificado</label>
            <input
              type="file"
              id="certificado"
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Crear Cuenta</button>
          <p className="text-center text-white mt-4">¿Ya tiene una cuenta? <a href="#" className="text-blue-500 hover:underline" onClick={handleLoginClick}>Iniciar Sesión</a></p>
        </form>
      </div>
    </div>
  );
};
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../Context/Context';




export const SectionLogin = () => {
    const NewContext = useContext(AppContext);
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/Home')
    }

    const handleOpaqueClick = () => {
        NewContext.setisOpaque(!NewContext.isOpaque)
      }
      
    const handleRegisterClick = () =>{
      navigate('/Registro')
    }

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-cover bg-center bg-[url('../../../public/1.jpg')]"  >
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0"></div>
      <div className="relative bg-black bg-opacity-75 p-20 rounded-lg shadow-lg max-w-xl w-full z-10">
        <button className="absolute top-4 left-4 text-white text-2xl cursor-pointer"
        onClick={ () => {
            handleBackClick();
            handleOpaqueClick();
            }} >
          <FaArrowLeft />
        </button>
        <h2 className="text-2xl font-bold text-center text-white mb-8">Iniciar Sesión</h2>
        <form>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="nombre@compañia.com" className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="********" className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-white">
              <input type="checkbox" className="mr-2" />
              Recordarme
            </label>
            <a href="#" className="text-blue-500 hover:underline">¿Olvidaste tu contraseña?</a>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Iniciar Sesión</button>
          <p className="text-center text-white mt-4">¿No tienes una cuenta? <a href="#" className="text-blue-500 hover:underline" onClick={handleRegisterClick} >Regístrate</a></p>
        </form>
      </div>
    </div>
  );
}



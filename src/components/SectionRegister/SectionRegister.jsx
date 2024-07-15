import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../Context/Context';


export const SectionRegister = () => {

  const NewContext = useContext(AppContext);
  const navigate = useNavigate();

  const handleBackClick = () => {
      navigate('/Home')
  }

  const handleOpaqueClick = () => {
      NewContext.setisOpaque(!NewContext.isOpaque)
    }
  
  const handleLoginClink = () =>{
    navigate('/IniciarSesion')
  }

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-cover bg-center overflow-hidden bg-[url('../../../public/edificios.jpg')] " >
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0"></div>
      <div className="relative bg-black bg-opacity-75 p-12 rounded-lg shadow-lg max-w-4xl w-full z-10">
        <button className="absolute top-4 left-4 text-white text-2xl cursor-pointer w-[50px] h-[50px] flex justify-center items-center"
                onClick={ () => {
                  handleBackClick();
                  handleOpaqueClick();
                  }}
        >
          <FaArrowLeft />
        </button>
        <h2 className="text-2xl font-bold text-center text-white mb-8">Crear Cuenta</h2>
        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-white mb-2" htmlFor="nombres">Nombres</label>
              <input type="text" id="nombres" placeholder="Nombres" className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="apellidos">Apellidos</label>
              <input type="text" id="apellidos" placeholder="Apellidos" className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" placeholder="nombre@compañia.com" className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-white mb-2" htmlFor="password">Contraseña</label>
              <input type="password" id="password" placeholder="********" className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="confirmPassword">Confirma tu Contraseña</label>
              <input type="password" id="confirmPassword" placeholder="********" className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
            <input type="date" id="fechaNacimiento" className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="rol">¿Cuál es su rol?</label>
            <select id="rol" className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="empleado">Empleado</option>
              <option value="supervisor">Supervisor</option>
              <option value="usuario">Usuario</option>
              <option value="administrador">Administrador</option>
              <option value="gerente">Gerente</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Crear Cuenta</button>
          <p className="text-center text-white mt-4">¿Ya tiene una cuenta? <a href="#" className="text-blue-500 hover:underline" onClick={handleLoginClink} >Iniciar Sesión</a></p>
        </form>
      </div>
    </div>
  );
}



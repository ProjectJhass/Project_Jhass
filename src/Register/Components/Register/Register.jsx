import React from 'react';
import { FaArrowLeft } from 'react-icons/fa'; 
import './Register.css';

function Register() {
  return (
    <div className="background relative">
      <div className="overlay">
        <button className="back-button absolute top-4 left-4 text-white text-2xl cursor-pointer">
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
            <div className="grid grid-cols-3 gap-2">
              <select id="dia" className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                
                {[...Array(31)].map((_, i) => (
                  <option key={i} value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select id="mes" className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            
                {["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"].map((mes, i) => (
                  <option key={i} value={mes}>{mes}</option>
                ))}
              </select>
              <select id="año" className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
               
                {[...Array(100)].map((_, i) => (
                  <option key={i} value={2024 - i}>{2024 - i}</option>
                ))}
              </select>
            </div>
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
          <p className="text-center text-white mt-4">¿Ya tiene una cuenta? <a href="#" className="text-blue-500 hover:underline">Iniciar Sesión</a></p>
        </form>
      </div>
    </div>
  );
}

export default Register;




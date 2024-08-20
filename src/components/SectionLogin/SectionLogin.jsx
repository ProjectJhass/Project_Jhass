import React, { useState, useContext, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/Context';
import { POSTEndpoint, GETEndpoint } from '../ServicesFectch/ServicesFetch';

export const SectionLogin = () => {
  const [formData, setFormData] = useState({ correo: "", contraseña: "" });
  const [errors, setErrors] = useState({ correo: "", contraseña: "" });
  const [generalError, setGeneralError] = useState("");
  const [contentUsers, setContentUsers] = useState([]);
  const { setToken, setUser, token } = useContext(AppContext);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); 
  };

  const handleRegisterClick = () => {
    navigate('/Registro');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrors({ correo: "", contraseña: "" });
    setGeneralError("");

    if (!formData.correo || !formData.contraseña) {
      setGeneralError('Por favor, rellena todos los campos.');
      return;
    }

    const  ContentPost= await POSTEndpoint ({URL:"api/v1/auth/login", Data:formData});
    if (ContentPost) {
        setToken(ContentPost.token)
        

      const ContentGET= await GETEndpoint({URL:"api/v1/usuario", TokenGet:token });
      setContentUsers(ContentGET);
      
      
    }
  };

  useEffect(() => {
    if (contentUsers.length > 0) {
      const user = contentUsers.find(user => user.correo === formData.correo);
      if (user) {
        setUser(user);
        navigate("/PreEmpresa");
      } else {
        setGeneralError('Usuario no encontrado.');
      }
    }
  }, [contentUsers, formData.correo, setUser, navigate]);

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
        <h2 className="text-2xl font-bold text-center text-white mb-8">Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="correo">Email</label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder="nombre@gmail.com"
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.correo && <p className="text-red-500 text-sm">{errors.correo}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="contraseña">Contraseña</label>
            <input
              type="password"
              id="contraseña"
              name="contraseña"
              value={formData.contraseña}
              onChange={handleChange}
              placeholder="********"
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.contraseña && <p className="text-red-500 text-sm">{errors.contraseña}</p>}
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-white">
              <input type="checkbox" className="mr-2" />
              Recordarme
            </label>
            <a href="#" className="text-blue-500 hover:underline">¿Olvidaste tu contraseña?</a>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Iniciar Sesión
          </button>
          {generalError && <p className="text-red-500 text-center mt-4">{generalError}</p>}
          <p className="text-center text-white mt-4">
            ¿No tienes una cuenta? <a href="#" className="text-blue-500 hover:underline" onClick={handleRegisterClick}>Regístrate</a>
          </p>
        </form>
      </div>
    </div>
  );
};

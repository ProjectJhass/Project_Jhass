import React, { useState, useContext } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/Context';
import { POSTEndpoint, GETEndpoint } from '../ServicesFectch/ServicesFetch';

export const SectionLogin = () => {
  const [formData, setFormData] = useState({ correo: "", contraseña: "" });
  const [errors, setErrors] = useState({ correo: "", contraseña: "" });
  const [generalError, setGeneralError] = useState("");
  const { setToken, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleRegisterClick = () => {
    navigate('/Registro');
  };

  const validateEmail = (email) => {
    if (!email.includes('@')) {
      return { isValid: false, message: "El correo debe contener '@'." };
    }
    if (!email.includes('gmail')) {
      return { isValid: false, message: "El correo debe contener 'gmail'." };
    }
    if (!email.endsWith('.com')) {
      return { isValid: false, message: "El correo debe terminar en '.com'." };
    }
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
      return { isValid: false, message: "El correo debe ser un correo de Gmail válido." };
    }
  
    return { isValid: true, message: "" };
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (name === "correo") {
      const emailValidation = validateEmail(value);
      setErrors((prev) => ({ ...prev, correo: emailValidation.message }));
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrors({ correo: "", contraseña: "" });
    setGeneralError("");
  
    const emailValidation = validateEmail(formData.correo);
  
    if (!emailValidation.isValid) {
      setErrors((prev) => ({ ...prev, correo: emailValidation.message }));
      return;
    }
  
    if (!formData.correo || !formData.contraseña) {
      setGeneralError('Por favor, rellena todos los campos.');
      return;
    }
  
    try {
      const contentPost = await POSTEndpoint({ URL: "api/v1/auth/login", Data: formData });
  
      if (contentPost && contentPost.token) {
        setToken(contentPost.token);
        const contentGET = await GETEndpoint({ URL: "api/v1/usuario", TokenGet: contentPost.token });
        
        const user = contentGET.find(user => user.correo === formData.correo);
  
        if (user) {
          setUser(user);
          navigate("/PreEmpresa");
        } else {
          setGeneralError('Correo o contraseña incorrectos.');
        }
      } else {
        setGeneralError('Correo o contraseña incorrectos.');
      }
    } catch (error) {
      setGeneralError('Error al iniciar sesión. Inténtalo nuevamente.');
    }
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-cover bg-center bg-[url('https://res.cloudinary.com/dnweqtuch/image/upload/v1724450240/ContentImagesJhass/qwnv6tsgjmwyfkvizzoq.jpg')]">
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
              className={`w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 ${errors.correo ? 'focus:ring-red-500' : 'focus:ring-blue-500'}`}
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
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-white">
              <input type="checkbox" className="mr-2" />
              Recordarme
            </label>
            <a href="#" className="text-blue-500 hover:underline">¿Olvidaste tu contraseña?</a>
          </div>
          {generalError && <p className="text-red-500 text-center mb-4">{generalError}</p>}
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Iniciar Sesión
          </button>
          <p className="text-center text-white mt-4">
            ¿No tienes una cuenta? <a href="#" className="text-blue-500 hover:underline" onClick={handleRegisterClick}>Regístrate</a>
          </p>
        </form>
      </div>
    </div>
  );
};
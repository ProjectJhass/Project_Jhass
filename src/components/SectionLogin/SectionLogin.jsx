import React, { useState, useContext, useRef } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/Context';
import { POSTEndpoint, GETEndpoint } from '../ServicesFectch/ServicesFetch';
import { ComponentVerification } from '../ComponentVerification/ComponentVerification';

export const SectionLogin = () => {
  const [formData, setFormData] = useState({ correo: "", contraseña: "" });
  const [errors, setErrors] = useState({ correo: "", contraseña: "" });
  const [generalError, setGeneralError] = useState("");
  const { setToken, setUser, user } = useContext(AppContext);
  const navigate = useNavigate();
  const emailSenderRef = useRef(null);

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
      const contentPost = await POSTEndpoint({ URL: "api/v1/auth/login", Data: formData});
  
      if (contentPost && contentPost.token) {
        setToken(contentPost.token);
        const contentGET = await GETEndpoint({ URL: "api/v1/usuario", TokenGet: contentPost.token });
  
        const user = contentGET.find(user => user.correo === formData.correo);
  
        if (user) {
          setUser(user);
          // Llamar a la función sendVerificationCode después de un login exitoso
          if (emailSenderRef.current) {
            emailSenderRef.current.sendVerificationCode();
          }
          navigate("/VerificationCode"); // Redirigir al usuario a la página de verificación
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
      <div className="relative bg-black bg-opacity-75 p-6 md:p-8 lg:p-12 rounded-lg shadow-lg max-w-xs md:max-w-md lg:max-w-md w-full z-10">
        <button
          className="absolute top-4 left-4 text-white text-2xl cursor-pointer"
          onClick={handleBackClick}
          aria-label="Regresar"
        >
          <FaArrowLeft />
        </button>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-6">Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-white mb-2 text-sm md:text-base" htmlFor="correo">Email</label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder="nombre@gmail.com"
              className={`w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 ${errors.correo ? 'focus:ring-red-500' : 'focus:ring-blue-500'} text-sm md:text-base`}
              aria-describedby="emailError"
            />
            {errors.correo && <p id="emailError" className="text-red-500 text-xs md:text-sm my-4">{errors.correo}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2 text-sm md:text-base" htmlFor="contraseña">Contraseña</label>
            <input
              type="password"
              id="contraseña"
              name="contraseña"
              value={formData.contraseña}
              onChange={handleChange}
              placeholder="********"
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
              aria-describedby="passwordError"
            />
          </div>
          <div className="flex items-center justify-between mb-4 text-sm md:text-base">
            <label className="flex items-center text-white">
              <input type="checkbox" className="mr-2" />
              Recordarme
            </label>
            <a href="#" className="text-blue-500 hover:underline">¿Olvidaste tu contraseña?</a>
          </div>
          {generalError && <p className="text-red-500 text-center text-sm md:text-base my-4">{generalError}</p>}
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 text-sm md:text-base">
            Iniciar Sesión
          </button>
          <p className="text-center text-white text-sm md:text-base mt-4">
            ¿No tienes una cuenta? <a href="#" className="text-blue-500 hover:underline" onClick={handleRegisterClick}>Regístrate</a>
          </p>
        </form>
      </div>
      <ComponentVerification ref={emailSenderRef} email={formData.correo} name={user?.nombre && user?.apellido ? `${user.nombre} ${user.apellido}` : ""}/>
    </div>
  );
};

import React, { useState, useContext } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { POSTEndpoint } from '../ServicesFectch/ServicesFetch';
import { AppContext } from '../Context/Context';

export const SectionRegister = () => {
  const [password, setPassword] = useState("");
  const { token } = useContext(AppContext);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validation, setValidation] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    contraseña: "",
    edad: 0,
    telefono: ""
  });
  const [errors, setErrors] = useState({
    correo: "",
    edad: "",
    telefono: ""
  });
  const [touched, setTouched] = useState({
    correo: false,
    edad: false,
    telefono: false
  });
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleLoginClick = () => {
    navigate('/IniciarSesion');
  };

  const validateEmail = (email) => {
    if (!email.includes('gmail') || !email.includes('@') || !email.includes('.com')) {
      return 'El correo electrónico debe contener "gmail", "@", y ".com"';
    }
    return '';
  };

  const validateAge = (age) => {
    if (age < 18) {
      return 'No se le permite crear una cuenta si es menor de edad';
    }
    return '';
  };

  const validatePhone = (phone) => {
    if (phone.length < 10) {
      return 'El número telefónico debe tener menos de 10 dígitos';
    }
    return '';
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    const isMatch = newPassword === confirmPassword;
    setValidation(isMatch);
    setFormData({
      ...formData,
      contraseña: newPassword
    });
  };

  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);
    const isMatch = password === newConfirmPassword;
    setValidation(isMatch);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });

    setTouched({
      ...touched,
      [name]: true
    });

    if (name === 'correo') {
      setErrors({
        ...errors,
        correo: validateEmail(value)
      });
    }
    if (name === 'edad') {
      setErrors({
        ...errors,
        edad: validateAge(value)
      });
    }
    if (name === 'telefono') {
      setErrors({
        ...errors,
        telefono: validatePhone(value)
      });
    }
  };

  const handleDate = (event) => {
    const contentEvent = event.target.value;
    const now = new Date();
    const nowTwo = new Date(contentEvent);
    const year = now.getFullYear();
    const yearTwo = nowTwo.getFullYear();
    const contentYear = year - yearTwo;
    setFormData({
      ...formData,
      edad: contentYear
    });

    setTouched({
      ...touched,
      edad: true
    });

    setErrors({
      ...errors,
      edad: validateAge(contentYear)
    });
  };

  const handleSubmitData = async (event) => {
    event.preventDefault();
    if (!validation) {
      alert("Las contraseñas no coinciden");
      return;
    }

    if (errors.correo || errors.edad || errors.telefono) {
      alert("Corrija los errores antes de enviar");
      return;
    }
    let ContentPost = await POSTEndpoint ({URL:"api/v1/auth/register", Data:formData});
    if (ContentPost) {
      navigate("/IniciarSesion");
    }
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-cover bg-center overflow-hidden bg-[url('/edificios.jpg')]">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0"></div>
      <div className="relative bg-black bg-opacity-75 p-12 rounded-lg shadow-lg max-w-4xl w-full z-10">
        <button
          className="absolute top-4 left-4 text-white text-2xl cursor-pointer w-[50px] h-[50px] flex justify-center items-center"
          onClick={handleBackClick}
        >
          <FaArrowLeft />
        </button>
        <h2 className="text-2xl font-bold text-center text-white mb-8">Crear Cuenta</h2>
        <form onSubmit={handleSubmitData}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-white mb-2" htmlFor="nombre">
                Nombres
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombres"
                className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="apellido">
                Apellidos
              </label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                placeholder="Apellidos"
                className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="correo">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder="nombre@compañia.com"
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              onBlur={() => setTouched({ ...touched, correo: true })}
            />
            {touched.correo && errors.correo && <p className="text-red-500 text-sm">{errors.correo}</p>}
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-white mb-2" htmlFor="password">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={password}
                placeholder="********"
                className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handlePasswordChange}
              />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="confirmPassword">
                Confirma tu Contraseña
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                placeholder="********"
                className={`w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 ${validation ? 'focus:ring-green-500' : 'focus:ring-red-700'}`}
                onChange={handleConfirmPasswordChange}
              />
              {touched.confirmPassword && !validation && <p className="text-red-500 text-sm">Las contraseñas no coinciden</p>}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-white mb-2" htmlFor="fechaNacimiento">
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                id="fechaNacimiento"
                className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleDate}
              />
              {touched.edad && errors.edad && <p className="text-red-500 text-sm">{errors.edad}</p>}
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="telefono">
                Número Telefónico
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Número de teléfono"
                className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                onBlur={() => setTouched({ ...touched, telefono: true })}
              />
              {touched.telefono && errors.telefono && <p className="text-red-500 text-sm">{errors.telefono}</p>}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Crear Cuenta
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-white">¿Ya tienes cuenta?{' '}
            <button onClick={handleLoginClick} className="text-blue-400 hover:underline">
              Inicia Sesión
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

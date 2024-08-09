// src/pages/UnionCompany.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/Context';

export const UnionCompany = () => {
  const [formData, setFormData] = useState({ correoEmpresa: "", correoPersonal: "", rol: "" });
  const [errors, setErrors] = useState({ correoEmpresa: "", correoPersonal: "", rol: "" });
  const [generalError, setGeneralError] = useState("");

  const { setToken, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailPattern.test(email)) {
      return 'El correo electrónico debe ser de la forma nombre@gmail.com';
    }
    return '';
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'correoEmpresa' || name === 'correoPersonal') {
      setErrors({ ...errors, [name]: validateEmail(value) });
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const emailEmpresaError = validateEmail(formData.correoEmpresa);
    const emailPersonalError = validateEmail(formData.correoPersonal);
    if (emailEmpresaError || emailPersonalError) {
      setErrors({ ...errors, correoEmpresa: emailEmpresaError, correoPersonal: emailPersonalError });
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/v1/auth/login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setToken(result.token); // Set token in context
        setUser(result.user);   // Set user details in context if needed
        navigate("/PreEmpresa");
      } else {
        setGeneralError('El correo electrónico o la contraseña están incorrectas');
      }
    } catch (error) {
      setGeneralError('Ocurrió un error. Por favor, inténtelo de nuevo más tarde.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-[url('../../../public/1.jpg')]">
      <div className="relative bg-black bg-opacity-75 p-20 rounded-lg shadow-lg max-w-xl w-full">
        <h2 className="text-2xl font-bold text-center text-white mb-8">Unirse a la Empresa</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="correoEmpresa">Correo de la empresa</label>
            <input
              type="email"
              id="correoEmpresa"
              name="correoEmpresa"
              value={formData.correoEmpresa}
              onChange={handleChange}
              placeholder="nombre@empresa.com"
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.correoEmpresa && <p className="text-red-500 text-sm">{errors.correoEmpresa}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="correoPersonal">Correo personal</label>
            <input
              type="email"
              id="correoPersonal"
              name="correoPersonal"
              value={formData.correoPersonal}
              onChange={handleChange}
              placeholder="usuario@gmail.com"
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.correoPersonal && <p className="text-red-500 text-sm">{errors.correoPersonal}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="rol">Rol</label>
            <input
              type="text"
              id="rol"
              name="rol"
              value={formData.rol}
              onChange={handleChange}
              placeholder="Ej. Administrador"
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Unirse
          </button>
          {generalError && <p className="text-red-500 text-center mt-4">{generalError}</p>}
        </form>
      </div>
    </div>
  );
};

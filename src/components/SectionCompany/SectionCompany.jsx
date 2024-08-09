import React, { useContext, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/Context';

export const SectionCompany = () => {
  const NewContext = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '', 
    sector: '',
    description: '',
    type: '',
  });
  const [charsRemaining, setCharsRemaining] = useState(255);

  const handleBackClick = () => {
    navigate('/PreEmpresa');
  };

  const handleOpaqueClick = () => {
    NewContext.setisOpaque(!NewContext.isOpaque);
  };

  const handleLoginClick = () => {
    navigate('/IniciarSesion');
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    if (value.length <= 255) {
      setFormData({ ...formData, description: value });
      setCharsRemaining(255 - value.length);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/v1/auth/registerCompany', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${NewContext.token}`,

        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        navigate('/Stock');
      } else {
        const errorResponse = await response.json();
        alert('Error en la creación de la empresa: ' + errorResponse.message);
      }
    } catch (error) {
      console.error('Error creating company:', error);
    }
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
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="nombreEmpresa">Nombre de la empresa</label>
              <input
                type="text"
                id="nombreEmpresa"
                placeholder="Nombre de la empresa"
                className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="correoEmpresa">Correo de la empresa</label>
              <input
                type="email"
                id="correoEmpresa"
                placeholder="nombre@empresa.com"
                className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="direccionEmpresa">Dirección de la empresa</label>
              <input
                type="text"
                id="direccionEmpresa"
                placeholder="Dirección de la empresa"
                className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="nichoMercado">Sector de la empresa</label>
              <input
                type="text"
                id="nichoMercado"
                placeholder="Nicho de mercado"
                className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.sector}
                onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="tipoEmpresa">Tipo de empresa</label>
              <select
                id="tipoEmpresa"
                className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              >
                <option value="" disabled>Seleccione el tipo de empresa</option>
                <option value="Microempresa">Microempresa</option>
                <option value="Pequeña empresa">Pequeña empresa</option>
                <option value="Mediana empresa">Mediana empresa</option>
                <option value="Gran empresa">Gran empresa</option>
              </select>
            </div>
            <div className="relative mb-7 md:col-span-2">
              <label className="block text-white mb-2" htmlFor="descripcion">Descripción</label>
              <div className="relative">
                <textarea
                  id="descripcion"
                  placeholder="Descripción de la empresa"
                  className="w-full h-20 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  value={formData.description}
                  onChange={handleDescriptionChange}
                  maxLength={255}
                  minLength={10}
                ></textarea>
                <div className="absolute bottom-2 right-2 text-xs text-gray-400 bg-gray-800 px-1 py-0.5 rounded">
                  {charsRemaining}
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" >
            Crear Empresa
          </button>
          <p className="text-center text-white mt-4">
            ¿Ya tienes una empresa ?{' '}
            <a href="#" className="text-blue-500 hover:underline" onClick={handleLoginClick}>
              Unirse a empresa
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

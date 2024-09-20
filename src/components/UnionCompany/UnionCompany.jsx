import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { GETEndpoint, POSTEndpoint } from '../ServicesFectch/ServicesFetch';
import { AppContext } from '../Context/Context';
import { ErrorModal, InfoModal } from '../ModalReusable/ModalReusable';

export const UnionCompany = () => {
  const navigate = useNavigate();
  const { user, token } = useContext(AppContext);

  const [formData, setFormData] = useState({
    email: '',
    companyId: null,
    userId: null,
    roleId: 1,
  });

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const [roles, setRoles] = useState([
    { id: 1, name: 'Empleado' },
    { id: 2, name: 'Supervisor' },
    // Agrega más roles según sea necesario
  ]);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleCreateCompany = () => {
    navigate('/Empresa');
  };

  const handleSubmitData = async (e) => {
    e.preventDefault();
        setTimeout(() => navigate('/Cale'), 2000);
  
    // try {
    //   // Obtener ID del usuario
    //   const userResponse = await GETEndpoint({ URL: `api/v1/usuario/${user.correo}`});
      
    //   // // Verifica si la respuesta es vacía o no válida
    //   // if (!userResponse || userResponse.status !== 200) {
    //   //   throw new Error('No se pudo obtener el usuario o la respuesta no es válida');
    //   // }
      
    //   const userId = userResponse.id_usuario;
  
    //   // Obtener ID de la empresa
    //   const companyResponse = await GETEndpoint({ URL: `api/v1/companies/${formData.email}` });
      
    //   // Verifica si la respuesta es vacía o no válida
    //   if (!companyResponse || companyResponse.status !== 200) {
    //     throw new Error('No se pudo obtener la empresa o la respuesta no es válida');
    //   }
      
    //   const companyId = companyResponse.id_company;
  
    //   if (userId && companyId) {
    //     const updatedFormData = {
    //       ...formData,
    //       companyId,
    //       userId,
    //     };
        
    //     // const response = await POSTEndpoint({ URL: "api/v1/auth/loginCompany", TokenPost: token, Data: updatedFormData });
        
    //     // if (response.ok) {
    //     //   setModalMessage('¡Unión a la empresa exitosa! Se ha enviado un correo para confirmar la solicitud.');
    //     //   setShowSuccessModal(true);
    //     // } else {
    //     //   const errorResponse = await response.json();
    //     //   setModalMessage('Error al unirse a la empresa: ' + errorResponse.message);
    //     //   setShowErrorModal(true);
    //     // }
    //   } else {
    //     setModalMessage('No se encontró la empresa o el usuario.');
    //     setShowErrorModal(true);
    //   }
    // } catch (error) {
    //   console.error('Error en handleSubmitData:', error);
    //   setModalMessage('Error al intentar unirse a la empresa. Intente nuevamente.');
    //   setShowErrorModal(true);
    // }
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
        <h2 className="text-2xl font-bold text-center text-white mb-8">Unirse a Empresa</h2>
        <form onSubmit={handleSubmitData}>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="empresaCorreo">Correo de la Empresa</label>
            <input
              type="email"
              id="empresaCorreo"
              name="empresaCorreo"
              placeholder="Correo de la Empresa"
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="personaCorreo">Correo Personal</label>
            <input
              type="email"
              id="personaCorreo"
              name="personaCorreo"
              placeholder="Correo personal"
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="rol">Rol</label>
            <select
              id="rol"
              name="rol"
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.roleId}
              onChange={(e) => setFormData({ ...formData, roleId: Number(e.target.value) })}
            >
              {roles.map(role => (
                <option key={role.id} value={role.id}>{role.name}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Unirse a Empresa
          </button>
          <p className="text-center text-white mt-4">
            ¿Ya tienes Empresa?
            <a href="#" className="text-blue-500 hover:underline ml-3" onClick={handleCreateCompany}>
              Crear Empresa
            </a>
          </p>
        </form>
      </div>

      {/* Modales */}
      <ErrorModal
        isOpen={showErrorModal}
        onClose={() => setShowErrorModal(false)}
        message={modalMessage}
      />
      <InfoModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        message={modalMessage}
      />
    </div>
  );
};

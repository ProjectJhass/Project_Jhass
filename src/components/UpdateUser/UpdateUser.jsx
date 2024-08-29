import React, { useContext, useState } from 'react';
import { AppContext } from '../Context/Context';
import { UpdateOk } from '../UpdateOK/UpdateOk'; // Ajusta la ruta si es necesario
import { UPDATEEndpoint, PUTEndpoint } from '../ServicesFectch/ServicesFetch';

export const UpdateUser = ({ onClose }) => {
  const { user, closeSuccessModal, token, isSuccessModalOpen } = useContext(AppContext);

  const [updatedData, setUpdatedData] = useState({
    nombre: user?.nombre || '',
    apellido: user?.apellido || '',
    correo: user?.correo || '',
    telefono: user?.telefono || '',
    edad: user?.edad || 0,
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const handleChange = (e, dataSetter) => {
    const { name, value } = e.target;
    dataSetter(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      alert('Las contraseñas nuevas no coinciden');
      return;
    }
    
    try {
      const contentUpdate=await UPDATEEndpoint({
        URL: `api/v1/usuario/${user.id_usuario}`,
        Data:updatedData,
        TokenPost:token
      })
      if (condition) {
        
      }      
  } catch (error) {
    
  }
    
  };
  

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-2/3">
          <h2 className="text-xl font-semibold mb-6">Actualizar Datos del Usuario</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              {['nombre', 'apellido', 'correo', 'telefono'].map(field => (
                <div className="mb-4" key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === 'correo' ? 'email' : 'text'}
                    id={field}
                    name={field}
                    value={updatedData[field]}
                    onChange={(e) => handleChange(e, setUpdatedData)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              ))}
              <div className="col-span-2 mb-4">
                <label htmlFor="edad" className="block text-sm font-medium text-gray-700">Edad</label>
                <input
                  type="number"
                  id="edad"
                  name="edad"
                  value={updatedData.edad}
                  onChange={(e) => handleChange(e, setUpdatedData)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-6 mb-4">Cambiar Contraseña</h3>
            <div className="grid grid-cols-2 gap-4">
              {['oldPassword', 'newPassword', 'confirmNewPassword'].map(field => (
                <div className="mb-4" key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                    {field.split(/(?=[A-Z])/).join(' ').replace(/^\w/, c => c.toUpperCase())}
                  </label>
                  <input
                    type="password"
                    id={field}
                    name={field}
                    value={passwordData[field]}
                    onChange={(e) => handleChange(e, setPasswordData)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Actualizar
              </button>
              <button
                type="button"
                onClick={onClose}
                className="ml-4 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
      {isSuccessModalOpen && <UpdateOk onClose={closeSuccessModal} />}
    </div>
  );
};

import React, { useContext, useState } from 'react';
import { AppContext } from '../Context/Context';
import { UpdateOk } from '../UpdateOK/UpdateOk'; // Ajusta la ruta si es necesario
import { PUTEndpoint, UPDATEEndpoint } from '../ServicesFectch/ServicesFetch';

export const UpdateUser = ({ onClose }) => {
  const { user, updateUserr, token, openSuccessModal, closeSuccessModal, isSuccessModalOpen } = useContext(AppContext);

  const [updatedData, setUpdatedData] = useState({
    nombre: user?.nombre || '',
    apellido: user?.apellido || '',
    correo: user?.correo || '',
    telefono: user?.telefono || '',
    edad: user?.edad || '',
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const handleChange = (e, dataSetter) => {
    const { name, value } = e.target;
    dataSetter(prevState => ({
      ...prevState,
      [name]: name === 'edad' ? Number(value) : value // Convertir a número si es 'edad'
    }));
  };

  const updateUserDetails = async () => {
    try {
      const contentUpdate = await UPDATEEndpoint({
        URL: `api/v1/usuario/${user.id_usuario}`,
        Data: updatedData,
        TokenPut: token,
      });
      
      if (contentUpdate && !contentUpdate.error) {
        updateUserr(updatedData); // Actualiza el usuario en el contexto
        openSuccessModal();
      } else {
        alert('Error al actualizar los datos. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error durante la actualización:', error);
      alert('Ocurrió un error durante la actualización de los datos. Por favor, intenta nuevamente.');
    }
  };

  const updatePassword = async () => {
    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      alert('Las contraseñas nuevas no coinciden');
      return;
    }

    try {
      const passwordUpdate = await PUTEndpoint({
        URL: 'api/v1/auth/change-password',
        Data: {
          oldPassword: passwordData.oldPassword,
          newPassword: passwordData.newPassword,
        },
        TokenPut: token,
      });
      
      if (passwordUpdate && !passwordUpdate.error) {
        openSuccessModal();
      } else {
        alert('Error al actualizar la contraseña. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error durante la actualización de la contraseña:', error);
      alert('Ocurrió un error durante la actualización de la contraseña. Por favor, intenta nuevamente.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Actualizar datos del usuario si se ingresan cambios
    if (Object.values(updatedData).some(value => value)) {
      updateUserDetails();
    }

    // Actualizar contraseña si se ingresan cambios
    if (passwordData.newPassword || passwordData.oldPassword) {
      updatePassword();
    }
  };

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-2/3">
          <h2 className="text-xl font-semibold mb-6">Actualizar Datos del Usuario</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <input
                type="text"
                name="nombre"
                value={updatedData.nombre}
                onChange={(e) => handleChange(e, setUpdatedData)}
                placeholder="Nombre"
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="apellido"
                value={updatedData.apellido}
                onChange={(e) => handleChange(e, setUpdatedData)}
                placeholder="Apellido"
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="email"
                name="correo"
                value={updatedData.correo}
                onChange={(e) => handleChange(e, setUpdatedData)}
                placeholder="Correo Electrónico"
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="tel"
                name="telefono"
                value={updatedData.telefono}
                onChange={(e) => handleChange(e, setUpdatedData)}
                placeholder="Teléfono"
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="number"
                name="edad"
                value={updatedData.edad}
                onChange={(e) => handleChange(e, setUpdatedData)}
                placeholder="Edad"
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <h2 className="text-xl font-semibold mb-4">Actualizar Contraseña</h2>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <input
                type="password"
                name="oldPassword"
                value={passwordData.oldPassword}
                onChange={(e) => handleChange(e, setPasswordData)}
                placeholder="Contraseña Actual"
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="password"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={(e) => handleChange(e, setPasswordData)}
                placeholder="Nueva Contraseña"
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="password"
                name="confirmNewPassword"
                value={passwordData.confirmNewPassword}
                onChange={(e) => handleChange(e, setPasswordData)}
                placeholder="Confirmar Nueva Contraseña"
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Actualizar
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
            >
              Cancelar
            </button>
          </form>
        </div>
      </div>
      {isSuccessModalOpen && <UpdateOk onClose={closeSuccessModal} />}
    </div>
  );
};

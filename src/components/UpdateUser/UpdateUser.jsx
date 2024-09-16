import React, { useContext, useState } from 'react';
import { UpdateOk } from '../UpdateOK/UpdateOk'; // Ajusta la ruta si es necesario
import { PUTEndpoint, UPDATEEndpoint } from '../ServicesFectch/ServicesFetch';
import { AppContext } from '../Context/Context'; // Importa el hook del contexto
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importa íconos para mostrar/ocultar

export const UpdateUser = ({ onClose }) => {
  const { user, updateUserr, token } = useContext(AppContext);

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

  const [isPasswordVisible, setIsPasswordVisible] = useState({
    oldPassword: false,
    newPassword: false,
    confirmNewPassword: false,
  });

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleChange = (e, dataSetter) => {
    const { name, value } = e.target;
    dataSetter(prevState => ({
      ...prevState,
      [name]: name === 'edad' ? (value === '' ? '' : Number(value)) : value,
    }));
  };

  const togglePasswordVisibility = (field) => {
    setIsPasswordVisible(prevState => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const openSuccessModal = () => {
    setIsSuccessModalOpen(true);
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  const updateUserDetails = async () => {
    try {
      const contentUpdate = await UPDATEEndpoint({
        URL: `api/v1/usuario/${user.id_usuario}`,
        Data: updatedData,
        TokenPut: token,
      });

      if (contentUpdate && !contentUpdate.error) {
        updateUserr(updatedData);
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

    if (Object.values(updatedData).some(value => value !== '' && value !== user[value])) {
      updateUserDetails();
    }

    if (passwordData.oldPassword && passwordData.newPassword && passwordData.confirmNewPassword) {
      updatePassword();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50  bg-black bg-opacity-20 ">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Actualizar Informacion</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <input
              type="text"
              name="nombre"
              value={updatedData.nombre}
              onChange={(e) => handleChange(e, setUpdatedData)}
              placeholder="Nombre"
              className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="text"
              name="apellido"
              value={updatedData.apellido}
              onChange={(e) => handleChange(e, setUpdatedData)}
              placeholder="Apellido"
              className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="email"
              name="correo"
              value={updatedData.correo}
              onChange={(e) => handleChange(e, setUpdatedData)}
              placeholder="Correo Electrónico"
              className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="tel"
              name="telefono"
              value={updatedData.telefono}
              onChange={(e) => handleChange(e, setUpdatedData)}
              placeholder="Teléfono"
              className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="number"
              name="edad"
              value={updatedData.edad}
              onChange={(e) => handleChange(e, setUpdatedData)}
              placeholder="Edad"
              className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <h2 className="text-2xl font-bold mb-3 text-gray-800">Cambiar Contraseña</h2>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <div className="relative">
              <input
                type={isPasswordVisible.oldPassword ? 'text' : 'password'}
                name="oldPassword"
                value={passwordData.oldPassword}
                onChange={(e) => handleChange(e, setPasswordData)}
                placeholder="Contraseña Actual"
                className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility('oldPassword')}
                className="absolute inset-y-0 right-0 flex items-center px-2"
              >
                {isPasswordVisible.oldPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="relative">
              <input
                type={isPasswordVisible.newPassword ? 'text' : 'password'}
                name="newPassword"
                value={passwordData.newPassword}
                onChange={(e) => handleChange(e, setPasswordData)}
                placeholder="Nueva Contraseña"
                className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility('newPassword')}
                className="absolute inset-y-0 right-0 flex items-center px-2"
              >
                {isPasswordVisible.newPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="relative">
              <input
                type={isPasswordVisible.confirmNewPassword ? 'text' : 'password'}
                name="confirmNewPassword"
                value={passwordData.confirmNewPassword}
                onChange={(e) => handleChange(e, setPasswordData)}
                placeholder="Confirmar Nueva Contraseña"
                className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility('confirmNewPassword')}
                className="absolute inset-y-0 right-0 flex items-center px-2"
              >
                {isPasswordVisible.confirmNewPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Actualizar
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white py-2 px-6 rounded-md hover:bg-gray-500 transition duration-300"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
      {isSuccessModalOpen && <UpdateOk onClose={closeSuccessModal} />}
    </div>
  );
};

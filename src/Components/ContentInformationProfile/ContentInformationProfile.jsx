import React, { useContext, useState } from 'react';
import { AppContext } from '../Context/Context';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaCakeCandles } from 'react-icons/fa6';
import { UpdateUser } from '../UpdateUser/UpdateUser';
import { ErrorModal, WarningModal } from '../ModalReusable/ModalReusable'; 
import { DELETEEndpoint } from '../ServicesFetch/ServicesFetch'; 
import { useNavigate } from 'react-router-dom';

export const ContentInformationProfile = ({ onClose }) => {
  const { user, setUser, token } = useContext(AppContext);
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const closeModal = () => {
    setIsUpdateFormOpen(false);
    setIsDeleteConfirmOpen(false);
  };

  const handleDelete = async () => {
    try {
      const response = await DELETEEndpoint({
        URL: `api/v1/usuario/${user.id_usuario}`,
        TokenDelete: token,
      });

      if (response.error) {
        throw new Error(response.error);
      }

      setUser(null);
      onClose();
      navigate('/Home');
    } catch (error) {
      setError('Hubo un problema al eliminar el usuario. Por favor, inténtalo de nuevo.');
    }
  };

  if (!user) {
    return (
      <div role="status" className="flex justify-center items-center h-64">
        {/* Loading Spinner */}
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="relative p-6 bg-white rounded-lg w-11/12 md:w-1/2 lg:w-1/3 max-w-md">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <img
            src="https://res.cloudinary.com/dnweqtuch/image/upload/v1724450505/ContentImagesJhass/dfzjdfz4hz5bixvrkfex.png"
            alt="Close"
            className="w-4 h-4"
          />
        </button>

        {isUpdateFormOpen ? (
          <UpdateUser user={user} onClose={closeModal} />
        ) : (
          <>
            <div className="flex flex-col items-center">
              <img
                className="w-24 h-24 rounded-full border-4 border-gray-300 mb-4"
                src={user.avatar || 'https://via.placeholder.com/100'}
                alt="User Avatar"
              />
              <div className="text-center mb-4">
                <div className="text-2xl font-semibold text-gray-800">
                  {user.nombre ? `${user.nombre} ${user.apellido}` : 'Usuario'}
                </div>
                <div className="text-sm text-gray-500">{user.rol || 'Rol del Usuario'}</div>
              </div>
            </div>

            {/* Información del usuario en formato de lista con íconos */}
            <ul className="divide-y divide-gray-200 mx-7">
              <li className="py-2 flex items-center">
                <FaEnvelope className="text-black mr-2" />
                <span className="text-gray-700">{user.correo || 'correo@ejemplo.com'}</span>
              </li>
              <li className="py-2 flex items-center">
                <FaCakeCandles className="text-black mr-2" />
                <span className="text-gray-700">{user.edad || 'Fecha de Nacimiento'}</span>
              </li>
              <li className="py-2 flex items-center">
                <FaPhone className="text-black mr-2" />
                <span className="text-gray-700">{user.telefono || 'Teléfono'}</span>
              </li>
            </ul>

            <div className="flex justify-center mt-4 space-x-4">
              <button
                onClick={() => setIsUpdateFormOpen(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Editar
              </button>
              <button
                onClick={() => setIsDeleteConfirmOpen(true)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Eliminar
              </button>
            </div>
          </>
        )}

        {/* Mostrar el modal de error si hay un error */}
        <ErrorModal
          isOpen={!!error}
          onClose={() => setError(null)}
          message={error}
        />

        {/* Mostrar el modal de confirmación de eliminación */}
        <WarningModal
          isOpen={isDeleteConfirmOpen}
          onClose={closeModal}
          message="¿Estás seguro de que deseas eliminar este usuario?"
          buttons={[
            {
              label: 'Cancelar',
              onClick: closeModal,
              className: 'bg-gray-300 hover:bg-gray-400 text-gray-800',
            },
            {
              label: 'Eliminar',
              onClick: handleDelete,
              className: 'bg-red-500 hover:bg-red-600 text-white',
            }
          ]}
        />
      </div>
    </div>
  );
};

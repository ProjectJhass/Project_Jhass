import React, { useContext, useState } from 'react';
import { AppContext } from '../Context/Context';
import { UpdateUser } from '../UpdateUser/UpdateUser'; // Importa el componente UpdateUser

export const ModalProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, openUpdateModal, closeUpdateModal, isUpdateModalOpen, deleteUser } = useContext(AppContext);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleUpdate = () => {
    // Abre el modal de actualización
    openUpdateModal();
  };

  const handleDelete = () => {
    // Aquí puedes añadir la lógica para eliminar el perfil
    if (deleteUser) {
      deleteUser();
    }
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center mx-3 text-sm bg-gray-400 rounded-full hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
        aria-expanded={isOpen}
        onClick={handleToggle}
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 rounded-full"
          src={user?.profilePicture || "https://res.cloudinary.com/dnweqtuch/image/upload/v1724450231/ContentImagesJhass/cedqvp85sj2a5qs9upkm.png"}
          alt="user photo"
        />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 top-full mt-2 w-72 bg-gray-700 text-gray-100 shadow-lg rounded-lg z-50 border border-gray-500"
          id="dropdown"
        >
          <div className="py-4 px-6 flex items-center border-b border-gray-600">
            <img
              className="w-16 h-16 rounded-full mr-4 bg-gray-300"
              src={user?.profilePicture || "https://res.cloudinary.com/dnweqtuch/image/upload/v1724450231/ContentImagesJhass/cedqvp85sj2a5qs9upkm.png"}
              alt="user photo"
            />
            <div>
              <span className="block text-lg font-medium text-white">
                {user?.nombre || 'User Name'}
              </span>
              <span className="block text-sm text-gray-300">
                {user?.correo || 'user@example.com'}
              </span>
            </div>
          </div>
          <div className="py-4 px-6 text-sm">
            <div className="flex items-center mb-4">
              <svg
                className="w-5 h-5 text-gray-300 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 4a1 1 0 10-2 0 1 1 0 002 0z" />
                <path d="M10 12a4 4 0 00-4-4H4a4 4 0 000 8h2a4 4 0 004-4z" />
                <path d="M12 10a1 1 0 00-1-1h-2a1 1 0 00-1 1v1h4v-1z" />
              </svg>
              <span>{user?.telefono || '0000000000'}</span>
            </div>
            <div className="flex items-center mb-4">
              <svg
                className="w-5 h-5 text-gray-300 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 4a1 1 0 10-2 0 1 1 0 002 0z" />
                <path d="M12 12a4 4 0 00-4-4H4a4 4 0 000 8h4a4 4 0 004-4z" />
                <path d="M11 7a1 1 0 00-1-1h-1a1 1 0 00-1 1v1h4V7z" />
              </svg>
              <span>{user?.edad || '00'} años</span>
            </div>
          </div>
          <ul className="py-2 border-t border-gray-600">
            <li>
              <button
                onClick={handleUpdate}
                className="block py-2 px-4 text-sm text-gray-100 hover:bg-gray-600 rounded-lg w-full text-left"
              >
                Actualizar Datos
              </button>
            </li>
            <li>
              <button
                onClick={handleDelete}
                className="block py-2 px-4 text-sm text-red-500 hover:bg-red-600 rounded-lg w-full text-left"
              >
                Eliminar Perfil
              </button>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-sm text-gray-100 hover:bg-gray-600 rounded-lg w-full text-left"
              >
                Cerrar Sesión
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Mostrar el modal de actualización si está abierto */}
      {isUpdateModalOpen && (
        <UpdateUser />
      )}
    </div>
  );
};

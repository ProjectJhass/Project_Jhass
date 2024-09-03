import React, { useContext, useState } from 'react';
import { AppContext } from '../Context/Context';
import { ContentInformationProfile } from '../ContentInformationProfile/ContentInformationProfile';
import { useNavigate } from 'react-router-dom';

export const ModalProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const { user, deleteUser } = useContext(AppContext);
  const navigate=useNavigate
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleViewInformationProfile = () => {
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setIsUpdateModalOpen(false);
  };
  const handleHome=()=>{
    navigate("/Home")
  }

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center mx-3 text-sm bg-gray-100 rounded-full hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 p-2"
        id="user-menu-button"
        aria-expanded={isOpen}
        onClick={handleToggle}
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 rounded-full border-2 border-gray-300"
          src={user?.profilePicture || "https://res.cloudinary.com/dnweqtuch/image/upload/v1724450231/ContentImagesJhass/cedqvp85sj2a5qs9upkm.png"}
          alt="user photo"
        />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 top-full mt-2 w-80 bg-white text-gray-800 shadow-lg rounded-lg z-50 border border-gray-300 p-4"
          id="dropdown"
        >
          <div className="flex items-center mb-4">
            <img
              className="w-12 h-12 rounded-full mr-4 border-2 border-gray-300"
              src={user?.profilePicture || "https://res.cloudinary.com/dnweqtuch/image/upload/v1724450231/ContentImagesJhass/cedqvp85sj2a5qs9upkm.png"}
              alt="Foto de perfil"
            />
            <div>
              <p className="text-base font-semibold">{user?.nombre} {user?.apellido}</p>
            </div>
          </div>
          <ul className="py-2">
            <li className="border-b border-gray-300">
              <button
                onClick={handleViewInformationProfile}
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg w-full text-left"
              >
                Datos Personales
              </button>
            </li>
            <li className="border-b border-gray-300">
              <button
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg w-full text-left"
              >
                Seguimiento de Trabajo
              </button>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg w-full text-left"
                onClick={handleHome}
              >
                Cerrar Sesión
              </a>
            </li>
          </ul>
        </div>
      )}

      {isUpdateModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative shadow-lg border border-gray-300">
            <button
              type="button"
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 border-none focus:outline-none"
              onClick={closeUpdateModal}
              aria-label="Close modal"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <ContentInformationProfile onClose={closeUpdateModal} />
          </div>
        </div>
      )}
    </div>
  );
};

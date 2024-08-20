import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
export const ModalPreCompany = ({ User, Company, onClose }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleJoinCompany = () => {
    setShowConfirmation(true);
  };

  const confirmJoin = () => {
    navigate('/Unirse_Empresa');
    onClose(); // Cierra el modal principal después de confirmar
  };

  const cancelJoin = () => {
    setShowConfirmation(false);
    onClose(); // Cierra ambos modales al cancelar
  };

  const handleOverlayClick = (e) => {
    // Cierra el modal si el clic es fuera del área de contenido
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <section 
      className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50' 
      onClick={handleOverlayClick}
    >
      <div className='relative w-full max-w-lg bg-white rounded-lg shadow-lg overflow-hidden'>
        <div className='relative p-6'>
          {/* Botón de cerrar */}
          <button
            type="button"
            className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
            onClick={onClose}
          >
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Cerrar modal</span>
          </button>

          {/* Título del modal */}
          <div className='text-center mb-6'>
            <FontAwesomeIcon icon={faHandshake} style={{ color: "#000000" ,opacity:"0.7" }} size="3x" />
            <h2 className='text-lg text-black my-4 font-medium'>
              Señor/a {User ? `${User.nombre} ${User.apellido}` : 'Usuario'}, ¿Desea unirse a la empresa {Company.name}?
            </h2>
          </div>

          {/* Contenido del modal */}
          <div className='text-center'>
            <button
              className='bg-blue-600 text-white text-[15px] font-semibold rounded-lg px-4 py-2 hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300'
              onClick={handleJoinCompany}
            >
              Unirse a Empresa
            </button>
          </div>

          {/* Modal de confirmación */}
          {showConfirmation && (
            <div className='fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50'>
              <div className='relative p-6 bg-white rounded-lg shadow-lg w-full max-w-md flex flex-col items-center'>
                <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#000", marginBottom: "10px", opacity:"0.7" }} size="2x" />
                <p className='mb-6 text-black text-center'>
                  ¿Está seguro de que desea unirse a la empresa {Company.name}?
                </p>
                <div className='flex justify-center items-center space-x-4'>
                  <button
                    className='py-2 px-4 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg border border-gray-300 hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200'
                    onClick={cancelJoin}
                  >
                    No, cancelar
                  </button>
                  <button
                    className='py-2 px-4 text-sm font-medium text-white bg-[#0165FF] rounded-lg hover:bg-[#014c99] focus:outline-none focus:ring-4 focus:ring-blue-300'
                    onClick={confirmJoin}
                  >
                    Sí, estoy seguro
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

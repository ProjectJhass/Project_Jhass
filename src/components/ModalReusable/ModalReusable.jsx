import React from 'react';
import { FaExclamationTriangle, FaExclamationCircle, FaInfoCircle } from 'react-icons/fa';

// Modal Reutilizable
const ModalReusable = ({
  isOpen,
  onClose,
  title,
  message,
  icon: Icon,  // Icono personalizado
  buttons  // Arreglo de botones personalizados
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full z-50">
        <div className="flex items-center mb-4">
          {Icon && <Icon className="text-2xl mr-2" />} {/* Renderiza el icono si se proporciona */}
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <p className="mb-6">{message}</p>
        <div className="flex space-x-4">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={button.onClick}
              className={`w-full py-2 px-4 ${button.className || 'bg-blue-600 text-white rounded hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Modal de Error
const ErrorModal = ({ isOpen, onClose, message }) => {
  return (
    <ModalReusable
      isOpen={isOpen}
      onClose={onClose}
      title="Error"
      message={message}
      icon={FaExclamationTriangle}
      buttons={[
        {
          label: 'Cerrar',
          onClick: onClose,
          className: 'bg-red-600 text-white rounded hover:bg-red-700'
        }
      ]}
    />
  );
};

// Modal de Advertencia
const WarningModal = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full z-50">
        <div className="flex items-center mb-4">
          <FaExclamationCircle className="text-2xl text-black mr-2" />
          <h2 className="text-xl font-bold">Advertencia</h2>
        </div>
        <p className="mb-6">{message}</p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

// Modal Informativo
const InfoModal = ({ isOpen, onClose, message }) => {
  return (
    <ModalReusable
      isOpen={isOpen}
      onClose={onClose}
      title="Información"
      message={message}
      icon={FaInfoCircle}
      buttons={[
        {
          label: 'Aceptar',
          onClick: onClose,
          className: 'bg-blue-600 text-white rounded hover:bg-blue-700'
        }
      ]}
    />
  );
};

// Modal Personalizado
// Modal Personalizado
const CustomModal = ({ isOpen, title, message, buttons = [], onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full z-50">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="mb-6">{message}</p>
        <div className="flex justify-between mb-4">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`py-2 px-4 ${button.style}`}
              onClick={button.onClick}
            >
              {button.label}
            </button>
          ))}
        </div>
        <button onClick={onClose} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
          Cerrar
        </button>
      </div>
    </div>
  );
};


// Exportación de los modales
export { ErrorModal, WarningModal, InfoModal, CustomModal };

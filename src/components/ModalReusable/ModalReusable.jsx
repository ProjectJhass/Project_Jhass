import React from 'react';
import { FaExclamationTriangle, FaExclamationCircle, FaInfoCircle, FaCheckCircle } from 'react-icons/fa';

// Modal Reutilizable
export const ModalReusable = ({
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
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
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
export const ErrorModal = ({ isOpen, onClose, message }) => {
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
export const WarningModal = ({ isOpen, onClose, message }) => {
  return (
    <ModalReusable
      isOpen={isOpen}
      onClose={onClose}
      title="Advertencia"
      message={message}
      icon={FaExclamationCircle}
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

// Modal Informativo
export const InfoModal = ({ isOpen, onClose, message }) => {
  return (
    <ModalReusable
      isOpen={isOpen}
      onClose={onClose}
      title="Información"
      message={message}
      icon={FaInfoCircle}
      buttons={[
        {
          label: 'OK',
          onClick: onClose,
          className: 'bg-blue-600 text-white rounded hover:bg-blue-700'
        }
      ]}
    />
  );
};

// Modal Personalizado
export const CustomModal = ({ isOpen, onClose, title, message, icon, buttons }) => {
  return (
    <ModalReusable
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      message={message}
      icon={icon || FaCheckCircle}
      buttons={buttons}
    />
  );
};

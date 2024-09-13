import React from 'react';

export const InformativeModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 md:p-8 lg:p-12 rounded-lg shadow-lg max-w-xs md:max-w-md lg:max-w-lg w-full mx-4">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-4 text-center">
          Bienvenido al Sistema
        </h2>
        <p className="mb-4 text-justify text-sm md:text-base lg:text-lg">
          En esta sección puedes gestionar tus empresas. Aquí puedes:
        </p>
        <ul className="list-disc pl-5 mb-4 text-justify text-sm md:text-base lg:text-lg">
          <li>Ver la lista de empresas disponibles.</li>
          <li>Unirte a una empresa existente si eres empleado.</li>
          <li>Crear una nueva empresa utilizando el botón "Crear Empresa".</li>
        </ul>
        <p className="mb-4 text-justify text-sm md:text-base lg:text-lg">
          Si ya has creado o te has unido a una empresa, podrás gestionar los datos y acceder a información detallada sobre ella.
        </p>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 text-sm md:text-base lg:text-lg"
            onClick={onClose}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

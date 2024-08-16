import React from 'react';

export const InformativeModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-center">Bienvenido al Sistema</h2>
        <p className="mb-4 text-justify">
          En esta sección puedes gestionar tus empresas. Aquí puedes:
        </p>
        <ul className="list-disc pl-5 mb-4 text-justify">
          <li>Ver la lista de empresas disponibles.</li>
          <li>Unirte a una empresa existente si eres empleado.</li>
          <li>Crear una nueva empresa utilizando el botón "Crear Empresa".</li>
        </ul>
        <p className="mb-4 text-justify">
          Si ya has creado o te has unido a una empresa, podrás gestionar los datos y acceder a información detallada sobre ella.
        </p>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
            onClick={onClose}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

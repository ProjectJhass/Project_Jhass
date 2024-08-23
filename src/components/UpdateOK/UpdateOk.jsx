import React from 'react';

export const UpdateOk = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-semibold mb-4">¡Actualización Exitosa!</h2>
        <p className="mb-4">Los datos del usuario se han actualizado correctamente.</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

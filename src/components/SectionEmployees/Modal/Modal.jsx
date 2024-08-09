import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, card, onSave, onClose }) => {
  const [rol, setRol] = useState(card ? card.rol : '');

  const handleSave = () => {
    onSave({ ...card, rol });
    onClose();
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-[#D9D9D9]  p-4 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4 font-Open-Sans">Editar Rol</h2>
        <input
          type="text"
          value={rol}
          onChange={(e) => setRol(e.target.value)}
          className="block w-full p-2 border rounded mb-2 font-Open-Sans"
        />
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 font-Open-Sans"
          >
            Guardar
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded font-Open-Sans"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;

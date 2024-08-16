import React, { useContext, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { AppContext } from '../../Context/Context';

const Modal = ({ isOpen, onSave, onClose }) => {
  const { selectedCardId, cards } = useContext(AppContext);
  const [rol, setRol] = useState('');

  useEffect(() => {
    if (selectedCardId) {
      const selectedCard = cards.find((card) => card._id === selectedCardId);
      if (selectedCard) {
        setRol(selectedCard.rol);
      }
    }
  }, [selectedCardId, cards]);

  const handleSave = () => {
    const updatedCards = cards.map((card) =>
      card._id === selectedCardId ? { ...card, rol } : card
    );
    onSave(updatedCards);
    onClose();
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-[#D9D9D9] p-4 rounded shadow-lg">
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

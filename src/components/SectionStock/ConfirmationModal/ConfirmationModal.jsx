import React from 'react';
import Modal from 'react-modal';

const ConfirmationModal = ({ isOpen, onRequestClose, message }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirmación"
      className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50"
      overlayClassName=""
    >
      <div className="bg-white p-6 rounded-lg w-full max-w-md text-center">
        <p className="mb-4">{message}</p>
        <button
          onClick={onRequestClose}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Cerrar
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;

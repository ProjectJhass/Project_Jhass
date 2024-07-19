import React from 'react';
import Modal from 'react-modal';

const ProductDetailModal = ({ isOpen, onRequestClose, product, onDelete }) => {
  if (!product) return null;

  const handleDelete = () => {
    onDelete(product.name);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Detalles del Producto"
      className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50"
      overlayClassName=""
    >
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
        <p className="mb-2">Cantidad: {product.quantity}</p>
        <p className="mb-2">Descripción: {product.description}</p>
        {product.image && (
          <img src={product.image} alt={product.name} className="mb-4" />
        )}
        <div className="flex justify-between">
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Eliminar
          </button>
          <button
            onClick={onRequestClose}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Cerrar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductDetailModal;

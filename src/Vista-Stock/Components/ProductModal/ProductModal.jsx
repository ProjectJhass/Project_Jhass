import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const ProductDetailModal = ({ isOpen, onRequestClose, product, onDelete, onUpdate }) => {
  const [editedProduct, setEditedProduct] = useState(product);

  useEffect(() => {
    setEditedProduct(product); // Actualiza los campos cuando el producto cambie
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === 'quantity' ? parseInt(value, 10) : value,
    }));
  };

  const handleSave = () => {
    onUpdate(editedProduct); // Llama a la función de actualización con el producto editado
    onRequestClose(); // Cierra el modal
  };

  if (!product) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Detalles del Producto"
      className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50"
      overlayClassName=""
    >
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-lg font-semibold mb-2">Editar {product.name}</h2>
        <input
          type="text"
          name="name"
          value={editedProduct.name}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="number"
          name="quantity"
          value={editedProduct.quantity}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
        />
        <textarea
          name="description"
          value={editedProduct.description}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
        />
        {editedProduct.image && (
          <img src={editedProduct.image} alt={product.name} className="mb-4" />
        )}
        <div className="flex justify-between">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Guardar
          </button>
          <button
            onClick={onRequestClose}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancelar
          </button>
          <button
            onClick={() => { onDelete(product.name); onRequestClose(); }}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Eliminar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductDetailModal;

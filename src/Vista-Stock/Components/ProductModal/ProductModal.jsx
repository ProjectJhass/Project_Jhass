import React, { useState } from 'react';
import Modal from 'react-modal';

const ProductDetailModal = ({ isOpen, onRequestClose, product, onDelete, onEdit }) => {
  const [editedProduct, setEditedProduct] = useState({
    name: product.name,
    quantity: product.quantity,
    description: product.description,
    image: product.image,
  });

  if (!product) return null;

  const handleDelete = () => {
    onDelete(product.name);
    onRequestClose();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === "quantity" ? parseInt(value) : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setEditedProduct((prevProduct) => ({
        ...prevProduct,
        image: reader.result,
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onEdit(editedProduct);
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
        <h2 className="text-lg font-semibold mb-2">Editar {product.name}</h2>
        <input
          type="text"
          name="name"
          value={editedProduct.name}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
          placeholder="Nombre del Producto"
        />
        <input
          type="number"
          name="quantity"
          value={editedProduct.quantity}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
          placeholder="Cantidad"
        />
        <textarea
          name="description"
          value={editedProduct.description}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
          placeholder="Descripción"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border p-2 mb-2 w-full"
        />
        {editedProduct.image && (
          <img src={editedProduct.image} alt={editedProduct.name} className="mb-4" />
        )}
        <div className="flex justify-between">
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Guardar
          </button>
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

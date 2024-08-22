import React, { useState } from 'react';
import Modal from 'react-modal';

export const CreateProductCard = ({ onCreate }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleCreate = () => {
    if (name && quantity && description && price && image) {
      const newProduct = { 
        name, 
        quantity: parseInt(quantity, 10), 
        description, 
        price: parseFloat(price), 
        image 
      };
      onCreate(newProduct);
      setName('');
      setQuantity('');
      setDescription('');
      setPrice('');
      setImage(null);
      closeModal();
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="w-full h-full flex justify-center items-center bg-gray-200 border rounded-lg shadow-md p-4"
      >
        <div className="w-12 h-12 flex justify-center items-center bg-gray-400 rounded-full">
          <span className="text-white text-2xl">+</span>
        </div>
      </button>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Crear Producto"
        className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-6 rounded-lg w-full max-w-md">
          <h2 className="text-lg font-semibold mb-4">Crear Producto</h2>
          
          <label className="block mb-2">Nombre del Producto</label>
          <input
            type="text"
            placeholder="Ejemplo: Camiseta"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 mb-4 w-full"
          />
          
          <label className="block mb-2">Cantidad</label>
          <input
            type="number"
            placeholder="Ejemplo: 50"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="border p-2 mb-4 w-full"
          />

          <label className="block mb-2">Descripción</label>
          <textarea
            placeholder="Ejemplo: Camiseta de algodón, talla M"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 mb-4 w-full"
          />

          <label className="block mb-2">Precio</label>
          <input
            type="number"
            placeholder="Ejemplo: 99.999"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border p-2 mb-4 w-full"
          />

          <label className="block mb-2">Imagen</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border p-2 mb-4 w-full"
          />

          <div className="flex justify-end">
            <button onClick={handleCreate} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
              Crear
            </button>
            <button onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded">
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

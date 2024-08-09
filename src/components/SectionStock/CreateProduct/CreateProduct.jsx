import React, { useState } from 'react';
import Modal from 'react-modal';

const CreateProductCard = ({ onCreate }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleCreate = () => {
    if (name && quantity && description && image) {
      const newProduct = { 
        name, 
        quantity: parseInt(quantity), 
        description, 
        image 
      };
      onCreate(newProduct);
      setName('');
      setQuantity('');
      setDescription('');
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
        <div className="w-12 h-12 flex justify-center items-center bg-gray-400 rounded-full place-content-center ">
          <span className="text-white text-2xl ">+</span>
        </div>
      </button>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Crear Producto"
        className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50"
        overlayClassName=""
      >
        <div className="bg-white p-6 rounded-lg w-full max-w-md">
          <h2 className="text-lg font-semibold mb-2">Crear Producto</h2>
          <input
            type="text"
            placeholder="Nombre del Producto"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="number"
            placeholder="Cantidad"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="border p-2 mb-2 w-full"
          />
          <textarea
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border p-2 mb-2 w-full"
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

export default CreateProductCard;

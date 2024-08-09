import React, { useState } from 'react';
import ProductDetailModal from '../ProductModal/ProductModal';

const ProductCard = ({ product, onDelete, onUpdate }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <div
        onClick={openModal}
        className="bg-[#EEEEEE] p-4 rounded shadow-md text-center cursor-pointer"
      >
        <p className="text-lg font-semibold">{product.name}</p>
        <p>{product.quantity}</p>
      </div>

      <ProductDetailModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        product={product}
        onDelete={onDelete}
        onUpdate={onUpdate} // Pasamos la función de actualización al modal
      />
    </div>
  );
};

export default ProductCard;

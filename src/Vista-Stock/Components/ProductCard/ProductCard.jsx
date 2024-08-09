import React, { useState } from 'react';
import ProductDetailModal from '../ProductModal/ProductModal';

const ProductCard = ({ product, onDelete, onEdit }) => {
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
        onEdit={onEdit}
      />
    </div>
  );
};

export default ProductCard;

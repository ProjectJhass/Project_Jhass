import React, { useState } from 'react';
import ProductDetailModal from '../ProductModal/ProductModal';
import { GETEndpoint } from '../../ServicesFectch/ServicesFetch';

const ProductCard = ({ product, onDelete, onUpdate }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [CardsProduct, setCardsProduct] = useState([]);

  // Fetch cards on mount
  const fetchCards = async () => {
    try {
      const responseUsuarios = await GETEndpoint({ URL: "api/v1/product" });
      console.log(responseUsuarios);
      
      // setCards(profiles);
      setCardsProduct(responseUsuarios); // Almacena también los perfiles filtrados
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };
  

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <div
        onClick={openModal}
        className="flex flex-col md:flex-row justify-evenly items-center md:items-center gap-4 p-4 rounded-lg cursor-pointer"
      >
         {CardsProduct.length > 0 ? (
          CardsProduct.map((card) => (
            
        <div className="w-full flex mx-auto p-4 place-content-center">
          <div className="flex place-content-center w-full items-center justify-evenly">
            <dl className="mx-[20px]">
              <dt className="text-sm font-medium text-gray-600">Producto</dt>
              <dd className="text-lg font-semibold text-gray-900 truncate">{card.name_product}</dd>
            </dl>
            <dl className="mx-[20px]">
              <dt className="text-sm font-medium text-gray-600">Cantidad</dt>
              <dd className="text-lg font-semibold text-gray-900 truncate">{card.stock}</dd>
            </dl>
            <dl className="mx-[20px]">
              <dt className="text-sm font-medium text-gray-600">Precio</dt>
              <dd className="text-lg font-semibold text-gray-900 truncate">${card.price}</dd>
            </dl>
          </div>
        </div>
          )
            )) : (
              <p>No hay tarjetas para mostrar</p>
            )}
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

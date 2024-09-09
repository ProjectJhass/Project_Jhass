import React, { useContext, useState, useEffect,  } from 'react';
import { AppContext } from '../../Context/Context';

export const CardNew = ({ descriptionN, DateN, _id }) => {
  const { cards, setCards } = useContext(AppContext);

  // Estado para manejar si la tarjeta es activa o no
  const [stateRol, setStateRol] = useState(() => {
    const selectedCard = cards.find(card => card._id === _id);
    return selectedCard ? selectedCard.isActive : false;
  });

  // Estado para manejar la visibilidad del botón de eliminar para cada tarjeta
  const [visibleDeleteButtonId, setVisibleDeleteButtonId] = useState(null);

  useEffect(() => {
    // Guarda el estado actualizado de las tarjetas en localStorage
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  const handleRolClick = () => {
    const updatedCards = cards.map(card =>
      card._id === _id ? { ...card, isActive: !stateRol } : card
    );
    setCards(updatedCards);
    setStateRol(!stateRol);

    // Si el botón de eliminar ya está visible, lo oculta; si no, lo muestra para la tarjeta actual
    setVisibleDeleteButtonId(visibleDeleteButtonId === _id ? null : _id);
  };

  const handleDeleteClick = () => {
    const updatedCards = cards.filter(card => card._id !== _id);
    setCards(updatedCards);
  };

  return (
    <div className="w-full mx-auto p-6 shadow-md bg-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <dl>
              <dt className="text-sm font-medium text-gray-600">Descripción</dt>
              <dd className="text-lg font-semibold text-gray-900 truncate">{descriptionN}</dd>
            </dl>
            <dl>
              <dt className="text-sm font-medium text-gray-600">Fecha</dt>
              <dd className="text-lg font-semibold text-gray-900 truncate">{DateN}</dd>
            </dl>
            <dl>
              <dt className="text-sm font-medium text-gray-600">Estado</dt>
              <dd className={`text-lg font-semibold ${stateRol ? 'text-[#f1ba2e]' : 'text-gray-500'}`}>
                {stateRol ? 'Pendiente' : 'En Proceso'}
              </dd>
            </dl>
          </div>
        </div>

        <div className="w-full flex justify-center lg:w-auto gap-4 mt-4">
          <button
            className={`text-white text-[16px] sm:text-[18px] rounded-full w-[2.3rem] h-[2.3rem] flex items-center justify-center hover:rounded-lg hover:w-[8rem] hover:h-[2.3rem] transition-all duration-300 font-Open-Sans overflow-hidden ${stateRol ? 'bg-[#f1ba2e] hover:bg-[#ffc73a]' : 'bg-gray-500 hover:bg-gray-600'}`}
            onClick={handleRolClick}
          >
            <span className="opacity-0 hover:opacity-100 text-white transition-opacity duration-300 py-[10px] px-[30px]">
              {stateRol ? 'Pendiente' : 'Proceso'}
            </span>
          </button>

          {visibleDeleteButtonId === _id && (
            <button
              className='text-white text-[16px] sm:text-[18px] rounded-full w-[2.3rem] h-[2.3rem] flex items-center justify-center hover:rounded-lg hover:w-[8rem] hover:h-[2.3rem] transition-all duration-300 font-Open-Sans overflow-hidden bg-red-500 hover:bg-red-600'
              onClick={handleDeleteClick}
            >
              <span className="opacity-0 hover:opacity-100 transition-opacity duration-300 py-[10px] px-[30px]">
                Eliminar
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

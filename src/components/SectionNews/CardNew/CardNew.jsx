import React, { useContext, useState } from 'react';
import { AppContext } from '../../Context/Context';

export const CardNew = ({ fecha, descripcion,  _id  }) => {
  const {  cards, setCards,   } = useContext(AppContext);

  const [stateRol, setStateRol] = useState(() => {
    const selectedCard = cards.find(card => card._id === _id);
    return selectedCard ? selectedCard.isActive : false;
});



const handleRolClick = () => {
    const updatedCards = cards.map(card =>
        card._id === _id ? { ...card, isActive: !stateRol } : card
    );
    setCards(updatedCards);
    localStorage.setItem('cards', JSON.stringify(updatedCards));
    setStateRol(!stateRol);
};


  return (
    <div className="w-full mx-auto p-6 bg-white shadow-md ">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <dl>
              <dt className="text-sm font-medium text-gray-600">Descripcion</dt>
              <dd className="text-lg font-semibold text-gray-900 truncate">{descripcion}</dd>
            </dl>
            <dl>
              <dt className="text-sm font-medium text-gray-600">Fecha</dt>
              <dd className="text-lg font-semibold text-gray-900 truncate">{fecha}</dd>
            </dl>
            <dl>
              <dt className="text-sm font-medium text-gray-600">Estado</dt>
              <dd className={`text-lg font-semibold ${stateRol ? 'text-green-700' : 'text-gray-500'}`}>
                {stateRol ? 'Activado' : 'Desactivado'}
              </dd>
            </dl>
          </div>
        </div>

        <div className="w-full flex justify-center lg:w-auto gap-4 mt-4">
         
          <button 
            className={`text-white text-[16px] sm:text-[18px] rounded-full w-[2.3rem] h-[2.3rem] flex items-center justify-center hover:rounded-lg hover:w-[8rem] hover:h-[2.3rem] transition-all duration-300 font-Open-Sans overflow-hidden ${stateRol ? 'bg-gray-500 hover:bg-gray-600' : 'bg-green-500 hover:bg-green-600'}`} 
            onClick={handleRolClick}
          >
            <span className="opacity-0 hover:opacity-100 transition-opacity duration-300 py-[10px] px-[30px]">
              {stateRol ? 'Desactivar' : 'Activar'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

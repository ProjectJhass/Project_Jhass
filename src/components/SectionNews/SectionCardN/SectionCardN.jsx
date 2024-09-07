import React, { useContext } from 'react';
import { AppContext } from '../../Context/Context';
import { CardNew } from '../CardNew/CardNew';
import { ModalNew } from "../ModalNew/ModalNew";
import { ModalConfirmNew } from '../ModalConfirmNew/ModalConfirmNew';


export const SectionCardN = () => {
  const { cards, SModalNew, setSModalNew, setSelectedCardId, ConfirmNew, setConfirmNew } = useContext(AppContext);

  const handleCreateAnomalyClick = () => {
    setSelectedCardId(null); 
    setSModalNew(true);
  };

  return (
    <section className='w-full h-full p-[30px]'>
      <div className='w-full h-full'>
        <button 
          className="bg-blue-500 text-white p-2 rounded mb-4"
          onClick={handleCreateAnomalyClick}
        >
          Crear Anomalía
        </button>
      </div>

      <div className='w-full h-full'>
        {cards.map((card) => (
          <CardNew
            key={card._id}
            _id={card._id}
            descriptionN={card.descripcion}
            DateN={card.fecha}
          />
        ))}
        {SModalNew && <ModalNew />}
        {ConfirmNew && <ModalConfirmNew/>}
        
      </div>
    </section>
  );
};

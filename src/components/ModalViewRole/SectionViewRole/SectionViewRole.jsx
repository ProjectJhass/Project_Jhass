import React, { useState, useContext } from 'react';
import { ModalViewRole } from '../ModalViewRole';
import { AppContext } from '../../Context/Context';

import Modal from '../../SectionEmployees/Modal/Modal';

export const SectionViewRole = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);
  const NewContext = useContext(AppContext);

  const handleSave = (updatedCard) => {
    const updatedCards = NewContext.cards.map((card) =>
      card._id === updatedCard._id ? updatedCard : card
    );
    NewContext.setCards(updatedCards);

    localStorage.setItem('cards', JSON.stringify(updatedCards));
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setCurrentCard(null);
  };

  const handleEdit = (card) => {
    setCurrentCard(card);
    setIsModalOpen(true);
  };

  return (
    <>
      {NewContext.estadoModal1 && (
        <section className="w-full h-auto">
          {NewContext.cards.map((card, index) => (
            <ModalViewRole
              key={index}
              img={card.img}
              nombreCompleto={card.nombreCompleto}
              correo={card.correo}
              rol={card.rol}
              onEdit={() => handleEdit(card)}
            />
          ))}
          <Modal
            isOpen={isModalOpen}
            card={currentCard}
            onSave={handleSave}
            onClose={handleClose}
          />
        </section>
      )}
    </>
  );
};

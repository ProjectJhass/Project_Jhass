import React, { useContext, useState } from 'react'
import { SectionProfile } from '../../SectionProfile/SectionProfile'
import { CardProfile } from '../../SectionProfile/CardProfile/CardProfile'
import { InfoProfile } from '../../SectionProfile/InfoProfile/InfoProfile'
import { AppContext } from '../../Context/Context'
import Modal from '../../SectionProfile/Modal/Modal'
import HeaderUser from '../../Layouts/HeaderUser/HeaderUser'


export const Profile = () => {

  const NewContext = useContext(AppContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);

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
<HeaderUser/>
    <SectionProfile>

    <section className='w-[50%] flex items-center place-content-center' >

    
    {NewContext.cards.map((card, index) => (
      
      <CardProfile

      key={index}
      // img={card.img}
      nombreCompleto={card.nombreCompleto}
      rol={card.rol}
      onEdit={() => handleEdit(card)}
      />
    ) )}

      <Modal
            isOpen={isModalOpen}
            card={currentCard}
            onSave={handleSave}
            onClose={handleClose}
          />

    </section>

    <section className='w-[50%] flex items-center place-content-center'>
    {NewContext.cards.map((card, index) => (
      
      <InfoProfile
      
      key={index}
      nombre={card.nombre}
      correo={card.correo}
      telefono={card.telefono}
      rol={card.rol}

      />

    )) }

    
    </section>
    </SectionProfile>

    </>
  )
}

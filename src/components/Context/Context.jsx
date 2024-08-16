import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import { CardsEmployees } from '../SectionEmployees/CardsEmployees/CardsEmployees'


export const AppContext =  createContext()

export const AppProvider = ({children}) => {

  const [currentCard2, setCurrentCard2] = useState(null);
  const [filter, setFilter] = useState('');

  // localStorage.clear();

const [currentCard, setCurrentCard] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);

const [selectedCardId, setSelectedCardId] = useState(null);

    const [estadoModal1, setestadoModal1] = useState(false)
    const [cards, setCards] = useState(() => {
      const savedCards = localStorage.getItem('cards');
      return savedCards ? JSON.parse(savedCards) : CardsEmployees.map(card => ({ ...card, isActive: true }));
  });
    
    // Asegurarte de que cards sea siempre un array:
    if (!Array.isArray(cards)) {
      setCards(CardsEmployees); 
    }
    

    const [isOpaque, setisOpaque] = useState(() => {

      const SavedIsMenuOpen = localStorage.getItem('isOpaque');
        return SavedIsMenuOpen ? (SavedIsMenuOpen) : true;
      

    });
    
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [ModalTrackingIsOpen, setModalTrackingIsOpen] = useState(false);

  return (
    <AppContext.Provider value={{isOpaque, setisOpaque, estadoModal1, setestadoModal1, cards, setCards, modalIsOpen, setModalIsOpen, ModalTrackingIsOpen, setModalTrackingIsOpen, selectedCardId, setSelectedCardId, currentCard, setCurrentCard, isModalOpen, setIsModalOpen, currentCard2, setCurrentCard2, filter, setFilter }} >
    {children}
    </AppContext.Provider>
  )
}

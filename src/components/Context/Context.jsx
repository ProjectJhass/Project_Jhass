import React, { useEffect, useState, createContext, useContext } from 'react';
import { CardsEmployees } from '../SectionEmployees/CardsEmployees/CardsEmployees';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentCard2, setCurrentCard2] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [token, setToken] = useState(() => localStorage.getItem('TokenUser'));
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [estadoModal1, setestadoModal1] = useState(false);
  const [cards, setCards] = useState(() => {
    const savedCards = localStorage.getItem('cards');
    return savedCards ? JSON.parse(savedCards) : CardsEmployees.map(card => ({ ...card, isActive: true }));
  });
  const [isOpaque, setIsOpaque] = useState(() => {
    const savedIsOpaque = localStorage.getItem('isOpaque');
    return savedIsOpaque ? JSON.parse(savedIsOpaque) : true;
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [ModalTrackingIsOpen, setModalTrackingIsOpen] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false); // Nuevo estado para saber si el usuario es nuevo

  useEffect(() => {
    if (token) {
      localStorage.setItem('TokenUser', token);
    } else {
      localStorage.removeItem('TokenUser');
    }
  }, [token]);

  useEffect(() => {
    if (user !== null) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  useEffect(() => {
    // Lógica para determinar si el usuario es nuevo
    const checkIfNewUser = () => {
      if (user && user.isNewUser !== undefined) {
        setIsNewUser(user.isNewUser);
      } else {
        setIsNewUser(true); // Asumimos que el usuario es nuevo si no hay información
      }
    };

    checkIfNewUser();
  }, [user]);

  return (
    <AppContext.Provider value={{
      user, setUser,
      isOpaque, setIsOpaque,
      estadoModal1, setestadoModal1,
      cards, setCards,
      modalIsOpen, setModalIsOpen,
      ModalTrackingIsOpen, setModalTrackingIsOpen,
      selectedCardId, setSelectedCardId,
      currentCard, setCurrentCard,
      isModalOpen, setIsModalOpen,
      currentCard2, setCurrentCard2,
      token, setToken,
      isNewUser, setIsNewUser // Agregar el nuevo estado aquí
    }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useAppContext = () => useContext(AppContext);

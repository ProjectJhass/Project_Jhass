import React, { useEffect, useState, createContext, useContext } from 'react';
import { CardsEmployees } from '../SectionEmployees/CardsEmployees/CardsEmployees';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Estados del primer contexto
  const [currentCard2, setCurrentCard2] = useState(null);
  const [filter, setFilter] = useState('');
  const [isModalOpenCale, setIsModalOpenCale] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '', assignedTo: '' });

  // Estados del segundo contexto
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
  const [isOpaque, setisOpaque] = useState(() => {
    const savedIsOpaque = localStorage.getItem('isOpaque');
    return savedIsOpaque ? JSON.parse(savedIsOpaque) : true;
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [ModalTrackingIsOpen, setModalTrackingIsOpen] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false); // Estado para saber si el usuario es nuevo
  const [events, setEvents] = useState([
    {
      title: 'Reunión',
      start: new Date(2023, 7, 7, 10, 0),
      end: new Date(2023, 7, 7, 12, 0),
    },
  ]);
  const [deleteEventModal, setDeleteEventModal] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);

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
      isOpaque, setisOpaque,
      estadoModal1, setestadoModal1,
      cards, setCards,
      modalIsOpen, setModalIsOpen,
      ModalTrackingIsOpen, setModalTrackingIsOpen,
      selectedCardId, setSelectedCardId,
      currentCard, setCurrentCard,
      isModalOpen, setIsModalOpen,
      currentCard2, setCurrentCard2,
      token, setToken,
      isNewUser, setIsNewUser,
      filter, setFilter,
      isModalOpenCale, setIsModalOpenCale,
      newEvent, setNewEvent,
      events, setEvents,
      deleteEventModal, setDeleteEventModal,
      eventToDelete, setEventToDelete
    }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useAppContext = () => useContext(AppContext);

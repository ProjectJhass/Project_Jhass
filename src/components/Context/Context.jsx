import React, { createContext, useState, useEffect, useContext } from 'react';
import { CardsEmployees } from '../SectionEmployees/CardsEmployees/CardsEmployees';
import { CardsNews } from '../SectionNews/CardsNews/CardsNews';

// Creación del contexto
export const AppContext = createContext();

// Proveedor del contexto
export const AppProvider = ({ children }) => {
  // Estados relacionados con el usuario
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    try {
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (e) {
      console.error('Error parsing user from localStorage:', e);
      return null;
    }
  });
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [token, setToken] = useState(() => {
    const savedToken = localStorage.getItem('TokenUser');
    return savedToken ? savedToken : null;
  });
  

  // Estados relacionados con la interfaz y el estado global
  const [currentCard, setCurrentCard] = useState(null);
  const [currentCard2, setCurrentCard2] = useState(null);
  const [filter, setFilter] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '', assignedTo: '' });
  const [newEvent2, setNewEvent2] = useState({ title: '', start: '', end: '', assignedTo: '' });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [ModalTrackingIsOpen, setModalTrackingIsOpen] = useState(false);
  const [estadoModal1, setestadoModal1] = useState(false);
  const [isOpaque, setisOpaque] = useState(() => {
    const savedIsOpaque = localStorage.getItem('isOpaque');
    try {
      return savedIsOpaque ? JSON.parse(savedIsOpaque) : true;
    } catch (e) {
      console.error('Error parsing isOpaque from localStorage:', e);
      return true;
    }
  });
  // const [cards, setCards] = useState([])
  // const [cards, setCards] = useState(() => {
  //   const savedCards = localStorage.getItem('cards');
  //   try {
  //     return savedCards ? JSON.parse(savedCards) : CardsEmployees.map(card => ({ ...card, isActive: true }));
  //   } catch (e) {
  //     console.error('Error parsing cards from localStorage:', e);
  //     return CardsEmployees.map(card => ({ ...card, isActive: true }));
  //   }
  // });
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [events, setEvents] = useState([
    {
      title: 'Reunión',
      start: new Date(2023, 7, 7, 10, 0),
      end: new Date(2023, 7, 7, 12, 0),
    },
    
  ]);
  const [events2, setEvents2] = useState([
    {
      title: 'Reunión',
      start: new Date(2023, 7, 7, 10, 0),
      end: new Date(2023, 7, 7, 12, 0),
    },
    
  ]);
  const [deleteEventModal, setDeleteEventModal] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);
  const [isNewUser, setIsNewUser] = useState(false);

  // Efectos secundarios para manejar el almacenamiento en local
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
    const checkIfNewUser = () => {
      if (user && user.isNewUser !== undefined) {
        setIsNewUser(user.isNewUser);
      } else {
        setIsNewUser(true);
      }
    };

    checkIfNewUser();
  }, [user]);

  // Funciones para manejar el estado del modal de éxito
  const openSuccessModal = () => setIsSuccessModalOpen(true);
  const closeSuccessModal = () => setIsSuccessModalOpen(false);

  // Función para actualizar los datos del usuario
  const updateUserr = (newUserData) => {
    setUser(prevUser => ({
      ...prevUser,
      ...newUserData,
    }));
  };
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState('month'); // Estado para la vista del calendario
  const [selectedDate, setSelectedDate] = useState(null); // Estado para el día seleccionado en el mini calendario
  const [isModalOpenCale, setIsModalOpenCale] = useState(false);

  return (
    <AppContext.Provider value={{
      user, setUser, updateUserr,
      isSuccessModalOpen, openSuccessModal, closeSuccessModal,
      token, setToken,
      isOpaque, setisOpaque,
      estadoModal1, setestadoModal1,
      // cards, setCards,
      modalIsOpen, setModalIsOpen,
      ModalTrackingIsOpen, setModalTrackingIsOpen,
      selectedCardId, setSelectedCardId,
      currentCard, setCurrentCard,
      currentCard2, setCurrentCard2,
      isModalOpen, setIsModalOpen,
      filter, setFilter,
      isModalOpenCale, setIsModalOpenCale,
      newEvent, setNewEvent,
      events, setEvents,
      deleteEventModal, setDeleteEventModal,
      eventToDelete, setEventToDelete,
      isNewUser, setIsNewUser,
      date, setDate, view, setView,
      selectedDate, setSelectedDate,
      events2, setEvents2,
      newEvent2, setNewEvent2
    }}>
      {children}
    </AppContext.Provider>
  );
};

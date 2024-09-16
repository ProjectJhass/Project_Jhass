import React, { createContext, useState, useEffect } from 'react';
import { CardsEmployees } from '../SectionEmployees/CardsEmployees/CardsEmployees';
import { CardsNews } from '../SectionNews/CardsNews/CardsNews';

// Definir los rangos de permisos
export const Rank = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
};

// Crear el contexto
export const AppContext = createContext();

// Proveedor del contexto
export const AppProvider = ({ children }) => {
  // Estados relacionados con el usuario y los tokens
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    try {
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (e) {
      console.error('Error parsing user from localStorage:', e);
      return null;
    }
  });

  const [token, setToken] = useState(() => {
    const savedToken = localStorage.getItem('TokenUser');
    return savedToken ? savedToken : null;
  });

  const [refreshToken, setRefreshToken] = useState(() => {
    const savedRefreshToken = localStorage.getItem('RefreshTokenUser');
    return savedRefreshToken ? savedRefreshToken : null;
  });

  const [isOpaque, setisOpaque] = useState(() => {
    const savedIsOpaque = localStorage.getItem('isOpaque');
    try {
      return savedIsOpaque ? JSON.parse(savedIsOpaque) : true;
    } catch (e) {
      console.error('Error parsing isOpaque from localStorage:', e);
      return true;
    }
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
  const [Verification, setVerification] = useState(null);

  const [date, setDate] = useState(new Date());
  const [view, setView] = useState('month'); // Estado para la vista del calendario
  const [selectedDate, setSelectedDate] = useState(null); // Estado para el día seleccionado en el mini calendario
  const [isModalOpenCale, setIsModalOpenCale] = useState(false);

  // Manejo de tokens y refresco de tokens
  useEffect(() => {
    const refreshTokens = async () => {
      if (!refreshToken) return;

      try {
        const response = await fetch('http://localhost:3000/api/v1/auth/refresh', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ refreshToken }),
        });

        const data = await response.json();

        if (response.ok && data.token) {
          setToken(data.token);
          setRefreshToken(data.refreshToken);
          localStorage.setItem('TokenUser', data.token);
        } else {
          console.error('No se pudo actualizar el token.', data);
        }
      } catch (error) {
        console.error('Error al refrescar el token:', error);
        // Opcional: Manejar error, redirigir al login, etc.
      }
    };

    // Refrescar el token cada 59 segundos (59000 ms)
    const refreshInterval = setInterval(refreshTokens, 59000);

    return () => clearInterval(refreshInterval);
  }, [refreshToken]);

  // Guardar estados en localStorage
  useEffect(() => {
    if (token) {
      localStorage.setItem('TokenUser', token);
    } else {
      localStorage.removeItem('TokenUser');
    }
  }, [token]);

  useEffect(() => {
    if (refreshToken) {
      localStorage.setItem('RefreshTokenUser', refreshToken);
    } else {
      localStorage.removeItem('RefreshTokenUser');
    }
  }, [refreshToken]);

  useEffect(() => {
    if (user !== null) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  // Verificar si el usuario es nuevo
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

  // Funciones para manejar el estado
  const updateUserr = (newUserData) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...newUserData,
    }));
  };

  const removeUser = () => {
    setUser(null);
    setToken(null);
    setRefreshToken(null);
    localStorage.removeItem('TokenUser');
    localStorage.removeItem('RefreshTokenUser');
  };
  const [cards, setCards] = useState(() => {
    const savedCards = localStorage.getItem('cards');
    return savedCards ? JSON.parse(savedCards) : CardsEmployees.map(card => ({ ...card, isActive: true }));
});

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        updateUserr,
        removeUser,
        token,
        setToken,
        refreshToken,
        setRefreshToken,
        isOpaque,
        setisOpaque,
        Verification,
        setVerification,
        Rank,
        // Estados de la interfaz
        modalIsOpen,
        setModalIsOpen,
        ModalTrackingIsOpen,
        setModalTrackingIsOpen,
        selectedCardId,
        setSelectedCardId,
        currentCard,
        setCurrentCard,
        currentCard2,
        setCurrentCard2,
        isModalOpen,
        setIsModalOpen,
        filter,
        setFilter,
        isModalOpenCale,
        setIsModalOpenCale,
        newEvent,
        setNewEvent,
        events,
        setEvents,
        deleteEventModal,
        setDeleteEventModal,
        eventToDelete,
        setEventToDelete,
        isNewUser,
        setIsNewUser,
        date,
        setDate,
        view,
        setView,
        selectedDate,
        setSelectedDate,
        events2,
        setEvents2,
        newEvent2,
        setNewEvent2,
        cards, setCards
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

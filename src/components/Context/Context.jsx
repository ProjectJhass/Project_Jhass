import React, { createContext, useState, useEffect, useContext } from 'react';

// Creación del contexto
export const AppContext = createContext();

// Proveedor del contexto
export const AppProvider = ({ children }) => {
  // Estado relacionado con el usuario
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    try {
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (e) {
      console.error('Error parsing user from localStorage:', e);
      return null;
    }
  });

  // Estado relacionado con el token
  const [token, setToken] = useState(() => {
    const savedToken = localStorage.getItem('TokenUser');
    return savedToken ? savedToken : null;
  });

  // Estado relacionado con la opacidad de la interfaz
  const [isOpaque, setisOpaque] = useState(() => {
    const savedIsOpaque = localStorage.getItem('isOpaque');
    try {
      return savedIsOpaque ? JSON.parse(savedIsOpaque) : true;
    } catch (e) {
      console.error('Error parsing isOpaque from localStorage:', e);
      return true;
    }
  });

  // Efecto para manejar el almacenamiento del token en localStorage
  useEffect(() => {
    if (token) {
      localStorage.setItem('TokenUser', token);
    } else {
      localStorage.removeItem('TokenUser');
    }
  }, [token]);

  // Efecto para manejar el almacenamiento del usuario en localStorage
  useEffect(() => {
    if (user !== null) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  // Función para actualizar los datos del usuario
  const updateUser = (newUserData) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...newUserData,
    }));
  };

  // Función para eliminar el usuario
  const removeUser = () => {
    setUser(null);
  };

  const [Verification, setVerification] = useState(null)

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        updateUser,
        removeUser,
        token,
        setToken,
        isOpaque,
        setisOpaque,
        Verification,
        setVerification
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useAppContext = () => useContext(AppContext);

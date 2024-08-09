import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppContext } from '../Context/Context';

const PrivateRoutes = () => {
  const { token } = useAppContext();

  if (!token) {
    return <Navigate to="/IniciarSesion" />;
  }

  return <Outlet />;
};

export default PrivateRoutes;

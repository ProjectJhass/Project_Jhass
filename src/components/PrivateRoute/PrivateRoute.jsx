// src/components/PrivateRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../Context/Context';

const PrivateRoute = ({ element: Element, requiredRoles = [], ...rest }) => {
  const { token, user } = useContext(AppContext);

  if (!token) {
    return <Navigate to="/IniciarSesion" />;
  }

//   if (requiredRoles.length > 0 && !requiredRoles.includes(user?.role)) {
//     return <Navigate to="/Unauthorized" />;
//   }

  return <Element {...rest} />;
};

export default PrivateRoute;

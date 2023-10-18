import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import authService from '../services/authService';

interface PrivateRouteProps {
  path: string;
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ path, element: Element, ...rest }) => {
  const navigate = useNavigate();

  if (!authService.isAuthenticated) {
    navigate('/login');
    return null;
  }

  return <Route path={path} element={Element} {...rest} />;
};

export default PrivateRoute;

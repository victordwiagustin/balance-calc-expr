import React from 'react';
import authService from '../services/authService';

const Login: React.FC = () => {
  const handleLogin = () => {
    authService.login();
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

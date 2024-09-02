import React from 'react';
import Login from '../components/Auth/Login';

function LoginPage({ setToken }) {
  return (
    <div>
      <Login setToken={setToken} />
    </div>
  );
}

export default LoginPage;
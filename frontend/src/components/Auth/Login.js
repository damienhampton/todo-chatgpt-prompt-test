import React, { useState } from 'react';
import { login } from '../../api';
import { useNavigate } from 'react-router-dom';


function Login({ setToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await login({ email, password });
            localStorage.setItem('token', response.data.token);
            setToken(response.data.token);
            navigate('/tasks');  // Redirect to tasks page
        } catch (error) {
            console.error("Login failed", error);
        }
    };


  return (
      <form onSubmit={
        handleLogin
      }>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
  );
}


export default Login;

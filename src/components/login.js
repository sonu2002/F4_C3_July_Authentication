import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLoginClick = async () => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.id);
        navigate('/profiles');
        handleLogin();
      } else {
       alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.log('An error occurred during login:', error);
    }
  };

  return (
    <div className='logindiv'>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLoginClick} id='login-button'>Login</button>
    </div>
  );
};

export default Login;
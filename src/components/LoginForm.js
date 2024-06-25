
import React, { useState, useEffect } from 'react';
import './LoginForm.css';

function LoginForm({ setUsername }) {
  const [username, setUsernameState] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [registeredUsername, setRegisteredUsername] = useState('');
  const [registeredPassword, setRegisteredPassword] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('registeredUsername');
    const storedPassword = localStorage.getItem('registeredPassword');
    if (storedUsername && storedPassword) {
      setRegisteredUsername(storedUsername);
      setRegisteredPassword(storedPassword);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!username) {
      errors.username = 'Username is required';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      if (username === registeredUsername && password === registeredPassword) {
        setLoginStatus('success');
        if (typeof setUsername === 'function') {
          setUsername(username);
        } else {
          console.error('setUsername is not a function:', setUsername);
        }
      } else {
        setLoginStatus('failed');
      }
    }
  };

  return (
    <div className="login-form">
      <h2>Login Form</h2>
      {loginStatus === 'success' && <p>Login successful!</p>}
      {loginStatus === 'failed' && <p>Login failed. Please try again.</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsernameState(e.target.value)}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LogOut.css';

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the user's session information (e.g., token) from localStorage
    localStorage.removeItem('token');

    // Redirect the user to the login or another relevant page
    navigate('/signin'); // You can change the route as needed
  };

  return (
    <div className="logout-overlay">
      <div className="logout-container">
        <h1>Logout</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default LogOut;

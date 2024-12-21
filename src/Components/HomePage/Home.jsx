import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Make sure this path is correct

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/login'); // Adjust the path to the route you want to navigate to
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={handleLogoClick}></div>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-profile">
        <div className="profile-pic"></div>
        <div className="language">English</div>
      </div>
    </nav>
  );
};

export default Navbar;

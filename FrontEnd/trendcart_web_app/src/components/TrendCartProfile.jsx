import React, { useState, useRef, useEffect } from 'react';
import './ProfileDropdown.css';
import { Link } from 'react-router-dom';


const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // This component assumes there's already a profile icon with an id="profile-icon" in your navbar
  useEffect(() => {
    const profileIcon = document.getElementById('profile-icon');
    
    const handleMouseEnter = () => {
      setIsOpen(true);
    };
    
    const handleMouseLeave = (e) => {
      // Check if the mouse is moving to the dropdown
      const dropdownElement = dropdownRef.current;
      if (dropdownElement && !dropdownElement.contains(e.relatedTarget)) {
        setIsOpen(false);
      }
    };
    
    if (profileIcon) {
      profileIcon.addEventListener('mouseenter', handleMouseEnter);
      profileIcon.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (profileIcon) {
        profileIcon.removeEventListener('mouseenter', handleMouseEnter);
        profileIcon.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);
  
  // Close dropdown when mouse leaves the dropdown itself
  const handleDropdownMouseLeave = () => {
    setIsOpen(false);
  };
  
  return (
    <div 
      ref={dropdownRef}
      className={`profile-dropdown ${isOpen ? 'open' : ''}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={handleDropdownMouseLeave}
    >
      <div className="profile-header">
        <h3 className="welcome-text">Welcome</h3>
        <p className="access-text">To access account and manage orders</p>
        <Link to="/login" ><button className="login-button">LOGIN / SIGNUP</button></Link>
        
      </div>
      
      <ul className="profile-menu">
        <li className="menu-item">Orders</li>
        <li className="menu-item">Wishlist</li>
        <li className="menu-item">Gift Cards</li>
        <li className="menu-item">Contact Us</li>
        <li className="menu-item">
          <span>Myntra Insider</span>
          <span className="new-tag">NEW</span>
        </li>
        <li className="menu-item">Myntra Credit</li>
        <li className="menu-item">Coupons</li>
        <li className="menu-item">Saved Cards</li>
        <li className="menu-item">Saved VPA</li>
        <li className="menu-item">Saved Addresses</li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
import React, { useState } from 'react';
import "../components/Navbar.css"; 
import ProfileDropdown from './TrendCartProfile';

const TrendCartLogo = () => (
  <div className="trendcart-logo">
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 512 166">
      {/* First curved shape */}
      <path d="M176.6 18.8c-31.8.7-74.3 62.8-74.3 147.2 0 1.3 0 2.5.1 3.8 0 0 .9 16.4 4.4 21.8 3.6 5.4 7.7-12.9 13.5-20.5 8.2-10.8 12.7-22.7 19.6-25.3 7-2.6 12.2 19.1 42.6 2.6 30.4-16.5 43.7-129.5-5.9-129.6z" fill="#3498db"/>
      
      {/* Second curved shape */}
      <path d="M182.5 147.8c-30.4 16.5-35.6-5.2-42.6-2.6-6.9 2.6-11.4 14.6-19.6 25.3-5.8 7.6-9.9 25.9-13.5 20.5-3.5-5.4-4.4-21.8-4.4-21.8-5.8 57.1 27.2 76.6 37.6 76.6 44.4 0 101.4-76 101.4-168.7.1 39.4-28.5 54.1-58.9 70.7z" fill="#e74c3c"/>
      
      {/* Text */}
      <g transform="translate(230, 100)">
        <text fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="48" fill="#333">
          <tspan>Trend</tspan><tspan fill="#e74c3c">Cart</tspan>
        </text>
      </g>
      
      {/* Shopping cart icon */}
      <g transform="translate(430, 75) scale(0.06)">
        <path d="M204.8 96.4c-13.2 0-24 10.8-24 24s10.8 24 24 24 24-10.8 24-24-10.8-24-24-24zm-128 0c-13.2 0-24 10.8-24 24s10.8 24 24 24 24-10.8 24-24-10.8-24-24-24zm-40-16h204.8c15.2 0 28 11.2 30.4 26.4l28.8 156.8c1.6 8.8-1.6 17.6-8 23.2-6.4 6.4-15.2 9.6-24 9.6H78.4c-13.6 0-24.8-10.4-25.6-24-.8-13.6 10.4-24.8 24-25.6h152c4 0 7.2-3.2 7.2-7.2s-3.2-7.2-7.2-7.2H78.4c-22.4 0-40.8 16.8-42.4 39.2-1.6 23.2 16 42.4 39.2 44h188.8c15.2 0 29.6-5.6 40.8-16 11.2-10.4 17.6-24.8 16-40L292 106.8C288 84.4 267.2 68.4 244 68.4H36.8c-4 0-7.2 3.2-7.2 7.2s3.2 7.2 7.2 7.2z" fill="#333"/>
      </g>
    </svg>
  </div>
);

// Alternative text-based logo as fallback
const TextLogo = () => (
  <div className="text-logo">
    <span className="trend">Trend</span><span className="cart">Cart</span>
  </div>
);

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  // Remove the logoLoaded state as we'll always show the logo
  
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement your search logic here
    if (window.innerWidth < 768) {
      setSearchOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Close search if menu is opened
    if (!mobileMenuOpen) {
      setSearchOpen(false);
    }
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    // Close menu if search is opened
    if (!searchOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="navbar">
      {/* Desktop logo - visible only on desktop */}
      <div className="desktop-logo">
        <a href="/home">
          <TrendCartLogo />
        </a>
      </div>
      
      <div className="mobile-header">
        <button className="menu-toggle" onClick={toggleMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
        
        <div className="logo">
          <a href="/home">
            <TrendCartLogo />
          </a>
        </div>
        
        <div className="mobile-actions">
          <button className="mobile-search-toggle" onClick={toggleSearch}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          
          <a href="/bag" className="mobile-bag">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </a>
        </div>
      </div>
      
      <div className={`mobile-search ${searchOpen ? 'active' : ''}`}>
        <form onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="Search for products, brands and more"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus={searchOpen}
          />
          <button type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </form>
      </div>
      
      <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <li><a href="/men">MEN</a></li>
        <li><a href="/women">WOMEN</a></li>
        <li><a href="/kids">KIDS</a></li>
        <li><a href="/home">HOME</a></li>
        <li><a href="/beauty">BEAUTY</a></li>
        <li><a href="/genz">GENZ</a></li>
        <li>
          <a href="/studio">STUDIO</a>
          <span className="new-tag">NEW</span>
        </li>
        <li className="mobile-menu-item"><a href="/wishlist">Wishlist</a></li>
        <li className="mobile-menu-item"><a href="/loginpage">Profile</a></li>
      </ul>
      
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <span className="search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
          <input 
            type="text" 
            placeholder="Search for products, brands and more"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>
      
      <div className="user-actions">
        <div className="action-item profile-container">
          <a href="/loginpage" id="profile-icon" className="profile-link">
            <span className="action-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </span>
            <span>Profile</span>
          </a>
          <ProfileDropdown />
        </div>
        
        <a href="/wishlist" className="action-item">
          <span className="action-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </span>
          <span>Wishlist</span>
        </a>
        
        <a href="/bag" className="action-item">
          <span className="action-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </span>
          <span>Bag</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
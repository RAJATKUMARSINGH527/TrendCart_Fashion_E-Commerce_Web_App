import React from 'react';
import './Home.css'; // Import your CSS file for additional styling

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar component would be imported and used above this point */}
      
      {/* Banner section below navbar */}
      <div className="promo-banner">
        <img 
          src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/4/3/d9f167bc-23c2-4181-8a69-ae9ad767d89f1743661080868-Coupon-strip-with-Free-shipping[300-OFF]--1-.jpg" 
          alt="Myntra Fashion Carnival - Flat ₹300 OFF + Free Shipping on all orders" 
          className="banner-image"
        />
      </div>
      
      {/* Fashion Carnival main banner */}
      <div className="fashion-carnival-banner">
        <div className="banner-container">
          <div className="banner-half">
            <img 
              src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/4/2/d80b1b48-f52f-419e-b8d1-cab5e49b197d1743588618108-HP_1.jpg" 
              alt="Men's Fashion" 
              className="half-banner-image"
            />
            <a href="/mens" className="banner-button him-button">HIM</a>
          </div>
          
          <div className="banner-half">
            <img 
              src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/4/2/f23fec59-f9d2-4e81-8d0f-1f7a0d099f7a1743588626711-HP_2.jpg" 
              alt="Women's Fashion" 
              className="half-banner-image"
            />
            <a href="/womens" className="banner-button her-button">HER</a>
          </div>
        </div>
      </div>

      {/* Rest of your homepage content would go here */}
      <div className="home-content">
        <h1>Welcome to Our Store</h1>
        <div className="featured-products">
          {/* Your featured products would go here */}
        </div>
        
        <div className="categories-section">
          {/* Your categories would go here */}
        </div>
        a
        <div className="deals-section">
          {/* Your deals would go here */}
        </div>
      </div>
    </div>
  );
};

export default Home;
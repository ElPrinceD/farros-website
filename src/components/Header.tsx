import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import MobileNavSlider from './MobileNavSlider';

const Header: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { getTotalItems } = useCart();
  const location = useLocation();

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo">
            <img 
              src="https://farros.co.uk/images/logo/farros-restaurant-web-lrg.png" 
              alt="Farros Logo" 
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const nextElement = target.nextElementSibling as HTMLElement;
                if (nextElement) nextElement.style.display = 'flex';
              }}
            />
            <span className="logo-text" style={{ display: 'none' }}>Farros House</span>
          </Link>
          
          <nav className="nav">
            <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
            <Link to="/menu" className={isActive('/menu') ? 'active' : ''}>Menu</Link>
            <Link to="/desserts" className={isActive('/desserts') ? 'active' : ''}>Desserts</Link>
            <Link to="/takeaway" className={isActive('/takeaway') ? 'active' : ''}>Takeaway</Link>
            <Link to="/restaurant" className={isActive('/restaurant') ? 'active' : ''}>Restaurant</Link>
            <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
          </nav>
          
          <button className="cart-icon" onClick={() => document.getElementById('cartDrawer')?.classList.add('open')}>
            🛒
            <span className="cart-badge" id="cartBadge">{getTotalItems()}</span>
          </button>
          
          <button className="mobile-nav-toggle" onClick={toggleMobileNav}>
            ☰
          </button>
        </div>
      </header>
      
      <MobileNavSlider isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />
    </>
  );
};

export default Header;
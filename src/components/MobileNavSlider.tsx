import React from 'react';
import { Link } from 'react-router-dom';

interface MobileNavSliderProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavSlider: React.FC<MobileNavSliderProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`mobile-nav-slider ${isOpen ? 'open' : ''}`} id="mobileNavSlider">
      <div className="mobile-nav-header">
        <h3 className="mobile-nav-title">Menu</h3>
        <button className="mobile-nav-close" onClick={onClose}>×</button>
      </div>
      <div className="mobile-nav-links">
        <Link to="/" className="mobile-nav-link" onClick={onClose}>Home</Link>
        <Link to="/menu" className="mobile-nav-link" onClick={onClose}>Menu</Link>
        <Link to="/desserts" className="mobile-nav-link" onClick={onClose}>Desserts</Link>
        <Link to="/takeaway" className="mobile-nav-link" onClick={onClose}>Takeaway</Link>
        <Link to="/restaurant" className="mobile-nav-link" onClick={onClose}>Restaurant</Link>
        <Link to="/contact" className="mobile-nav-link" onClick={onClose}>Contact Us</Link>
      </div>
    </div>
  );
};

export default MobileNavSlider;

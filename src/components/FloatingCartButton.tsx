import React from 'react';
import { useCart } from '../context/CartContext';

const FloatingCartButton: React.FC = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  const handleClick = () => {
    document.getElementById('cartDrawer')?.classList.add('open');
  };

  // Show floating cart button on all pages when cart has items
  if (totalItems === 0) {
    return null;
  }

  return (
    <button 
      className="floating-cart-btn show" 
      onClick={handleClick}
    >
      <span>🛒</span>
      <span>Cart</span>
      <span className="floating-cart-count">{totalItems}</span>
    </button>
  );
};

export default FloatingCartButton;

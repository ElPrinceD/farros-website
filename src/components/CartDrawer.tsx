import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartDrawer: React.FC = () => {
  const { cart, updateQuantity, getTotalPrice } = useCart();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleCartToggle = () => {
      const cartDrawer = document.getElementById('cartDrawer');
      if (cartDrawer) {
        const isCurrentlyOpen = cartDrawer.classList.contains('open');
        setIsOpen(isCurrentlyOpen);
        
        // Prevent background scrolling when cart is open
        if (isCurrentlyOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
        }
      }
    };

    // Listen for cart open/close events
    const cartDrawer = document.getElementById('cartDrawer');
    if (cartDrawer) {
      const observer = new MutationObserver(handleCartToggle);
      observer.observe(cartDrawer, { attributes: true, attributeFilter: ['class'] });
      
      return () => {
        observer.disconnect();
        document.body.style.overflow = 'unset';
      };
    }
  }, []);

  const handleQuantityChange = (itemId: number, change: number) => {
    updateQuantity(itemId, change);
  };

  const handleClose = () => {
    const cartDrawer = document.getElementById('cartDrawer');
    if (cartDrawer) {
      cartDrawer.classList.remove('open');
      document.body.style.overflow = 'unset';
    }
  };

  const handleOverlayClick = () => {
    handleClose();
  };

  return (
    <>
      {/* Cart Overlay */}
      <div 
        className={`cart-overlay ${isOpen ? 'open' : ''}`}
        onClick={handleOverlayClick}
      />
      
      {/* Cart Drawer */}
      <div className="cart-drawer" id="cartDrawer">
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button className="cart-close" onClick={handleClose}>
            ×
          </button>
        </div>
        <div className="cart-items" id="cartItems">
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#6b7280', padding: '2rem' }}>
              Your cart is empty
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">£{item.price.toFixed(2)}</div>
                  <div className="cart-item-controls">
                    <button 
                      className="quantity-btn" 
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      className="quantity-btn" 
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="cart-footer">
          <div className="cart-total">
            Total: <span id="cartTotal">£{getTotalPrice().toFixed(2)}</span>
          </div>
          <button 
            className="checkout-btn" 
            onClick={() => {
              handleClose();
              navigate('/checkout');
            }}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
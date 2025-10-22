import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const { cart, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [orderType, setOrderType] = useState<'restaurant' | 'delivery'>('restaurant');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postcode: '',
    tableNumber: '',
    paymentMethod: 'card'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process payment here
    console.log('Processing payment...', formData);
    
    // Simulate payment processing
    setTimeout(() => {
      alert('Payment successful! Your order has been placed.');
      clearCart();
      navigate('/');
    }, 2000);
  };

  const renderStep1 = () => (
    <div className="checkout-step">
      <h2>Order Information</h2>
      
      {/* Order Type Selection */}
      <div className="order-type-selection">
        <h3>How would you like to receive your order?</h3>
        <div className="order-type-options">
          <div 
            className={`order-type-option ${orderType === 'restaurant' ? 'selected' : ''}`}
            onClick={() => setOrderType('restaurant')}
          >
            <div className="order-type-icon">🍽️</div>
            <div className="order-type-content">
              <h4>Dine In</h4>
              <p>Enjoy your meal at our restaurant</p>
            </div>
          </div>
          <div 
            className={`order-type-option ${orderType === 'delivery' ? 'selected' : ''}`}
            onClick={() => setOrderType('delivery')}
          >
            <div className="order-type-icon">🚚</div>
            <div className="order-type-content">
              <h4>Delivery</h4>
              <p>Delivered to your address</p>
            </div>
          </div>
        </div>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        
        {orderType === 'restaurant' ? (
          <div className="form-group">
            <label htmlFor="tableNumber">Table Number</label>
            <input
              type="text"
              id="tableNumber"
              name="tableNumber"
              value={formData.tableNumber}
              onChange={handleInputChange}
              placeholder="e.g., Table 5"
              required
            />
          </div>
        ) : (
          <>
            <div className="form-group full-width">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="postcode">Postcode</label>
              <input
                type="text"
                id="postcode"
                name="postcode"
                value={formData.postcode}
                onChange={handleInputChange}
                required
              />
            </div>
          </>
        )}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="checkout-step">
      <h2>Payment Method</h2>
      <div className="payment-methods">
        <div className="payment-option">
          <input
            type="radio"
            id="card"
            name="paymentMethod"
            value="card"
            checked={formData.paymentMethod === 'card'}
            onChange={handleInputChange}
          />
          <label htmlFor="card">
            <span className="payment-icon">💳</span>
            Credit/Debit Card
          </label>
        </div>
        <div className="payment-option">
          <input
            type="radio"
            id="paypal"
            name="paymentMethod"
            value="paypal"
            checked={formData.paymentMethod === 'paypal'}
            onChange={handleInputChange}
          />
          <label htmlFor="paypal">
            <span className="payment-icon">🅿️</span>
            PayPal
          </label>
        </div>
        <div className="payment-option">
          <input
            type="radio"
            id="cash"
            name="paymentMethod"
            value="cash"
            checked={formData.paymentMethod === 'cash'}
            onChange={handleInputChange}
          />
          <label htmlFor="cash">
            <span className="payment-icon">💵</span>
            Cash on Delivery
          </label>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="checkout-step">
      <h2>Order Summary</h2>
      <div className="order-items">
        {cart.map(item => (
          <div key={item.id} className="order-item">
            <img src={item.image} alt={item.name} className="order-item-image" />
            <div className="order-item-details">
              <h4>{item.name}</h4>
              <p>Quantity: {item.quantity}</p>
              <p>Price: £{item.price.toFixed(2)}</p>
            </div>
            <div className="order-item-total">
              £{(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      <div className="order-total">
        <h3>Total: £{getTotalPrice().toFixed(2)}</h3>
      </div>
    </div>
  );

  return (
    <div className="checkout-page">
      <div className="container">
        <div className="checkout-header">
          <h1>Checkout</h1>
          <div className="checkout-progress">
            <div className={`progress-step ${currentStep >= 1 ? 'active' : ''}`}>1</div>
            <div className={`progress-step ${currentStep >= 2 ? 'active' : ''}`}>2</div>
            <div className={`progress-step ${currentStep >= 3 ? 'active' : ''}`}>3</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="checkout-form">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}

          <div className="checkout-actions">
            {currentStep > 1 && (
              <button type="button" onClick={handleBack} className="btn-secondary">
                Back
              </button>
            )}
            {currentStep < 3 ? (
              <button type="button" onClick={handleNext} className="btn-primary">
                Next
              </button>
            ) : (
              <button type="submit" className="btn-primary">
                Complete Order
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
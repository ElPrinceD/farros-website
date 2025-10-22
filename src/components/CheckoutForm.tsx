import React, { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { formatPrice } from '../utils/currency';
import { validateEmail, validatePhone } from '../utils/helpers';
import { CustomerInfo } from '../types';
import PaymentSelector from './PaymentSelector';
import MockPaymentForm from './MockPaymentForm';

interface CheckoutFormProps {
  onOrderComplete: (orderId: string) => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onOrderComplete }) => {
  const { cart, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const [formData, setFormData] = useState({
    customerInfo: {
      name: '',
      email: '',
      phone: '',
      address: {
        street: '',
        city: '',
        postcode: '',
        country: 'United Kingdom'
      }
    },
    orderType: 'delivery' as 'delivery' | 'pickup',
    paymentMethod: 'mock',
    specialInstructions: ''
  });

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Validate customer info
    if (!formData.customerInfo.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.customerInfo.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.customerInfo.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.customerInfo.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.customerInfo.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Validate address for delivery
    if (formData.orderType === 'delivery') {
      if (!formData.customerInfo.address.street.trim()) {
        newErrors.street = 'Street address is required for delivery';
      }
      if (!formData.customerInfo.address.city.trim()) {
        newErrors.city = 'City is required for delivery';
      }
      if (!formData.customerInfo.address.postcode.trim()) {
        newErrors.postcode = 'Postcode is required for delivery';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      customerInfo: {
        ...prev.customerInfo,
        [field]: value
      }
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleAddressChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      customerInfo: {
        ...prev.customerInfo,
        address: {
          ...prev.customerInfo.address,
          [field]: value
        }
      }
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleNext = () => {
    if (validateForm()) {
      setCurrentStep(2);
    }
  };

  const handlePaymentComplete = async (orderId: string) => {
    setIsProcessing(true);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    clearCart();
    setIsProcessing(false);
    onOrderComplete(orderId);
  };

  if (cart.items.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 mb-4">
          <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
        <p className="text-gray-500">Add some items to your cart before checking out.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-center space-x-4">
          <div className={`flex items-center space-x-2 ${currentStep >= 1 ? 'text-fh-red' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              currentStep >= 1 ? 'bg-fh-red text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              1
            </div>
            <span className="text-sm font-medium">Details</span>
          </div>
          <div className={`w-16 h-0.5 ${currentStep >= 2 ? 'bg-fh-red' : 'bg-gray-200'}`}></div>
          <div className={`flex items-center space-x-2 ${currentStep >= 2 ? 'text-fh-red' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              currentStep >= 2 ? 'bg-fh-red text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              2
            </div>
            <span className="text-sm font-medium">Payment</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
            <h3 className="text-lg font-playfair font-semibold text-fh-charcoal mb-4">Order Summary</h3>
            
            {/* Items */}
            <div className="space-y-3 mb-4">
              {cart.items.map((item) => (
                <div key={item.id} className="flex items-center space-x-3">
                  <img
                    src={item.menuItem.image}
                    alt={item.menuItem.name}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-fh-charcoal truncate">
                      {item.menuItem.name}
                    </h4>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <span className="text-sm font-medium">
                    {formatPrice(item.menuItem.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="space-y-2 border-t border-gray-200 pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span>{formatPrice(cart.subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax (10%)</span>
                <span>{formatPrice(cart.tax)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Delivery Fee</span>
                <span>{formatPrice(cart.deliveryFee)}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold border-t border-gray-200 pt-2">
                <span>Total</span>
                <span className="text-fh-red">{formatPrice(cart.total)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2">
          {currentStep === 1 ? (
            <div className="space-y-6">
              <h2 className="text-2xl font-playfair font-bold text-fh-charcoal">Customer Details</h2>
              
              {/* Order Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Order Type</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, orderType: 'delivery' }))}
                    className={`p-4 border-2 rounded-lg text-center transition-colors duration-200 ${
                      formData.orderType === 'delivery'
                        ? 'border-fh-red bg-red-50 text-fh-red'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="font-medium">Delivery</div>
                    <div className="text-sm text-gray-500">+{formatPrice(cart.deliveryFee)}</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, orderType: 'pickup' }))}
                    className={`p-4 border-2 rounded-lg text-center transition-colors duration-200 ${
                      formData.orderType === 'pickup'
                        ? 'border-fh-red bg-red-50 text-fh-red'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="font-medium">Pickup</div>
                    <div className="text-sm text-gray-500">Free</div>
                  </button>
                </div>
              </div>

              {/* Customer Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.customerInfo.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.customerInfo.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="Enter your email"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.customerInfo.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Address (for delivery) */}
              {formData.orderType === 'delivery' && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-fh-charcoal">Delivery Address</h3>
                  <div>
                    <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      id="street"
                      value={formData.customerInfo.address.street}
                      onChange={(e) => handleAddressChange('street', e.target.value)}
                      className={`input-field ${errors.street ? 'border-red-500' : ''}`}
                      placeholder="Enter street address"
                    />
                    {errors.street && <p className="text-red-500 text-sm mt-1">{errors.street}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        value={formData.customerInfo.address.city}
                        onChange={(e) => handleAddressChange('city', e.target.value)}
                        className={`input-field ${errors.city ? 'border-red-500' : ''}`}
                        placeholder="Enter city"
                      />
                      {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                    </div>

                    <div>
                      <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">
                        Postcode *
                      </label>
                      <input
                        type="text"
                        id="postcode"
                        value={formData.customerInfo.address.postcode}
                        onChange={(e) => handleAddressChange('postcode', e.target.value)}
                        className={`input-field ${errors.postcode ? 'border-red-500' : ''}`}
                        placeholder="Enter postcode"
                      />
                      {errors.postcode && <p className="text-red-500 text-sm mt-1">{errors.postcode}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Special Instructions */}
              <div>
                <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-1">
                  Special Instructions
                </label>
                <textarea
                  id="instructions"
                  value={formData.specialInstructions}
                  onChange={(e) => setFormData(prev => ({ ...prev, specialInstructions: e.target.value }))}
                  className="input-field"
                  rows={3}
                  placeholder="Any special requests or delivery instructions?"
                />
              </div>

              <button
                onClick={handleNext}
                className="w-full btn-primary py-3 text-lg"
              >
                Continue to Payment
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <h2 className="text-2xl font-playfair font-bold text-fh-charcoal">Payment</h2>
              
              <PaymentSelector
                selectedMethod={formData.paymentMethod}
                onMethodChange={(method) => setFormData(prev => ({ ...prev, paymentMethod: method }))}
              />

              {formData.paymentMethod === 'mock' ? (
                <MockPaymentForm
                  customerInfo={formData.customerInfo}
                  orderType={formData.orderType}
                  specialInstructions={formData.specialInstructions}
                  onPaymentComplete={handlePaymentComplete}
                  isProcessing={isProcessing}
                />
              ) : (
                <div className="text-center py-8">
                  <div className="spinner mx-auto mb-4"></div>
                  <p className="text-gray-600">Redirecting to secure payment...</p>
                </div>
              )}

              <button
                onClick={() => setCurrentStep(1)}
                className="w-full btn-outline py-3"
              >
                Back to Details
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;




import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCardIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { CustomerInfo } from '../types';
import { formatPrice } from '../utils/currency';
import clsx from 'clsx';

interface MockPaymentFormProps {
  customerInfo: CustomerInfo;
  orderType: 'delivery' | 'pickup';
  specialInstructions: string;
  onPaymentComplete: (orderId: string) => void;
  isProcessing: boolean;
}

const MockPaymentForm: React.FC<MockPaymentFormProps> = ({
  customerInfo,
  orderType,
  specialInstructions,
  onPaymentComplete,
  isProcessing
}) => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    billingAddress: {
      street: '',
      city: '',
      postcode: '',
      country: 'United Kingdom'
    }
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = 'Card number is required';
    } else if (formData.cardNumber.replace(/\s/g, '').length < 16) {
      newErrors.cardNumber = 'Please enter a valid card number';
    }

    if (!formData.expiryDate.trim()) {
      newErrors.expiryDate = 'Expiry date is required';
    } else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = 'Please enter expiry date in MM/YY format';
    }

    if (!formData.cvv.trim()) {
      newErrors.cvv = 'CVV is required';
    } else if (formData.cvv.length < 3) {
      newErrors.cvv = 'Please enter a valid CVV';
    }

    if (!formData.cardholderName.trim()) {
      newErrors.cardholderName = 'Cardholder name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    let formattedValue = value;

    // Format card number with spaces
    if (field === 'cardNumber') {
      formattedValue = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
      if (formattedValue.length > 19) formattedValue = formattedValue.slice(0, 19);
    }

    // Format expiry date
    if (field === 'expiryDate') {
      formattedValue = value.replace(/\D/g, '');
      if (formattedValue.length >= 2) {
        formattedValue = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2, 4);
      }
    }

    // Limit CVV to 4 digits
    if (field === 'cvv') {
      formattedValue = value.replace(/\D/g, '').slice(0, 4);
    }

    setFormData(prev => ({
      ...prev,
      [field]: formattedValue
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
      billingAddress: {
        ...prev.billingAddress,
        [field]: value
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Generate a mock order ID
    const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    
    setIsSubmitting(false);
    onPaymentComplete(orderId);
  };

  if (isSubmitting) {
    return (
      <div className="text-center py-12">
        <div className="spinner mx-auto mb-4"></div>
        <h3 className="text-lg font-medium text-fh-charcoal mb-2">Processing Payment</h3>
        <p className="text-gray-600">Please wait while we process your payment...</p>
      </div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <LockClosedIcon className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-yellow-900 mb-1">Demo Payment Form</h4>
            <p className="text-sm text-yellow-700">
              This is a demonstration form. No real payment will be processed. Use any test information to complete the order.
            </p>
          </div>
        </div>
      </div>

      {/* Card Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-fh-charcoal">Card Information</h3>
        
        <div>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Card Number *
          </label>
          <div className="relative">
            <CreditCardIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              id="cardNumber"
              value={formData.cardNumber}
              onChange={(e) => handleInputChange('cardNumber', e.target.value)}
              className={`input-field pl-10 ${errors.cardNumber ? 'border-red-500' : ''}`}
              placeholder="1234 5678 9012 3456"
              maxLength={19}
            />
          </div>
          {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Date *
            </label>
            <input
              type="text"
              id="expiryDate"
              value={formData.expiryDate}
              onChange={(e) => handleInputChange('expiryDate', e.target.value)}
              className={`input-field ${errors.expiryDate ? 'border-red-500' : ''}`}
              placeholder="MM/YY"
              maxLength={5}
            />
            {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
          </div>

          <div>
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
              CVV *
            </label>
            <input
              type="text"
              id="cvv"
              value={formData.cvv}
              onChange={(e) => handleInputChange('cvv', e.target.value)}
              className={`input-field ${errors.cvv ? 'border-red-500' : ''}`}
              placeholder="123"
              maxLength={4}
            />
            {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="cardholderName" className="block text-sm font-medium text-gray-700 mb-1">
            Cardholder Name *
          </label>
          <input
            type="text"
            id="cardholderName"
            value={formData.cardholderName}
            onChange={(e) => handleInputChange('cardholderName', e.target.value)}
            className={`input-field ${errors.cardholderName ? 'border-red-500' : ''}`}
            placeholder="Enter cardholder name"
          />
          {errors.cardholderName && <p className="text-red-500 text-sm mt-1">{errors.cardholderName}</p>}
        </div>
      </div>

      {/* Billing Address */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-fh-charcoal">Billing Address</h3>
        
        <div>
          <label htmlFor="billingStreet" className="block text-sm font-medium text-gray-700 mb-1">
            Street Address
          </label>
          <input
            type="text"
            id="billingStreet"
            value={formData.billingAddress.street}
            onChange={(e) => handleAddressChange('street', e.target.value)}
            className="input-field"
            placeholder="Enter street address"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="billingCity" className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              id="billingCity"
              value={formData.billingAddress.city}
              onChange={(e) => handleAddressChange('city', e.target.value)}
              className="input-field"
              placeholder="Enter city"
            />
          </div>

          <div>
            <label htmlFor="billingPostcode" className="block text-sm font-medium text-gray-700 mb-1">
              Postcode
            </label>
            <input
              type="text"
              id="billingPostcode"
              value={formData.billingAddress.postcode}
              onChange={(e) => handleAddressChange('postcode', e.target.value)}
              className="input-field"
              placeholder="Enter postcode"
            />
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-fh-charcoal mb-3">Order Summary</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Customer</span>
            <span className="font-medium">{customerInfo.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Order Type</span>
            <span className="font-medium capitalize">{orderType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Email</span>
            <span className="font-medium">{customerInfo.email}</span>
          </div>
          {specialInstructions && (
            <div className="flex justify-between">
              <span className="text-gray-600">Special Instructions</span>
              <span className="font-medium text-right max-w-xs truncate">{specialInstructions}</span>
            </div>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full btn-primary py-4 text-lg flex items-center justify-center space-x-2"
      >
        <LockClosedIcon className="h-5 w-5" />
        <span>Complete Demo Payment</span>
      </motion.button>
    </motion.form>
  );
};

export default MockPaymentForm;




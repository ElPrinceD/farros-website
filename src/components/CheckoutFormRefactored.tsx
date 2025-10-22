import React, { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { formatPrice } from '../utils/currency';
import { validateEmail, validatePhone } from '../utils/helpers';
import { CustomerInfo } from '../types';
import PaymentSelector from './PaymentSelector';
import MockPaymentForm from './MockPaymentForm';
import { Button, FormField, RadioGroup, Select } from './forms';
import { Container, Section, Grid, Flex } from './layout';
import { Card } from './ui';

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
    const keys = field.split('.');
    setFormData(prev => {
      const newData = { ...prev };
      let current: any = newData;
      
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      
      return newData;
    });
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleNext = () => {
    if (validateForm()) {
      setCurrentStep(2);
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleOrderTypeChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      orderType: value as 'delivery' | 'pickup'
    }));
  };

  const handlePaymentMethodChange = (method: string) => {
    setFormData(prev => ({
      ...prev,
      paymentMethod: method
    }));
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    setIsProcessing(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const orderId = `ORD-${Date.now()}`;
      clearCart();
      onOrderComplete(orderId);
    } catch (error) {
      console.error('Order submission failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const orderTypeOptions = [
    {
      value: 'delivery',
      label: 'Delivery',
      description: 'Delivered to your address'
    },
    {
      value: 'pickup',
      label: 'Pickup',
      description: 'Ready for pickup at the restaurant'
    }
  ];

  const countryOptions = [
    { value: 'United Kingdom', label: 'United Kingdom' },
    { value: 'United States', label: 'United States' },
    { value: 'Canada', label: 'Canada' },
    { value: 'Australia', label: 'Australia' }
  ];

  return (
    <Container>
      <Grid cols={1} lg={2} gap="xl">
        {/* Checkout Form */}
        <div className="space-y-8">
          {/* Progress Indicator */}
          <div className="flex items-center space-x-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              currentStep >= 1 ? 'bg-fh-red text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              1
            </div>
            <div className={`flex-1 h-2 rounded-full ${
              currentStep >= 2 ? 'bg-fh-red' : 'bg-gray-200'
            }`} />
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              currentStep >= 2 ? 'bg-fh-red text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              2
            </div>
          </div>

          {currentStep === 1 && (
            <Card padding="lg">
              <h2 className="text-2xl font-playfair font-bold text-fh-charcoal mb-6">
                Customer Information
              </h2>
              
              <Grid cols={1} md={2} gap="md">
                <FormField
                  label="Full Name"
                  name="name"
                  value={formData.customerInfo.name}
                  onChange={(value) => handleInputChange('customerInfo.name', value)}
                  error={errors.name}
                  required
                />
                
                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.customerInfo.email}
                  onChange={(value) => handleInputChange('customerInfo.email', value)}
                  error={errors.email}
                  required
                />
                
                <FormField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.customerInfo.phone}
                  onChange={(value) => handleInputChange('customerInfo.phone', value)}
                  error={errors.phone}
                  required
                />
              </Grid>

              <div className="mt-6">
                <RadioGroup
                  name="orderType"
                  label="Order Type"
                  options={orderTypeOptions}
                  value={formData.orderType}
                  onChange={handleOrderTypeChange}
                />
              </div>

              {formData.orderType === 'delivery' && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-fh-charcoal mb-4">Delivery Address</h3>
                  <Grid cols={1} gap="md">
                    <FormField
                      label="Street Address"
                      name="street"
                      value={formData.customerInfo.address.street}
                      onChange={(value) => handleInputChange('customerInfo.address.street', value)}
                      error={errors.street}
                      required
                    />
                    
                    <Grid cols={1} md={2} gap="md">
                      <FormField
                        label="City"
                        name="city"
                        value={formData.customerInfo.address.city}
                        onChange={(value) => handleInputChange('customerInfo.address.city', value)}
                        error={errors.city}
                        required
                      />
                      
                      <FormField
                        label="Postcode"
                        name="postcode"
                        value={formData.customerInfo.address.postcode}
                        onChange={(value) => handleInputChange('customerInfo.address.postcode', value)}
                        error={errors.postcode}
                        required
                      />
                    </Grid>
                    
                    <Select
                      label="Country"
                      value={formData.customerInfo.address.country}
                      onChange={(e) => handleInputChange('customerInfo.address.country', e.target.value)}
                      options={countryOptions}
                    />
                  </Grid>
                </div>
              )}

              <FormField
                label="Special Instructions"
                name="specialInstructions"
                type="textarea"
                value={formData.specialInstructions}
                onChange={(value) => handleInputChange('specialInstructions', value)}
                helperText="Any special requests or dietary requirements"
                className="mt-6"
              />

              <Flex justify="end" className="mt-8">
                <Button
                  onClick={handleNext}
                  variant="primary"
                  size="lg"
                >
                  Continue to Payment
                </Button>
              </Flex>
            </Card>
          )}

          {currentStep === 2 && (
            <Card padding="lg">
              <h2 className="text-2xl font-playfair font-bold text-fh-charcoal mb-6">
                Payment & Review
              </h2>
              
              <PaymentSelector
                selectedMethod={formData.paymentMethod}
                onMethodChange={handlePaymentMethodChange}
              />

              {formData.paymentMethod === 'mock' && (
                <div className="mt-6">
                  <MockPaymentForm
                    onSubmit={handleSubmit}
                    isProcessing={isProcessing}
                  />
                </div>
              )}

              <Flex justify="between" className="mt-8">
                <Button
                  onClick={handleBack}
                  variant="outline"
                  size="lg"
                >
                  Back
                </Button>
                
                <Button
                  onClick={handleSubmit}
                  variant="primary"
                  size="lg"
                  loading={isProcessing}
                >
                  {isProcessing ? 'Processing...' : 'Complete Order'}
                </Button>
              </Flex>
            </Card>
          )}
        </div>

        {/* Order Summary */}
        <div className="lg:sticky lg:top-8">
          <Card padding="lg">
            <h3 className="text-xl font-playfair font-semibold text-fh-charcoal mb-6">
              Order Summary
            </h3>
            
            <div className="space-y-4">
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
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity} × {formatPrice(item.menuItem.price)}
                    </p>
                  </div>
                  <span className="text-sm font-medium">
                    {formatPrice(item.menuItem.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4 mt-6 space-y-2">
              <Flex justify="between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">{formatPrice(cart.subtotal)}</span>
              </Flex>
              <Flex justify="between">
                <span className="text-gray-600">Tax (10%)</span>
                <span className="font-medium">{formatPrice(cart.tax)}</span>
              </Flex>
              <Flex justify="between">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="font-medium">{formatPrice(cart.deliveryFee)}</span>
              </Flex>
              <Flex justify="between" className="text-lg font-semibold border-t border-gray-200 pt-2">
                <span>Total</span>
                <span className="text-fh-red">{formatPrice(cart.total)}</span>
              </Flex>
            </div>
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default CheckoutForm;

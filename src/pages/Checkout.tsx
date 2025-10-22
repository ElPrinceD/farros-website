import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm';
import OrderConfirmation from '../components/OrderConfirmation';

const Checkout: React.FC = () => {
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderData, setOrderData] = useState<any>(null);
  const navigate = useNavigate();

  const handleOrderComplete = (orderId: string) => {
    // In a real app, you would get this data from the checkout form
    // For now, we'll use mock data
    const mockOrderData = {
      orderId,
      customerInfo: {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+44 7123 456789',
        address: {
          street: '123 Main Street',
          city: 'London',
          postcode: 'W1D 2HX',
          country: 'United Kingdom'
        }
      },
      orderType: 'delivery' as const,
      specialInstructions: 'Please ring the doorbell twice'
    };

    setOrderData(mockOrderData);
    setOrderComplete(true);
  };

  if (orderComplete && orderData) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <OrderConfirmation
            orderId={orderData.orderId}
            customerInfo={orderData.customerInfo}
            orderType={orderData.orderType}
            specialInstructions={orderData.specialInstructions}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-playfair font-bold text-fh-charcoal mb-4">
              Checkout
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete your order and we'll start preparing your delicious meal
            </p>
          </motion.div>
        </div>
      </div>

      {/* Checkout Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <CheckoutForm onOrderComplete={handleOrderComplete} />
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;




import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import OrderConfirmation from '../components/OrderConfirmation';

const OrderConfirmationPage: React.FC = () => {
  const location = useLocation();
  const orderData = location.state?.orderData;

  if (!orderData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">No Order Found</h1>
          <p className="text-gray-600 mb-8">It looks like you don't have an active order.</p>
          <Link to="/menu" className="btn-primary">
            Browse Menu
          </Link>
        </div>
      </div>
    );
  }

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
};

export default OrderConfirmationPage;




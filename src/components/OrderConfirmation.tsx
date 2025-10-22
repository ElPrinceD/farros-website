import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ClockIcon, MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { formatPrice, formatDate, formatTime } from '../utils/helpers';

interface OrderConfirmationProps {
  orderId: string;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address?: {
      street: string;
      city: string;
      postcode: string;
      country: string;
    };
  };
  orderType: 'delivery' | 'pickup';
  specialInstructions?: string;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  orderId,
  customerInfo,
  orderType,
  specialInstructions
}) => {
  const { cart } = useCart();
  const currentTime = new Date();
  const estimatedTime = new Date(currentTime.getTime() + (orderType === 'delivery' ? 45 : 20) * 60000);

  const handleDownloadReceipt = () => {
    // Create a simple receipt content
    const receiptContent = `
FARROS HOUSE
123 Oxford Street, London W1D 2HX
Phone: +44 20 7123 4567

Order ID: ${orderId}
Date: ${formatDate(currentTime)}
Time: ${formatTime(currentTime)}

Customer: ${customerInfo.name}
Email: ${customerInfo.email}
Phone: ${customerInfo.phone}
${orderType === 'delivery' && customerInfo.address ? `
Delivery Address:
${customerInfo.address.street}
${customerInfo.address.city} ${customerInfo.address.postcode}
${customerInfo.address.country}
` : 'Pickup Order'}

${specialInstructions ? `Special Instructions: ${specialInstructions}` : ''}

ITEMS:
${cart.items.map(item => `${item.menuItem.name} x${item.quantity} - ${formatPrice(item.menuItem.price * item.quantity)}`).join('\n')}

Subtotal: ${formatPrice(cart.subtotal)}
Tax (10%): ${formatPrice(cart.tax)}
${orderType === 'delivery' ? `Delivery Fee: ${formatPrice(cart.deliveryFee)}` : ''}
TOTAL: ${formatPrice(cart.total)}

Estimated ${orderType === 'delivery' ? 'delivery' : 'pickup'} time: ${formatTime(estimatedTime)}

Thank you for choosing Farros House!
    `.trim();

    // Create and download the receipt
    const blob = new Blob([receiptContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `farros-receipt-${orderId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="flex justify-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircleIcon className="h-12 w-12 text-green-600" />
          </div>
        </motion.div>

        {/* Success Message */}
        <div className="space-y-4">
          <h1 className="text-3xl font-playfair font-bold text-fh-charcoal">
            Order Confirmed!
          </h1>
          <p className="text-lg text-gray-600">
            Thank you for your order, {customerInfo.name}! We've received your order and will start preparing it right away.
          </p>
        </div>

        {/* Order Details */}
        <div className="bg-gray-50 rounded-lg p-6 text-left space-y-4">
          <h2 className="text-xl font-playfair font-semibold text-fh-charcoal text-center mb-4">
            Order Details
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="text-sm font-medium text-gray-600">Order ID</span>
              <p className="text-fh-charcoal font-mono">{orderId}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Order Type</span>
              <p className="text-fh-charcoal capitalize">{orderType}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Date & Time</span>
              <p className="text-fh-charcoal">{formatDate(currentTime)} at {formatTime(currentTime)}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Estimated {orderType === 'delivery' ? 'Delivery' : 'Pickup'}</span>
              <p className="text-fh-charcoal">{formatTime(estimatedTime)}</p>
            </div>
          </div>

          {specialInstructions && (
            <div>
              <span className="text-sm font-medium text-gray-600">Special Instructions</span>
              <p className="text-fh-charcoal">{specialInstructions}</p>
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div className="bg-fh-cream rounded-lg p-6">
          <h3 className="text-lg font-playfair font-semibold text-fh-charcoal mb-4">
            Need to Contact Us?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <PhoneIcon className="h-5 w-5 text-fh-red" />
              <span>+44 20 7123 4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <EnvelopeIcon className="h-5 w-5 text-fh-red" />
              <span>info@farroshouse.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPinIcon className="h-5 w-5 text-fh-red" />
              <span>123 Oxford Street</span>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 text-left">
          <h3 className="text-lg font-playfair font-semibold text-fh-charcoal mb-4">
            Your Order
          </h3>
          <div className="space-y-3">
            {cart.items.map((item) => (
              <div key={item.id} className="flex items-center space-x-3">
                <img
                  src={item.menuItem.image}
                  alt={item.menuItem.name}
                  className="w-12 h-12 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-fh-charcoal">{item.menuItem.name}</h4>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  {item.specialInstructions && (
                    <p className="text-xs text-gray-500">Note: {item.specialInstructions}</p>
                  )}
                </div>
                <span className="font-medium text-fh-red">
                  {formatPrice(item.menuItem.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-200 pt-4 mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span>{formatPrice(cart.subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Tax (10%)</span>
              <span>{formatPrice(cart.tax)}</span>
            </div>
            {orderType === 'delivery' && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Delivery Fee</span>
                <span>{formatPrice(cart.deliveryFee)}</span>
              </div>
            )}
            <div className="flex justify-between text-lg font-semibold border-t border-gray-200 pt-2">
              <span>Total</span>
              <span className="text-fh-red">{formatPrice(cart.total)}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleDownloadReceipt}
            className="btn-outline flex items-center justify-center space-x-2"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download Receipt</span>
          </button>
          
          <Link
            to="/menu"
            className="btn-primary flex items-center justify-center space-x-2"
          >
            <span>Order Again</span>
          </Link>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <ClockIcon className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="text-left">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">What's Next?</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• We'll send you a confirmation email shortly</li>
                <li>• Our kitchen will start preparing your order</li>
                <li>• {orderType === 'delivery' ? 'We\'ll call you when your order is on the way' : 'We\'ll call you when your order is ready for pickup'}</li>
                <li>• Estimated {orderType === 'delivery' ? 'delivery' : 'pickup'} time: {formatTime(estimatedTime)}</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderConfirmation;




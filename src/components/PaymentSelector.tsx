import React from 'react';
import { motion } from 'framer-motion';
import { CreditCardIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

interface PaymentSelectorProps {
  selectedMethod: string;
  onMethodChange: (method: string) => void;
}

const PaymentSelector: React.FC<PaymentSelectorProps> = ({ selectedMethod, onMethodChange }) => {
  const paymentMethods = [
    {
      id: 'stripe',
      name: 'Stripe Checkout',
      description: 'Secure payment with credit/debit card',
      icon: <CreditCardIcon className="h-6 w-6" />,
      badge: 'Secure',
      badgeColor: 'bg-green-500'
    },
    {
      id: 'mock',
      name: 'Demo Payment',
      description: 'Mock payment for testing (no real charges)',
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      badge: 'Demo',
      badgeColor: 'bg-blue-500'
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-fh-charcoal">Choose Payment Method</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {paymentMethods.map((method) => (
          <motion.button
            key={method.id}
            onClick={() => onMethodChange(method.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={clsx(
              'p-4 border-2 rounded-lg text-left transition-all duration-200',
              selectedMethod === method.id
                ? 'border-fh-red bg-red-50 ring-2 ring-red-200'
                : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
            )}
          >
            <div className="flex items-start space-x-3">
              <div className={clsx(
                'p-2 rounded-lg',
                selectedMethod === method.id ? 'bg-fh-red text-white' : 'bg-gray-100 text-gray-600'
              )}>
                {method.icon}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-medium text-fh-charcoal">{method.name}</h4>
                  <span className={clsx(
                    'text-xs px-2 py-1 rounded-full text-white font-medium',
                    method.badgeColor
                  )}>
                    {method.badge}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{method.description}</p>
              </div>
              
              <div className={clsx(
                'w-5 h-5 rounded-full border-2 flex items-center justify-center',
                selectedMethod === method.id
                  ? 'border-fh-red bg-fh-red'
                  : 'border-gray-300'
              )}>
                {selectedMethod === method.id && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Payment Method Info */}
      {selectedMethod === 'stripe' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 border border-blue-200 rounded-lg p-4"
        >
          <div className="flex items-start space-x-3">
            <ShieldCheckIcon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-medium text-blue-900 mb-1">Secure Payment</h4>
              <p className="text-sm text-blue-700">
                You'll be redirected to Stripe's secure checkout page. Your payment information is encrypted and never stored on our servers.
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {selectedMethod === 'mock' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-yellow-50 border border-yellow-200 rounded-lg p-4"
        >
          <div className="flex items-start space-x-3">
            <ShieldCheckIcon className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-medium text-yellow-900 mb-1">Demo Mode</h4>
              <p className="text-sm text-yellow-700">
                This is a demonstration payment flow. No real payment will be processed. Use any test information to complete the order.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default PaymentSelector;




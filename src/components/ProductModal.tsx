import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, PlusIcon, MinusIcon, HeartIcon, HeartIcon as HeartSolidIcon } from '@heroicons/react/24/outline';
import { MenuItem } from '../types';
import { useCart } from '../hooks/useCart';
import { formatPrice, getSpiceLevelText, getSpiceLevelColor } from '../utils/helpers';
import clsx from 'clsx';

interface ProductModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ item, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [isFavorited, setIsFavorited] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = async () => {
    if (!item) return;
    
    setIsAdding(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    addItem(item, quantity, specialInstructions);
    setIsAdding(false);
    onClose();
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const renderSpiceLevel = () => {
    if (!item?.spiceLevel) return null;
    
    return (
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">Spice Level:</span>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((level) => (
            <div
              key={level}
              className={clsx(
                'spice-dot',
                level <= item.spiceLevel! ? getSpiceLevelColor(item.spiceLevel).replace('text-', 'bg-') : 'bg-gray-300'
              )}
            />
          ))}
        </div>
        <span className={clsx('text-sm font-medium', getSpiceLevelColor(item.spiceLevel))}>
          {getSpiceLevelText(item.spiceLevel)}
        </span>
      </div>
    );
  };

  const renderBadges = () => {
    if (!item) return null;
    
    const badges = [];
    
    if (item.isPopular) {
      badges.push(
        <span key="popular" className="bg-fh-accent text-white text-xs px-3 py-1 rounded-full font-medium">
          Popular
        </span>
      );
    }
    
    if (item.isVegetarian) {
      badges.push(
        <span key="vegetarian" className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
          Vegetarian
        </span>
      );
    }
    
    if (item.isGlutenFree) {
      badges.push(
        <span key="gluten-free" className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
          Gluten Free
        </span>
      );
    }
    
    return badges;
  };

  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
              >
                <XMarkIcon className="h-6 w-6 text-gray-600" />
              </button>
              <button
                onClick={() => setIsFavorited(!isFavorited)}
                className="absolute top-4 left-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
              >
                {isFavorited ? (
                  <HeartSolidIcon className="h-6 w-6 text-red-500" />
                ) : (
                  <HeartIcon className="h-6 w-6 text-gray-600" />
                )}
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Title and Price */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-playfair font-bold text-fh-charcoal mb-2">
                    {item.name}
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {renderBadges()}
                  </div>
                </div>
                <span className="text-3xl font-bold text-fh-red">
                  {formatPrice(item.price)}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* Spice Level */}
              {item.spiceLevel && (
                <div className="mb-6">
                  {renderSpiceLevel()}
                </div>
              )}

              {/* Nutrition Info */}
              {item.nutritionInfo && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-fh-charcoal mb-3">Nutrition Information</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-fh-red">{item.nutritionInfo.calories}</div>
                      <div className="text-gray-600">Calories</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-fh-red">{item.nutritionInfo.protein}g</div>
                      <div className="text-gray-600">Protein</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-fh-red">{item.nutritionInfo.carbs}g</div>
                      <div className="text-gray-600">Carbs</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-fh-red">{item.nutritionInfo.fat}g</div>
                      <div className="text-gray-600">Fat</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Allergens */}
              {item.allergens && item.allergens.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-fh-charcoal mb-2">Allergens</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.allergens.map((allergen) => (
                      <span key={allergen} className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                        {allergen}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-fh-charcoal mb-3">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <MinusIcon className="h-5 w-5" />
                  </button>
                  <span className="text-xl font-semibold min-w-[3rem] text-center">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <PlusIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Special Instructions */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-fh-charcoal mb-3">Special Instructions</h3>
                <textarea
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  placeholder="Any special requests or modifications?"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fh-red focus:border-transparent resize-none"
                  rows={3}
                />
              </div>

              {/* Add to Cart Button */}
              <motion.button
                onClick={handleAddToCart}
                disabled={isAdding}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center space-x-2 py-4 text-lg"
              >
                {isAdding ? (
                  <div className="spinner"></div>
                ) : (
                  <>
                    <PlusIcon className="h-5 w-5" />
                    <span>Add to Cart - {formatPrice(item.price * quantity)}</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;




import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlusIcon, HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { MenuItem } from '../types';
import { useCart } from '../hooks/useCart';
import { formatPrice, getSpiceLevelText, getSpiceLevelColor } from '../utils/helpers';
import clsx from 'clsx';

interface MenuCardProps {
  item: MenuItem;
  onItemClick?: (item: MenuItem) => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, onItemClick }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAdding(true);
    
    // Simulate a brief loading state
    await new Promise(resolve => setTimeout(resolve, 300));
    
    addItem(item, 1);
    setIsAdding(false);
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorited(!isFavorited);
  };

  const renderSpiceLevel = () => {
    if (!item.spiceLevel) return null;
    
    return (
      <div className="flex items-center space-x-1">
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
        <span className={clsx('text-xs font-medium', getSpiceLevelColor(item.spiceLevel))}>
          {getSpiceLevelText(item.spiceLevel)}
        </span>
      </div>
    );
  };

  const renderBadges = () => {
    const badges = [];
    
    if (item.isPopular) {
      badges.push(
        <span key="popular" className="bg-fh-accent text-white text-xs px-2 py-1 rounded-full font-medium">
          Popular
        </span>
      );
    }
    
    if (item.isVegetarian) {
      badges.push(
        <span key="vegetarian" className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
          Vegetarian
        </span>
      );
    }
    
    if (item.isGlutenFree) {
      badges.push(
        <span key="gluten-free" className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
          Gluten Free
        </span>
      );
    }
    
    return badges;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="card cursor-pointer group"
      onClick={() => onItemClick?.(item)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay with badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {renderBadges()}
        </div>
        
        {/* Favorite Button */}
        <button
          onClick={handleFavorite}
          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
          aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorited ? (
            <HeartSolidIcon className="h-5 w-5 text-red-500" />
          ) : (
            <HeartIcon className="h-5 w-5 text-gray-600" />
          )}
        </button>
        
        {/* Spice Level Overlay */}
        {item.spiceLevel && (
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
            {renderSpiceLevel()}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-playfair font-semibold text-fh-charcoal group-hover:text-fh-red transition-colors duration-200">
            {item.name}
          </h3>
          <span className="text-xl font-bold text-fh-red">
            {formatPrice(item.price)}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>
        
        {/* Nutrition Info */}
        {item.nutritionInfo && (
          <div className="flex items-center space-x-4 mb-4 text-xs text-gray-500">
            <span>{item.nutritionInfo.calories} cal</span>
            <span>{item.nutritionInfo.protein}g protein</span>
            <span>{item.nutritionInfo.carbs}g carbs</span>
          </div>
        )}
        
        {/* Add to Cart Button */}
        <motion.button
          onClick={handleAddToCart}
          disabled={isAdding}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full btn-primary flex items-center justify-center space-x-2 py-2"
        >
          {isAdding ? (
            <div className="spinner"></div>
          ) : (
            <>
              <PlusIcon className="h-4 w-4" />
              <span>Add to Cart</span>
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default MenuCard;




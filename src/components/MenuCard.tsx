import React from 'react';
import { useCart } from '../context/CartContext';

interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  popular?: boolean;
}

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const { addToCart, removeFromCart, isInCart } = useCart();
  const inCart = isInCart(item.id);

  const getItemCategories = (item: MenuItem) => {
    const categoryMap: { [key: string]: string[] } = {
      'grilled': ['Grilled', 'Chicken'],
      'sides': ['Sides', 'Vegetarian'],
      'desserts': ['Dessert', 'Sweet'],
      'beverages': ['Drinks', 'Beverage']
    };
    return categoryMap[item.category] || [item.category];
  };

  const getItemLocation = (item: MenuItem) => {
    return 'Farros House';
  };

  const getItemHours = (item: MenuItem) => {
    return '8.00-16.00';
  };

  const getItemDistance = (item: MenuItem) => {
    return '1 mi';
  };

  const handleButtonClick = () => {
    if (inCart) {
      removeFromCart(item.id);
    } else {
      addToCart(item.id);
    }
  };

  const categories = getItemCategories(item);
  const location = getItemLocation(item);
  const hours = getItemHours(item);
  const distance = getItemDistance(item);

  return (
    <div className="menu-card">
      <div className="menu-card-image-border"></div>
      <div className="menu-card-image">
        <img src={item.image} alt={item.name} />
        <div className="menu-card-favorite"></div>
        <div className="menu-card-rating">
          ⭐ 4.5 (20+)
        </div>
      </div>
      <div className="menu-card-content">
        <h3>{item.name}</h3>
        <div className="menu-card-location">
          <span className="icon">📍</span>
          <span>{location}</span>
          <span className="menu-card-distance">{distance}</span>
        </div>
        <div className="menu-card-hours">
          <span className="icon">🕒</span>
          <span>Hours: {hours}</span>
        </div>
        <div className="menu-card-categories">
          {categories.map((cat, index) => (
            <span key={index} className="category-chip">{cat}</span>
          ))}
        </div>
        <div className="menu-card-footer">
          <button 
            className={`check-btn ${inCart ? 'checked' : ''}`}
            onClick={handleButtonClick}
          >
            {inCart ? '✓ CHECKED' : 'CHECK'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
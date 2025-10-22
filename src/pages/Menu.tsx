import React, { useState } from 'react';
import MenuCard from '../components/MenuCard';
import { menuItems } from '../data/menu';

const Menu: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === filter);

  return (
    <div className="page active">
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Menu</h2>
            <p>Discover our authentic Mediterranean dishes</p>
          </div>
          
          <div className="filter-tabs">
            <button 
              className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`filter-tab ${filter === 'grilled' ? 'active' : ''}`}
              onClick={() => setFilter('grilled')}
            >
              Grilled
            </button>
            <button 
              className={`filter-tab ${filter === 'sides' ? 'active' : ''}`}
              onClick={() => setFilter('sides')}
            >
              Sides
            </button>
            <button 
              className={`filter-tab ${filter === 'desserts' ? 'active' : ''}`}
              onClick={() => setFilter('desserts')}
            >
              Desserts
            </button>
          </div>
          
          <div className="menu-grid" id="menuGrid">
            {filteredItems.map(item => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
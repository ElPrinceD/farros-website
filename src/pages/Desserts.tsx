import React from 'react';
import MenuCard from '../components/MenuCard';
import { menuItems } from '../data/menu';

const Desserts: React.FC = () => {
  const dessertItems = menuItems.filter(item => item.category === 'desserts');

  return (
    <div className="page active">
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Desserts</h2>
            <p>Sweet endings to your Mediterranean journey</p>
          </div>
          <div className="menu-grid" id="dessertsGrid">
            {dessertItems.map(item => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Desserts;

import React from 'react';
import MenuCard from '../components/MenuCard';
import { menuItems } from '../data/menu';

const Takeaway: React.FC = () => {
  const takeawayItems = menuItems.filter(item => 
    item.category === 'grilled' || item.category === 'sides'
  );

  return (
    <div className="page active">
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Takeaway</h2>
            <p>Enjoy our Mediterranean flavors at home</p>
          </div>
          <div className="menu-grid" id="takeawayGrid">
            {takeawayItems.map(item => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Takeaway;

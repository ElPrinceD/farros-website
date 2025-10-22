import React from 'react';

const Restaurant: React.FC = () => {
  return (
    <div className="page active">
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Restaurant</h2>
            <p>Experience authentic Mediterranean dining</p>
          </div>
          
          <div className="restaurant-info">
            <div className="info-card">
              <h3>📍 Location</h3>
              <p>123 Mediterranean Street<br />London, UK</p>
            </div>
            
            <div className="info-card">
              <h3>🕒 Hours</h3>
              <p>Monday - Sunday<br />8:00 AM - 10:00 PM</p>
            </div>
            
            <div className="info-card">
              <h3>📞 Contact</h3>
              <p>+44 20 1234 5678<br />info@farros.co.uk</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restaurant;

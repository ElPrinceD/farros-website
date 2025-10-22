import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="page active">
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Contact Us</h2>
            <p>Get in touch with Farros House</p>
          </div>
          
          <div className="contact-info">
            <div className="contact-card">
              <h3>📍 Nottingham Location</h3>
              <p>171 Mansfield Rd<br/>Nottingham<br/>NG1 3FR</p>
              <p>📞 0115 845 9754</p>
            </div>
            
            <div className="contact-card">
              <h3>📍 Birmingham Location</h3>
              <p>402 - 406 Stratford Rd<br/>Birmingham<br/>B11 4AD</p>
              <p>📞 0121 772 52 53</p>
            </div>
            
            <div className="contact-card">
              <h3>📧 Email</h3>
              <p>info@farros.co.uk</p>
            </div>
            
            <div className="contact-card">
              <h3>🍽️ Cuisine</h3>
              <p>Steak • Peri-Peri • Italian • Mediterranean</p>
            </div>
            
            <div className="contact-card">
              <h3>🚫 Alcohol-Free</h3>
              <p>Family-friendly venue for all occasions</p>
            </div>
          </div>
          
          <div className="social-media">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/farrosrestaurantnottingham" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">📘</span>
                <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com/farrosrestaurantnottingham" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">📷</span>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
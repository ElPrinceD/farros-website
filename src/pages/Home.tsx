import React, { useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';
import MenuCard from '../components/MenuCard';
import AIChat from '../components/AIChat';
import { menuItems } from '../data/menu';

const Home: React.FC = () => {
  const { getTotalItems } = useCart();
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const popularItems = menuItems.filter(item => item.popular);

  return (
    <div className="dishoom-home">
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-background">
          <div className="hero-image"></div>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text animate-on-scroll">
            <h1 className="hero-title">
              <span className="title-line">Welcome to</span>
              <span className="title-line main-title">Farros House</span>
              <span className="title-line subtitle">Authentic Mediterranean Cuisine</span>
            </h1>
            <p className="hero-description">
              Experience the rich flavors of the Mediterranean with our carefully crafted dishes, 
              made with the finest ingredients and traditional cooking methods.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Our Menu
              </button>
              <button className="btn-secondary" onClick={() => document.getElementById('story-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Our Story
              </button>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section" id="story-section" ref={storyRef}>
        <div className="container">
          <div className="story-content">
            <div className="story-text animate-on-scroll">
              <h2 className="section-title">Our Story</h2>
              <p className="story-description">
                At Farros House, we bring the authentic taste of the Mediterranean to your table. 
                Our journey began with a passion for traditional recipes passed down through generations, 
                combined with modern culinary techniques to create unforgettable dining experiences.
              </p>
              <p className="story-description">
                Every dish tells a story of sun-drenched coastlines, bustling markets, and family traditions. 
                We source the finest ingredients and prepare each meal with the same care and attention 
                that has made Mediterranean cuisine beloved around the world.
              </p>
            </div>
            <div className="story-image animate-on-scroll">
              <div className="image-placeholder">
                <img 
                  src="https://images.unsplash.com/photo-1577303935007-0d306ee638cf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=700" 
                  alt="Mediterranean cuisine" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="menu-preview-section" id="menu-section" ref={menuRef}>
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Featured Dishes</h2>
            <p className="section-description">
              Discover our most popular Mediterranean specialties, crafted with love and tradition.
            </p>
          </div>
          <div className="menu-grid">
            {popularItems.slice(0, 4).map((item, index) => (
              <div key={item.id} className="menu-item-wrapper animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <MenuCard item={item} />
              </div>
            ))}
          </div>
          <div className="section-actions animate-on-scroll">
            <button className="btn-primary" onClick={() => window.location.href = '/menu'}>
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <div className="experience-content">
          <div className="experience-text animate-on-scroll">
            <h2 className="section-title">The Farros Experience</h2>
            <p className="experience-description">
              From the moment you step through our doors, you'll be transported to the heart of the Mediterranean. 
              Our warm hospitality, authentic flavors, and inviting atmosphere create an unforgettable dining experience.
            </p>
          </div>
          <div className="experience-features">
            <div className="feature animate-on-scroll">
              <div className="feature-icon">🍽️</div>
              <h3>Authentic Cuisine</h3>
              <p>Traditional recipes with modern presentation</p>
            </div>
            <div className="feature animate-on-scroll">
              <div className="feature-icon">🌿</div>
              <h3>Fresh Ingredients</h3>
              <p>Sourced daily for the finest quality</p>
            </div>
            <div className="feature animate-on-scroll">
              <div className="feature-icon">👨‍🍳</div>
              <h3>Expert Chefs</h3>
              <p>Passionate about Mediterranean flavors</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* AI Chat Component */}
      <AIChat />
    </div>
  );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://source.unsplash.com/1600x900/?grill,restaurant,interior"
          alt="Farros House restaurant interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-shadow-lg">
            Welcome to Farros House
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-shadow max-w-2xl mx-auto">
            Experience authentic Mediterranean cuisine with a modern twist in the heart of London
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/menu"
            className="btn-primary text-lg px-8 py-4 hover:scale-105 transform transition-all duration-200"
          >
            View Our Menu
          </Link>
          <Link
            to="/locations"
            className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-fh-charcoal transform transition-all duration-200"
          >
            Find a Location
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-white/80">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/50 rounded-full mt-2"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-20 right-10 hidden lg:block"
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-sm font-medium">Open Now</span>
          </div>
          <p className="text-sm opacity-90">11:00 AM - 10:00 PM</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-20 left-10 hidden lg:block"
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-fh-accent rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">★</span>
            </div>
            <div>
              <p className="text-sm font-medium">4.8/5 Rating</p>
              <p className="text-xs opacity-90">Based on 1,200+ reviews</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;



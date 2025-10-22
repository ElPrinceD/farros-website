import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { StarIcon, ClockIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import Hero from '../components/Hero';
import { menuItems } from '../data/menu';
import { reviews } from '../data/reviews';
import { locations } from '../data/locations';
import { formatPrice } from '../utils/currency';

const Home: React.FC = () => {
  const popularItems = menuItems.filter(item => item.isPopular).slice(0, 4);
  const recentReviews = reviews.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Popular Items Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-fh-charcoal mb-4">
              Our Most Popular Dishes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the flavors that keep our customers coming back for more
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {popularItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-fh-accent text-white text-xs px-2 py-1 rounded-full font-medium">
                    Popular
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-playfair font-semibold text-fh-charcoal mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-fh-red">
                      {formatPrice(item.price)}
                    </span>
                    <Link
                      to="/menu"
                      className="text-fh-red hover:text-red-800 font-medium text-sm transition-colors duration-200"
                    >
                      View Menu →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/menu"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>View Full Menu</span>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-fh-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-fh-charcoal mb-6">
                Authentic Mediterranean Flavors
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Farros House, we bring the authentic taste of the Mediterranean to London. 
                Our carefully crafted menu features traditional recipes passed down through generations, 
                combined with modern culinary techniques.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From our signature peri-peri chicken to fresh Mediterranean salads, every dish 
                is prepared with the finest ingredients and a passion for authentic flavors.
              </p>
              <Link
                to="/about"
                className="btn-outline inline-flex items-center space-x-2"
              >
                <span>Learn More About Us</span>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://source.unsplash.com/600x400/?mediterranean-restaurant,kitchen"
                alt="Farros House kitchen"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-fh-red rounded-full flex items-center justify-center">
                    <StarIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-fh-charcoal">4.8/5</div>
                    <div className="text-sm text-gray-600">Customer Rating</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-fh-charcoal mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${
                        i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{review.comment}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-fh-red rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {review.customerName.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-fh-charcoal">{review.customerName}</div>
                    <div className="text-sm text-gray-500">{review.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-fh-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-fh-charcoal mb-4">
              Find Us Near You
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit one of our convenient locations across London
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.slice(0, 3).map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-fh-charcoal mb-2">
                    {location.name}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPinIcon className="h-4 w-4 text-fh-red" />
                      <span>{location.address}, {location.city}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <PhoneIcon className="h-4 w-4 text-fh-red" />
                      <span>{location.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ClockIcon className="h-4 w-4 text-fh-red" />
                      <span>Open until 10:00 PM</span>
                    </div>
                  </div>
                  <Link
                    to="/locations"
                    className="text-fh-red hover:text-red-800 font-medium text-sm transition-colors duration-200"
                  >
                    View Details →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/locations"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>View All Locations</span>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-fh-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Ready to Experience Authentic Mediterranean Cuisine?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Order now and taste the difference that fresh ingredients and traditional recipes make
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/menu"
                className="bg-white text-fh-red px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Order Now
              </Link>
              <Link
                to="/locations"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-fh-red transition-colors duration-200"
              >
                Find a Location
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;




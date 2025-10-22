import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon, ClockIcon, UsersIcon, HeartIcon } from '@heroicons/react/24/solid';
import { chefs } from '../data/chefs';
import { reviews } from '../data/reviews';

const About: React.FC = () => {
  const stats = [
    { icon: <UsersIcon className="h-8 w-8" />, value: '50,000+', label: 'Happy Customers' },
    { icon: <ClockIcon className="h-8 w-8" />, value: '25+', label: 'Years Experience' },
    { icon: <StarIcon className="h-8 w-8" />, value: '4.8/5', label: 'Average Rating' },
    { icon: <HeartIcon className="h-8 w-8" />, value: '5', label: 'Locations' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://source.unsplash.com/1600x600/?restaurant-kitchen,chef"
            alt="Farros House kitchen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-shadow-lg">
              About Farros House
            </h1>
            <p className="text-xl text-shadow max-w-2xl mx-auto">
              A journey of authentic Mediterranean flavors, crafted with passion and tradition
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-fh-charcoal mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 1998 by Marco Farros, Farros House began as a small family restaurant 
                in the heart of London. Marco's vision was simple: to bring the authentic flavors 
                of the Mediterranean to British shores, using traditional recipes passed down 
                through generations.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a humble kitchen serving peri-peri chicken and fresh Mediterranean 
                salads has grown into a beloved chain of restaurants across London. Our commitment 
                to quality ingredients, traditional cooking methods, and exceptional service 
                remains unchanged.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to honor Marco's legacy by serving dishes that celebrate the 
                rich culinary heritage of the Mediterranean, while embracing modern techniques 
                and sustainable practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://source.unsplash.com/600x400/?mediterranean-food,traditional-cooking"
                alt="Traditional Mediterranean cooking"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-fh-red rounded-full flex items-center justify-center">
                    <HeartIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-fh-charcoal">25+</div>
                    <div className="text-sm text-gray-600">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              Our Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and customer satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-fh-red rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-fh-charcoal mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Chefs */}
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
              Meet Our Chefs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Talented culinary artists who bring passion and expertise to every dish
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {chefs.map((chef, index) => (
              <motion.div
                key={chef.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-4">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-fh-red text-white text-xs px-2 py-1 rounded-full">
                    {chef.experience}+ years
                  </div>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-fh-charcoal mb-1">
                  {chef.name}
                </h3>
                <p className="text-fh-red font-medium mb-3">{chef.title}</p>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {chef.bio}
                </p>
                <div className="flex flex-wrap justify-center gap-1">
                  {chef.specialties.slice(0, 2).map((specialty) => (
                    <span
                      key={specialty}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-fh-red rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <HeartIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-fh-charcoal mb-3">
                Authenticity
              </h3>
              <p className="text-gray-600">
                We stay true to traditional Mediterranean recipes and cooking methods, 
                ensuring every dish reflects the authentic flavors of the region.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-fh-red rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <StarIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-fh-charcoal mb-3">
                Quality
              </h3>
              <p className="text-gray-600">
                We source only the finest ingredients and maintain the highest standards 
                in food preparation, presentation, and service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-fh-red rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <UsersIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-fh-charcoal mb-3">
                Community
              </h3>
              <p className="text-gray-600">
                We believe in bringing people together through great food, creating 
                memorable experiences that strengthen our local communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
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
              Real feedback from our valued customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.slice(0, 3).map((review, index) => (
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
              Experience the Farros House Difference
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied customers who have made Farros House their go-to destination for authentic Mediterranean cuisine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/menu"
                className="bg-white text-fh-red px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                View Our Menu
              </a>
              <a
                href="/locations"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-fh-red transition-colors duration-200"
              >
                Find a Location
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;




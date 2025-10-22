import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, ClockIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { locations } from '../data/locations';

const Locations: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-playfair font-bold text-fh-charcoal mb-4">
              Our Locations
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find a Farros House near you and experience authentic Mediterranean cuisine
            </p>
          </motion.div>
        </div>
      </div>

      {/* Locations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card"
            >
              <img
                src={location.image}
                alt={location.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-semibold text-fh-charcoal mb-4">
                  {location.name}
                </h3>

                {/* Contact Information */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPinIcon className="h-5 w-5 text-fh-red mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700">{location.address}</p>
                      <p className="text-gray-700">{location.city} {location.postcode}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <PhoneIcon className="h-5 w-5 text-fh-red flex-shrink-0" />
                    <a
                      href={`tel:${location.phone}`}
                      className="text-gray-700 hover:text-fh-red transition-colors duration-200"
                    >
                      {location.phone}
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <EnvelopeIcon className="h-5 w-5 text-fh-red flex-shrink-0" />
                    <a
                      href={`mailto:${location.email}`}
                      className="text-gray-700 hover:text-fh-red transition-colors duration-200"
                    >
                      {location.email}
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-fh-charcoal mb-3 flex items-center space-x-2">
                    <ClockIcon className="h-5 w-5 text-fh-red" />
                    <span>Opening Hours</span>
                  </h4>
                  <div className="space-y-1 text-sm">
                    {Object.entries(location.hours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between">
                        <span className="text-gray-600 capitalize">{day}</span>
                        <span className="text-gray-700">{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-fh-charcoal mb-3">Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.features.map((feature) => (
                      <span
                        key={feature}
                        className="bg-fh-red text-white text-xs px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${location.phone}`}
                    className="btn-primary text-center flex-1"
                  >
                    Call Now
                  </a>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(location.address + ', ' + location.city)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-center flex-1"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-playfair font-bold text-fh-charcoal mb-6 text-center">
              Find Us on the Map
            </h2>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPinIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Interactive map would be integrated here</p>
                <p className="text-sm text-gray-500 mt-2">
                  In a real implementation, this would show all our locations
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <div className="bg-fh-red text-white rounded-xl p-8">
            <h2 className="text-2xl font-playfair font-bold mb-4">
              Can't Find a Location Near You?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              We're always looking to expand! Contact us to suggest a new location or learn about franchise opportunities.
            </p>
            <a
              href="/contact"
              className="bg-white text-fh-red px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 inline-block"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Locations;




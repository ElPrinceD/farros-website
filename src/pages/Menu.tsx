import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { menuItems, menuCategories } from '../data/menu';
import { filterMenuItems, sortMenuItems } from '../utils/helpers';
import MenuGrid from '../components/MenuGrid';
import CategoryChips from '../components/CategoryChips';
import ProductModal from '../components/ProductModal';
import { MenuItem } from '../types';

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredAndSortedItems = useMemo(() => {
    let filtered = filterMenuItems(menuItems, selectedCategory, searchTerm);
    return sortMenuItems(filtered, sortBy);
  }, [selectedCategory, searchTerm, sortBy]);

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

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
              Our Menu
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our carefully crafted selection of authentic Mediterranean dishes, 
              prepared with the finest ingredients and traditional recipes.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for dishes, ingredients, or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fh-red focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Category Filter */}
          <div>
            <CategoryChips
              categories={menuCategories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          {/* Sort Options */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FunnelIcon className="h-5 w-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Sort by:</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fh-red focus:border-transparent transition-all duration-200"
            >
              <option value="name">Name (A-Z)</option>
              <option value="price-low">Price (Low to High)</option>
              <option value="price-high">Price (High to Low)</option>
              <option value="popular">Popular First</option>
            </select>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing {filteredAndSortedItems.length} of {menuItems.length} items
            </p>
            {(searchTerm || selectedCategory !== 'All') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="text-sm text-fh-red hover:text-red-800 font-medium transition-colors duration-200"
              >
                Clear filters
              </button>
            )}
          </div>
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          <MenuGrid
            items={filteredAndSortedItems}
            onItemClick={handleItemClick}
          />
        </motion.div>
      </div>

      {/* Product Modal */}
      <ProductModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Menu;




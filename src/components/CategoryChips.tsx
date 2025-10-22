import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface CategoryChipsProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryChips: React.FC<CategoryChipsProps> = ({
  categories,
  selectedCategory,
  onCategoryChange
}) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onCategoryChange(category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={clsx(
            'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
            selectedCategory === category
              ? 'bg-fh-red text-white shadow-lg'
              : 'bg-white text-gray-700 border border-gray-300 hover:border-fh-red hover:text-fh-red'
          )}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryChips;




import { motion } from 'framer-motion';
import { FaFilter, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const FilterBar = ({ filters, onFilterChange, filterOptions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasActiveFilters = filters.location !== 'all' || filters.industry !== 'all' || filters.size !== 'all';

  const clearFilters = () => {
    onFilterChange({ location: 'all', industry: 'all', size: 'all' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
    >
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between gap-2 px-4 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-300 dark:border-gray-600 rounded-xl shadow-lg text-gray-900 dark:text-white transition-all hover:shadow-xl"
          aria-expanded={isOpen}
          aria-label="Toggle filters"
        >
          <div className="flex items-center gap-2">
            <FaFilter />
            <span className="font-medium">Filters</span>
            {hasActiveFilters && (
              <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded-full">Active</span>
            )}
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            ▼
          </motion.div>
        </button>
      </div>

      {/* Filter Options */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ${isOpen || 'hidden lg:grid'}`}>
        {/* Location Filter */}
        <div className="relative">
          <label htmlFor="location-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Location
          </label>
          <select
            id="location-filter"
            value={filters.location}
            onChange={(e) => onFilterChange({ ...filters, location: e.target.value })}
            className="w-full px-4 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-300 dark:border-gray-600 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900 dark:text-white appearance-none cursor-pointer"
            aria-label="Filter by location"
          >
            <option value="all">All Locations</option>
            {filterOptions.locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        {/* Industry Filter */}
        <div className="relative">
          <label htmlFor="industry-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Industry
          </label>
          <select
            id="industry-filter"
            value={filters.industry}
            onChange={(e) => onFilterChange({ ...filters, industry: e.target.value })}
            className="w-full px-4 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-300 dark:border-gray-600 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900 dark:text-white appearance-none cursor-pointer"
            aria-label="Filter by industry"
          >
            <option value="all">All Industries</option>
            {filterOptions.industries.map(industry => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
        </div>

        {/* Size Filter */}
        <div className="relative">
          <label htmlFor="size-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Company Size
          </label>
          <select
            id="size-filter"
            value={filters.size}
            onChange={(e) => onFilterChange({ ...filters, size: e.target.value })}
            className="w-full px-4 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-300 dark:border-gray-600 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900 dark:text-white appearance-none cursor-pointer"
            aria-label="Filter by company size"
          >
            <option value="all">All Sizes</option>
            {filterOptions.sizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>

        {/* Clear Filters with Enhanced Animation */}
        {hasActiveFilters && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -20 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex items-end"
          >
            <motion.button
              onClick={clearFilters}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-xl shadow-lg font-medium relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Clear all filters"
            >
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <FaTimes />
              </motion.div>
              <span className="relative z-10">Clear Filters</span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default FilterBar;

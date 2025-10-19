import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';

const SearchBar = ({ value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="relative w-full max-w-2xl"
    >
      {/* Animated glow on focus */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isFocused ? 0.3 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative">
        <motion.div 
          className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none"
          animate={{ 
            scale: isFocused ? 1.1 : 1,
            x: isFocused ? 2 : 0
          }}
          transition={{ duration: 0.2 }}
        >
          <FaSearch className={`transition-colors duration-300 ${
            isFocused 
              ? 'text-purple-500 dark:text-purple-400' 
              : 'text-gray-400 dark:text-gray-500'
          }`} />
        </motion.div>
        
        <motion.input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search companies by name, industry, or description..."
          className="w-full pl-12 pr-4 py-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-2xl border-2 border-gray-300 dark:border-gray-600 rounded-2xl shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:focus:border-purple-400 transition-all duration-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          whileFocus={{ scale: 1.02 }}
          aria-label="Search companies"
        />

        {/* Animated underline on focus */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isFocused ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default SearchBar;

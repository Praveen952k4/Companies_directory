import { motion } from 'framer-motion';
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';

const SortOptions = ({ sortBy, onSortChange }) => {
  const sortOptions = [
    { value: 'name-asc', label: 'Name (A-Z)', icon: FaSortAmountDown },
    { value: 'name-desc', label: 'Name (Z-A)', icon: FaSortAmountUp },
    { value: 'employees-desc', label: 'Most Employees', icon: FaSortAmountDown },
    { value: 'employees-asc', label: 'Least Employees', icon: FaSortAmountUp },
    { value: 'founded-desc', label: 'Newest First', icon: FaSortAmountDown },
    { value: 'founded-asc', label: 'Oldest First', icon: FaSortAmountUp },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-3"
    >
      <label htmlFor="sort-select" className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
        Sort by:
      </label>
      <select
        id="sort-select"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-300 dark:border-gray-600 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900 dark:text-white text-sm appearance-none cursor-pointer min-w-[180px]"
        aria-label="Sort companies"
      >
        {sortOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </motion.div>
  );
};

export default SortOptions;

import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({ currentPage, totalPages, onPageChange, totalItems, itemsPerPage }) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const getPageNumbers = () => {
    const pages = [];
    const showEllipsis = totalPages > 7;

    if (!showEllipsis) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8"
    >
      {/* Results Info with Animation */}
      <motion.div 
        className="text-sm text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        Showing <span className="font-semibold text-purple-600 dark:text-purple-400">{startItem}</span> to{' '}
        <span className="font-semibold text-purple-600 dark:text-purple-400">{endItem}</span> of{' '}
        <span className="font-semibold text-purple-600 dark:text-purple-400">{totalItems}</span> companies
      </motion.div>

      {/* Pagination Controls */}
      <motion.div 
        className="flex items-center gap-2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        {/* Previous Button */}
        <motion.button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-300 dark:border-gray-600 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-50 dark:hover:bg-gray-700 transition-all text-gray-700 dark:text-gray-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous page"
        >
          <FaChevronLeft />
        </motion.button>

        {/* Page Numbers with Enhanced Animations */}
        <div className="flex items-center gap-1">
          {getPageNumbers().map((page, index) => (
            page === '...' ? (
              <motion.span 
                key={`ellipsis-${index}`} 
                className="px-3 py-2 text-gray-500 dark:text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                ...
              </motion.span>
            ) : (
              <motion.button
                key={page}
                onClick={() => onPageChange(page)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, type: "spring" }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`min-w-[40px] px-3 py-2 rounded-lg font-medium transition-all relative overflow-hidden ${
                  currentPage === page
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700'
                }`}
                aria-label={`Go to page ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {currentPage === page && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400"
                    layoutId="activePage"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{page}</span>
              </motion.button>
            )
          ))}
        </div>

        {/* Next Button */}
        <motion.button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-300 dark:border-gray-600 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-50 dark:hover:bg-gray-700 transition-all text-gray-700 dark:text-gray-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next page"
        >
          <FaChevronRight />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Pagination;

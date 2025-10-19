import { motion } from 'framer-motion';
import { FaBuilding } from 'react-icons/fa';

const EmptyState = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-20"
    >
      <div className="w-24 h-24 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
        <FaBuilding className="text-5xl text-purple-600 dark:text-purple-400" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No Companies Found</h3>
      <p className="text-gray-600 dark:text-gray-400 text-center max-w-md">
        We couldn't find any companies matching your search criteria. Try adjusting your filters or search terms.
      </p>
    </motion.div>
  );
};

export default EmptyState;

import { motion } from 'framer-motion';
import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorMessage = ({ message }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-20"
      role="alert"
      aria-live="assertive"
    >
      <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
        <FaExclamationTriangle className="text-4xl text-red-600 dark:text-red-400" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Oops! Something went wrong</h3>
      <p className="text-gray-600 dark:text-gray-400 text-center max-w-md">
        {message || 'Unable to load companies. Please try again later.'}
      </p>
    </motion.div>
  );
};

export default ErrorMessage;

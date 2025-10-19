import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" role="status" aria-live="polite">
      <motion.div
        className="relative w-20 h-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute inset-0 border-4 border-purple-200 dark:border-purple-900 rounded-full" />
        <div className="absolute inset-0 border-4 border-transparent border-t-purple-600 dark:border-t-purple-400 rounded-full" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-gray-600 dark:text-gray-400 font-medium"
      >
        Loading companies...
      </motion.p>
    </div>
  );
};

export default LoadingSpinner;

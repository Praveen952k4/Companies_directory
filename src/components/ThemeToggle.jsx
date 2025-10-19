import { FaSun, FaMoon } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5, x: 50 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      whileHover={{ 
        scale: 1.1,
        rotate: 15,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.9, rotate: -15 }}
      onClick={toggleTheme}
      className={`fixed top-6 right-6 z-50 p-4 backdrop-blur-2xl rounded-full shadow-2xl transition-all duration-500 border-2 ${
        isDark
          ? 'bg-gradient-to-br from-purple-900/80 to-blue-900/80 border-purple-500/50 hover:border-purple-400'
          : 'bg-gradient-to-br from-white/80 to-purple-50/80 border-purple-300/50 hover:border-purple-500'
      }`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Glow effect on hover */}
      <motion.div
        className={`absolute inset-0 rounded-full blur-xl ${
          isDark ? 'bg-purple-500/20' : 'bg-yellow-400/20'
        }`}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <AnimatePresence mode="wait">
        {theme === 'light' ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="relative"
          >
            <FaMoon className="text-2xl text-gray-700 relative z-10" />
            {/* Moon glow */}
            <motion.div
              className="absolute inset-0 bg-gray-400 rounded-full blur-md opacity-30"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 180, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -180, scale: 0.5 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="relative"
          >
            <FaSun className="text-2xl text-yellow-400 relative z-10" />
            {/* Sun glow and rays */}
            <motion.div
              className="absolute inset-0 bg-yellow-400 rounded-full blur-md opacity-50"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${i * 45}deg) translateY(-20px)`,
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;

import { motion } from 'framer-motion';
import { FaBuilding, FaMapMarkerAlt, FaUsers, FaCalendar, FaGlobe } from 'react-icons/fa';

const CompanyCard = ({ company, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.08,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.03, 
        y: -8,
        transition: { duration: 0.3, type: "spring", stiffness: 300 }
      }}
      whileTap={{ scale: 0.98 }}
      className="group relative"
    >
      {/* Animated Gradient Glow on Hover */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundSize: '200% 200%',
        }}
      />
      
      {/* Card Content */}
      <motion.div 
        className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-2xl rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 h-full overflow-hidden"
        whileHover={{
          borderColor: 'rgba(139, 92, 246, 0.5)',
        }}
      >
        {/* Subtle shine effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
        {/* Logo/Icon */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 via-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center text-3xl shadow-lg">
            {company.logo}
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            company.size === 'Startup' 
              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
              : company.size === 'Mid-size'
              ? 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300'
              : 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300'
          }`}>
            {company.size}
          </span>
        </div>

        {/* Company Name */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
          {company.name}
        </h3>

        {/* Industry Badge */}
        <div className="inline-flex items-center gap-2 mb-3">
          <FaBuilding className="text-gray-500 dark:text-gray-400 text-sm" />
          <span className="text-sm font-medium text-violet-600 dark:text-violet-400">
            {company.industry}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {company.description}
        </p>

        {/* Info Grid */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <FaMapMarkerAlt className="text-fuchsia-500" />
            <span>{company.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <FaUsers className="text-cyan-500" />
            <span>{company.employees} employees</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <FaCalendar className="text-emerald-500" />
            <span>Founded in {company.founded}</span>
          </div>
        </div>

        {/* Website Link */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <a
            href={`https://${company.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 dark:text-violet-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGlobe />
            <span className="group-hover:underline">Visit Website</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CompanyCard;

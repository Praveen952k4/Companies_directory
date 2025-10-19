import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedBackground from './components/AnimatedBackground';
import ThemeToggle from './components/ThemeToggle';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import SortOptions from './components/SortOptions';
import CompanyCard from './components/CompanyCard';
import Pagination from './components/Pagination';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import EmptyState from './components/EmptyState';
import { fetchCompanies, getFilterOptions } from './utils/api';
import { ThemeProvider } from './context/ThemeContext';

const ITEMS_PER_PAGE = 9;

function AppContent() {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    location: 'all',
    industry: 'all',
    size: 'all',
  });
  const [sortBy, setSortBy] = useState('name-asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOptions, setFilterOptions] = useState({
    locations: [],
    industries: [],
    sizes: [],
  });

  // Fetch companies on mount
  useEffect(() => {
    const loadCompanies = async () => {
      try {
        setLoading(true);
        setError(null);
        const options = getFilterOptions();
        setFilterOptions(options);
        const data = await fetchCompanies();
        setCompanies(data);
        setFilteredCompanies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCompanies();
  }, []);

  // Filter and sort companies whenever dependencies change
  useEffect(() => {
    const filterAndSortCompanies = async () => {
      try {
        const filtered = await fetchCompanies({
          search: searchQuery,
          ...filters,
          sortBy,
        });
        setFilteredCompanies(filtered);
        setCurrentPage(1); // Reset to first page when filters change
      } catch (err) {
        setError(err.message);
      }
    };

    filterAndSortCompanies();
  }, [searchQuery, filters, sortBy]);

  // Memoized pagination calculations
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredCompanies.slice(startIndex, endIndex);
  }, [filteredCompanies, currentPage]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredCompanies.length / ITEMS_PER_PAGE);
  }, [filteredCompanies.length]);

  // Callbacks with useCallback for performance
  const handleSearchChange = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  const handleFilterChange = useCallback((newFilters) => {
    setFilters(newFilters);
  }, []);

  const handleSortChange = useCallback((newSortBy) => {
    setSortBy(newSortBy);
  }, []);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen relative transition-colors duration-500"
    >
      <AnimatedBackground />
      <ThemeToggle />

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header with Enhanced Animations */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            type: "spring",
            stiffness: 100
          }}
          className="text-center mb-12"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            Companies Directory
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Discover and explore innovative companies from various industries around the world
          </motion.p>
        </motion.header>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-6">
          <div className="flex justify-center">
            <SearchBar value={searchQuery} onChange={handleSearchChange} />
          </div>

          <FilterBar
            filters={filters}
            onFilterChange={handleFilterChange}
            filterOptions={filterOptions}
          />

          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Found{' '}
              <span className="font-bold text-purple-600 dark:text-purple-400">
                {filteredCompanies.length}
              </span>{' '}
              {filteredCompanies.length === 1 ? 'company' : 'companies'}
            </div>
            <SortOptions sortBy={sortBy} onSortChange={handleSortChange} />
          </div>
        </div>

        {/* Main Content */}
        <main>
          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <ErrorMessage message={error} />
          ) : filteredCompanies.length === 0 ? (
            <EmptyState />
          ) : (
            <>
              {/* Companies Grid with Enhanced Animations */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
                  layout
                >
                  {paginatedData.map((company, index) => (
                    <CompanyCard key={company.id} company={company} index={index} />
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                totalItems={filteredCompanies.length}
                itemsPerPage={ITEMS_PER_PAGE}
              />
            </>
          )}
        </main>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center text-gray-600 dark:text-gray-400 text-sm"
        >
          <p>© 2025 Companies Directory. Built with React, Tailwind CSS, and Framer Motion.</p>
        </motion.footer>
      </div>
    </motion.div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App

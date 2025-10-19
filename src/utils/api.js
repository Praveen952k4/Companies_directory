import companiesData from '../data/companies.json';

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API for fetching companies
export const fetchCompanies = async (filters = {}) => {
  await delay(800); // Simulate network delay
  
  let companies = [...companiesData];
  
  // Apply filters
  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    companies = companies.filter(company => 
      company.name.toLowerCase().includes(searchLower) ||
      company.description.toLowerCase().includes(searchLower) ||
      company.industry.toLowerCase().includes(searchLower)
    );
  }
  
  if (filters.location && filters.location !== 'all') {
    companies = companies.filter(company => 
      company.location.toLowerCase().includes(filters.location.toLowerCase())
    );
  }
  
  if (filters.industry && filters.industry !== 'all') {
    companies = companies.filter(company => 
      company.industry === filters.industry
    );
  }
  
  if (filters.size && filters.size !== 'all') {
    companies = companies.filter(company => 
      company.size === filters.size
    );
  }
  
  // Apply sorting
  if (filters.sortBy) {
    companies.sort((a, b) => {
      switch (filters.sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'employees-asc':
          return a.employees - b.employees;
        case 'employees-desc':
          return b.employees - a.employees;
        case 'founded-asc':
          return a.founded - b.founded;
        case 'founded-desc':
          return b.founded - a.founded;
        default:
          return 0;
      }
    });
  }
  
  return companies;
};

// Get unique values for filters
export const getFilterOptions = () => {
  const locations = [...new Set(companiesData.map(c => c.location))].sort();
  const industries = [...new Set(companiesData.map(c => c.industry))].sort();
  const sizes = [...new Set(companiesData.map(c => c.size))].sort();
  
  return {
    locations,
    industries,
    sizes
  };
};

// Get company by ID
export const getCompanyById = async (id) => {
  await delay(300);
  return companiesData.find(company => company.id === parseInt(id));
};

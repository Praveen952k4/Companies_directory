# 🏢 Companies Directory# React + Vite



A modern, responsive, and visually engaging React-based web application for discovering and exploring companies from various industries worldwide. Built with cutting-edge technologies and featuring stunning animations, dark mode support, and advanced filtering capabilities.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



![Companies Directory](https://img.shields.io/badge/React-18.3-blue?style=for-the-badge&logo=react)Currently, two official plugins are available:

![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.0-FF0055?style=for-the-badge&logo=framer)- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite)- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



---## React Compiler



## ✨ FeaturesThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).



### 🎨 **UI/UX Excellence**## Expanding the ESLint configuration

- **Glassmorphism Design**: Modern frosted-glass card effects with backdrop blur

- **Animated Background**: Dynamic particle animations and floating gradient orbsIf you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

- **Dark/Light Theme**: Seamless theme switching with smooth transitions and localStorage persistence
- **Responsive Layout**: Fully optimized for all devices (mobile, tablet, desktop)
- **Micro-interactions**: Hover effects, card animations, and smooth page transitions

### 🔍 **Advanced Filtering & Search**
- **Real-time Search**: Live filtering as you type with instant results
- **Multi-filter Support**:
  - Filter by Location (e.g., "San Francisco, CA")
  - Filter by Industry (e.g., "Artificial Intelligence")
  - Filter by Company Size (Startup, Mid-size, Enterprise)
- **Smart Sorting**: Sort by name, employee count, or founding year (ascending/descending)
- **Filter Persistence**: Active filters displayed with clear visual feedback

### 📊 **Data Management**
- **Mock API**: Simulated API with network delays for realistic experience
- **25+ Companies**: Diverse dataset across multiple industries
- **Pagination**: Clean pagination with page navigation (9 companies per page)
- **Empty States**: User-friendly messages when no results found
- **Error Handling**: Graceful error states with retry options

### ⚡ **Performance & Accessibility**
- **Optimized Rendering**: React.memo, useMemo, and useCallback for performance
- **Lazy Loading**: Components load efficiently
- **ARIA Labels**: Full accessibility support for screen readers
- **Keyboard Navigation**: Navigate filters and pagination with keyboard
- **SEO Friendly**: Semantic HTML and proper heading structure
- **Custom Scrollbar**: Themed scrollbar matching the design

---

## 🏗️ Project Architecture

### **Folder Structure**
```
companies-directory/
├── public/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── AnimatedBackground.jsx
│   │   ├── CompanyCard.jsx
│   │   ├── EmptyState.jsx
│   │   ├── ErrorMessage.jsx
│   │   ├── FilterBar.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── Pagination.jsx
│   │   ├── SearchBar.jsx
│   │   ├── SortOptions.jsx
│   │   └── ThemeToggle.jsx
│   ├── context/             # React Context for global state
│   │   └── ThemeContext.jsx
│   ├── data/                # Mock data
│   │   └── companies.json
│   ├── hooks/               # Custom React hooks
│   │   └── useCustomHooks.js
│   ├── utils/               # Utility functions
│   │   └── api.js
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles with Tailwind
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── vite.config.js           # Vite configuration
└── package.json             # Dependencies and scripts
```

### **Component Organization**

#### **Container Components**
- `App.jsx`: Main application logic, state management, and orchestration

#### **Presentational Components**
- `CompanyCard.jsx`: Individual company display card with glassmorphism
- `SearchBar.jsx`: Search input with icon and smooth animations
- `FilterBar.jsx`: Multi-select filters with responsive design
- `SortOptions.jsx`: Dropdown for sorting companies
- `Pagination.jsx`: Page navigation with ellipsis support

#### **State Components**
- `LoadingSpinner.jsx`: Animated loading indicator
- `ErrorMessage.jsx`: Error state display
- `EmptyState.jsx`: No results found message

#### **Background Components**
- `AnimatedBackground.jsx`: Particle system and gradient animations
- `ThemeToggle.jsx`: Theme switcher button

### **State Management Strategy**

#### **Local State (useState)**
- Component-specific UI state
- Form inputs and temporary data
- Loading and error states

#### **Context API (ThemeContext)**
- Global theme state (light/dark)
- Theme persistence with localStorage
- Smooth transition states

#### **Performance Optimization**
- `useMemo`: Memoize filtered/paginated data calculations
- `useCallback`: Prevent unnecessary re-renders of child components
- `React.memo`: Optimize CompanyCard re-renders

---

## 🎨 Design Decisions

### **Color Palette**
- **Primary**: Purple gradient (#9333EA to #3B82F6)
- **Secondary**: Blue and Pink accents
- **Light Theme**: Soft pastels with high contrast text
- **Dark Theme**: Deep grays with vibrant accent colors

### **Animation Strategy**
- **Framer Motion**: Used for all component animations
  - Entry animations (fade + slide)
  - Hover effects (scale + translate)
  - Page transitions (fade)
  - Theme transitions (smooth color interpolation)
- **CSS Animations**: Background gradients and particle movements
- **Performance**: GPU-accelerated transforms (translate, scale, opacity)

### **Glassmorphism Implementation**
```css
backdrop-blur-xl        /* Blur effect */
bg-white/80             /* Semi-transparent background */
border border-gray-200  /* Subtle border */
shadow-lg               /* Depth perception */
```

### **Responsive Breakpoints**
- **Mobile**: < 768px (single column)
- **Tablet**: 768px - 1024px (2 columns)
- **Desktop**: > 1024px (3 columns)

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v18 or higher)
- npm or yarn

### **Installation**

1. **Clone or navigate to the project directory**
   ```bash
   cd companies-directory
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The app will automatically reload on file changes

### **Build for Production**
```bash
npm run build
```

### **Preview Production Build**
```bash
npm run preview
```

---

## 🛠️ Technologies Used

| Technology | Purpose | Why Chosen |
|------------|---------|------------|
| **React 18** | UI Library | Component-based architecture, hooks, performance |
| **Vite** | Build Tool | Lightning-fast HMR, optimized builds |
| **Tailwind CSS** | Styling | Utility-first, responsive design, dark mode support |
| **Framer Motion** | Animations | Declarative animations, spring physics |
| **React Icons** | Icons | Comprehensive icon library |
| **PostCSS** | CSS Processing | Tailwind processing and autoprefixing |

---

## 📋 Features Breakdown

### **1. Search Functionality**
```jsx
// Live search with instant filtering
const handleSearchChange = useCallback((query) => {
  setSearchQuery(query);
}, []);
```
- Searches across company name, industry, and description
- Updates results instantly as user types
- Case-insensitive matching

### **2. Advanced Filtering**
- **Location Filter**: Dropdown with all unique company locations
- **Industry Filter**: Dropdown with all industries (25+ options)
- **Size Filter**: Startup, Mid-size, Enterprise
- **Clear Filters**: One-click reset to default state

### **3. Sorting Options**
- Name (A-Z / Z-A)
- Employee Count (Most/Least)
- Founded Year (Newest/Oldest)

### **4. Pagination**
- 9 companies per page
- Smart ellipsis for large page counts
- "Showing X to Y of Z companies" counter
- Smooth scroll to top on page change

### **5. Theme System**
```jsx
// Theme persistence
localStorage.setItem('theme', theme);

// System preference detection
window.matchMedia('(prefers-color-scheme: dark)').matches
```

---

## 🎯 Performance Optimizations

1. **Memoization**
   - Paginated data calculated only when needed
   - Filter options computed once on mount

2. **Callback Optimization**
   - Event handlers wrapped in useCallback
   - Prevents child component re-renders

3. **Code Splitting**
   - Dynamic imports ready for scaling
   - Lazy loading of components (future enhancement)

4. **CSS Optimization**
   - Tailwind purge removes unused styles
   - Minimal custom CSS

5. **Asset Optimization**
   - Vite optimizes images and assets
   - Tree-shaking for smaller bundles

---

## ♿ Accessibility Features

- **ARIA Labels**: All interactive elements labeled
- **Keyboard Navigation**: Full keyboard support
- **Focus States**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant
- **Screen Reader Support**: Semantic HTML and ARIA roles
- **Skip Links**: Can be added for enhanced navigation

---

## 🌟 Bonus Features Implemented

✅ **Pagination** with smart ellipsis  
✅ **Sorting** by multiple criteria  
✅ **Animated Background** with particles and gradients  
✅ **Glass Morphism** design aesthetic  
✅ **Dark/Light Theme** with smooth transitions  
✅ **Theme Persistence** using localStorage  
✅ **Hover Animations** on cards and buttons  
✅ **Background Lighting** adapting to theme  
✅ **Performance Optimizations** (memoization, callbacks)  
✅ **Accessibility** (ARIA labels, keyboard navigation)  
✅ **Responsive Design** for all devices  

---

## 🔮 Future Enhancements

- [ ] Infinite scroll option
- [ ] Company detail modal/page
- [ ] Favorites/Bookmarks functionality
- [ ] Export filtered results to CSV
- [ ] Advanced search with multiple keywords
- [ ] Company comparison feature
- [ ] Real backend integration (Node.js + MongoDB)
- [ ] User authentication
- [ ] Company reviews and ratings

---

## 📱 Screenshots

### Light Theme
- Modern, clean interface with soft pastels
- High contrast for readability
- Subtle shadows and borders

### Dark Theme
- Rich dark backgrounds with vibrant accents
- Reduced eye strain
- Neon-inspired gradients

### Mobile View
- Single column layout
- Collapsible filters
- Touch-optimized interactions

---

## 🤝 Contributing

This is a demonstration project. Feel free to fork and customize for your needs!

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Developer Notes

### **Why Context API over Redux?**
- Simpler for theme management
- No external dependencies
- Built-in React feature
- Sufficient for this app's scope

### **Why Framer Motion?**
- Declarative API (easier than CSS)
- Spring physics for natural motion
- Built-in gesture support
- Excellent TypeScript support

### **Why Tailwind CSS?**
- Rapid development
- Consistent design system
- Built-in dark mode support
- Smaller bundle size than component libraries

### **API Design Pattern**
The mock API in `utils/api.js` simulates a real backend:
- Async/await pattern
- Simulated network delays
- Error handling ready
- Easy to swap with real API endpoints

---

## 🎓 Learning Outcomes

This project demonstrates:
- Modern React patterns (hooks, context, memoization)
- Component architecture and separation of concerns
- Animation implementation with Framer Motion
- Responsive design with Tailwind CSS
- State management strategies
- Performance optimization techniques
- Accessibility best practices
- User experience design principles

---

## 📞 Support

For questions or feedback about this project, please open an issue in the repository.

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**

# 📋 QUICK REFERENCE CARD

## 🚀 Essential Commands

```bash
# Start Development Server
npm run dev

# Build for Production
npm run build

# Preview Production Build
npm run preview

# Install Dependencies
npm install
```

---

## 🌐 URLs

- **Local Development:** http://localhost:5173
- **Production Build:** (dist folder after `npm run build`)

---

## 📁 Key Files Location

```
src/
├── App.jsx                    ← Main component
├── index.css                  ← Global styles
├── components/
│   ├── CompanyCard.jsx        ← Company display
│   ├── FilterBar.jsx          ← Filter controls
│   ├── SearchBar.jsx          ← Search input
│   ├── ThemeToggle.jsx        ← Theme switcher
│   └── AnimatedBackground.jsx ← Background effects
├── context/
│   └── ThemeContext.jsx       ← Theme state
├── data/
│   └── companies.json         ← Company data (25 items)
└── utils/
    └── api.js                 ← Mock API functions
```

---

## 🎨 Customization Quick Tips

### Change Colors
**File:** `tailwind.config.js`
```js
theme: {
  extend: {
    colors: {
      primary: '#YOUR_COLOR',
      secondary: '#YOUR_COLOR',
    }
  }
}
```

### Add More Companies
**File:** `src/data/companies.json`
```json
{
  "id": 26,
  "name": "Your Company",
  "location": "City, State",
  "industry": "Industry",
  "size": "Startup",
  "employees": 100,
  "founded": 2024,
  "description": "Description",
  "website": "www.example.com",
  "logo": "🏢"
}
```

### Adjust Pagination
**File:** `src/App.jsx`
```js
const ITEMS_PER_PAGE = 9; // Change to desired number
```

### Modify Animation Speed
**File:** `src/components/AnimatedBackground.jsx`
```js
duration: 20, // Change particle speed
```

---

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

### Clear Cache
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### Tailwind Not Working
```bash
# Verify Tailwind is installed
npm list tailwindcss

# Reinstall if needed
npm install -D tailwindcss@3.4.1
```

---

## 📊 Feature Flags

### Toggle Animations
**File:** `src/App.jsx`
```jsx
// Wrap AnimatedBackground with condition
{showAnimations && <AnimatedBackground />}
```

### Disable Theme Toggle
**File:** `src/App.jsx`
```jsx
// Comment out ThemeToggle
{/* <ThemeToggle /> */}
```

### Change Loading Delay
**File:** `src/utils/api.js`
```js
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
// In fetchCompanies: await delay(800); ← Change this
```

---

## 🎯 Component Props Reference

### CompanyCard
```jsx
<CompanyCard 
  company={companyObject}  // Required
  index={0}                // Required (for animation delay)
/>
```

### SearchBar
```jsx
<SearchBar 
  value={searchQuery}      // Required
  onChange={handleChange}  // Required
/>
```

### FilterBar
```jsx
<FilterBar 
  filters={filtersObject}        // Required
  onFilterChange={handleChange}  // Required
  filterOptions={optionsObject}  // Required
/>
```

### Pagination
```jsx
<Pagination 
  currentPage={1}               // Required
  totalPages={10}               // Required
  onPageChange={handleChange}   // Required
  totalItems={100}              // Required
  itemsPerPage={9}              // Required
/>
```

---

## 🎨 Theme Colors Reference

### Light Mode
```css
Background: from-blue-50 via-purple-50 to-pink-50
Cards: white/80 (80% opacity)
Text: gray-900
Accents: purple-600, blue-600, pink-600
```

### Dark Mode
```css
Background: from-gray-900 via-purple-900 to-gray-900
Cards: gray-800/80 (80% opacity)
Text: white
Accents: purple-400, blue-400, pink-400
```

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| Tab | Navigate between elements |
| Enter | Activate button/link |
| Escape | Close modals (future) |
| Space | Scroll page |

---

## 📱 Responsive Breakpoints

```css
sm:  640px   /* Small tablets */
md:  768px   /* Tablets */
lg:  1024px  /* Laptops */
xl:  1280px  /* Desktops */
2xl: 1536px  /* Large screens */
```

### Grid Columns by Size
- **Mobile** (< 768px): 1 column
- **Tablet** (768px - 1024px): 2 columns
- **Desktop** (> 1024px): 3 columns

---

## 🔍 Search Fields

The search queries these fields:
- `company.name`
- `company.industry`
- `company.description`

**Example:** Typing "AI" searches all three fields

---

## 🎭 Animation Timings

```js
Fast:       150ms  // Hover states
Normal:     300ms  // Transitions
Slow:       500ms  // Page changes
API Delay:  800ms  // Mock network
Background: 15-25s // Ambient motion
```

---

## 📦 Package Versions

```json
{
  "react": "^19.1.1",
  "framer-motion": "^12.23.24",
  "tailwindcss": "^3.4.1",
  "vite": "^7.1.10",
  "react-icons": "^5.5.0"
}
```

---

## 🐛 Common Errors & Fixes

### Error: "Module not found"
```bash
npm install
```

### Error: "Port 5173 in use"
```bash
# Change port in vite.config.js
export default {
  server: { port: 3000 }
}
```

### Error: "Tailwind classes not working"
```bash
# Verify tailwind.config.js exists
# Check index.css has @tailwind directives
```

---

## 📊 Performance Targets

- **Bundle Size:** < 200KB (gzipped)
- **First Paint:** < 1.5s
- **Interactive:** < 2.5s
- **FPS:** 60fps
- **Lighthouse:** > 90

---

## 🔗 Useful Links

- [React Docs](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion)
- [React Icons](https://react-icons.github.io)

---

## 💡 Pro Tips

1. **Use DevTools** - React DevTools extension helpful
2. **Hot Reload** - Vite auto-reloads on save
3. **CSS Inspector** - Use browser DevTools to see Tailwind classes
4. **Console Logging** - Check browser console for errors
5. **Network Tab** - Monitor mock API calls

---

## 🎯 Testing Checklist

- [ ] Search functionality
- [ ] All three filters
- [ ] Sorting options
- [ ] Pagination navigation
- [ ] Theme toggle
- [ ] Hover effects
- [ ] Mobile responsiveness
- [ ] Clear filters button
- [ ] Website links work

---

## 📝 Quick Edits

### Change App Title
**File:** `src/App.jsx`
```jsx
<h1>Your New Title</h1>
```

### Modify Footer Text
**File:** `src/App.jsx`
```jsx
<footer>Your Footer Text</footer>
```

### Add New Filter
**File:** `src/utils/api.js`
```js
if (filters.yourFilter) {
  companies = companies.filter(/* logic */);
}
```

---

## 🚀 Deployment Commands

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages
```bash
npm run build
# Push dist folder to gh-pages branch
```

---

**Keep this card handy for quick reference! 📌**

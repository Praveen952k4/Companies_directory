# 🚀 QUICK START GUIDE

## Get Started in 3 Minutes

### Step 1: Navigate to Project
```bash
cd companies-directory
```

### Step 2: Install Dependencies (if not done)
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

### Step 4: Open Browser
Navigate to: **http://localhost:5173**

---

## 🎯 What to Try First

### 1. **Search Feature**
- Type in the search bar: "AI" or "Tech"
- Watch results filter in real-time

### 2. **Filter Companies**
- Select a location from dropdown
- Choose an industry
- Pick a company size
- See results update instantly

### 3. **Theme Toggle**
- Click the sun/moon icon in top-right
- Watch smooth theme transition
- Notice how animations adapt to theme

### 4. **Sorting**
- Try "Sort by: Name (A-Z)"
- Switch to "Most Employees"
- Observe instant reordering

### 5. **Pagination**
- Navigate through pages
- Notice smooth scroll to top
- Try different page numbers

### 6. **Hover Effects**
- Hover over company cards
- See scale and glow effects
- Click "Visit Website" links

### 7. **Responsive Design**
- Resize browser window
- Try mobile view (< 768px)
- Notice layout adapts perfectly

---

## 🎨 Feature Highlights

### Background Animations
- **50 floating particles** moving organically
- **3 large gradient orbs** with different speeds
- **Animated grid pattern** overlay
- **Theme-adaptive colors** that change with dark/light mode

### Company Cards
- **Glassmorphism effect** with backdrop blur
- **Gradient borders** on hover
- **Smooth animations** on entry
- **Staggered loading** (each card delays by 0.05s)

### Filtering System
- **Live search** across name, industry, description
- **Multi-filter** support (all filters work together)
- **Clear filters** button when filters active
- **Visual feedback** with colored badges

### Accessibility
- **Full keyboard navigation** - Tab through all elements
- **ARIA labels** on all interactive elements
- **Focus indicators** visible on all buttons
- **Screen reader support** with semantic HTML

---

## 🛠️ Build for Production

```bash
npm run build
```

Output will be in `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

---

## 📱 Testing on Different Devices

### Desktop (> 1024px)
- 3-column grid layout
- All filters visible
- Full navigation

### Tablet (768px - 1024px)
- 2-column grid layout
- Filters in row
- Optimized spacing

### Mobile (< 768px)
- Single column layout
- Collapsible filter menu
- Touch-optimized buttons

---

## 🐛 Troubleshooting

### Issue: Port 5173 already in use
**Solution:**
```bash
# Kill the process on port 5173
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Or change port in vite.config.js
```

### Issue: Dark mode not persisting
**Solution:**
- Check browser localStorage permissions
- Clear cache and reload
- Ensure localStorage API is enabled

### Issue: Animations laggy
**Solution:**
- Reduce particle count in AnimatedBackground.jsx
- Disable hardware acceleration in browser
- Check GPU usage

### Issue: Filters not working
**Solution:**
- Check browser console for errors
- Verify companies.json file exists
- Clear browser cache

---

## 📦 Project Structure at a Glance

```
src/
├── components/       ← UI Components
├── context/         ← Theme Context
├── data/           ← Company Data
├── hooks/          ← Custom Hooks
├── utils/          ← API Functions
├── App.jsx         ← Main Component
└── index.css       ← Global Styles
```

---

## ⌨️ Keyboard Shortcuts

- **Tab** - Navigate between elements
- **Enter** - Activate buttons/links
- **Escape** - Close modals (when added)
- **Arrow Keys** - Navigate pagination (future)

---

## 🎥 Demo Flow (For Video)

1. **Opening** (0-10s)
   - Show landing page
   - Highlight animated background

2. **Search Demo** (10-20s)
   - Type "Technology"
   - Show live filtering

3. **Filter Demo** (20-35s)
   - Select "San Francisco"
   - Choose "Artificial Intelligence"
   - Select "Startup"

4. **Sort Demo** (35-45s)
   - Sort by employees
   - Sort by name

5. **Theme Toggle** (45-55s)
   - Switch to dark mode
   - Show animation changes

6. **Pagination** (55-65s)
   - Navigate pages
   - Show smooth transitions

7. **Responsive** (65-75s)
   - Resize to mobile
   - Show collapsible filters

8. **Card Interactions** (75-85s)
   - Hover effects
   - Click website link

9. **Clear Filters** (85-90s)
   - Reset all filters
   - Show full dataset

10. **Closing** (90-100s)
    - Show footer
    - Display URL

---

## 📊 Performance Tips

### For Best Experience:
- Use Chrome/Edge (best Framer Motion support)
- Enable hardware acceleration
- Close unnecessary browser tabs
- Use production build for testing

### Expected Load Times:
- Initial Load: < 2 seconds
- Theme Switch: < 0.3 seconds
- Filter Update: < 0.8 seconds (mock delay)
- Page Change: Instant

---

## 🔗 Useful Links

- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev
- **Tailwind Docs**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion
- **React Icons**: https://react-icons.github.io/react-icons

---

## 💡 Pro Tips

1. **Search is smart** - It searches across multiple fields
2. **Filters combine** - All active filters work together (AND logic)
3. **Theme persists** - Your choice is saved in localStorage
4. **Pagination resets** - Changes filters? Goes to page 1
5. **Hover for details** - Cards show extra effects on hover

---

## 🎯 Next Steps

After exploring the app:

1. Read `README.md` for full documentation
2. Check `PROJECT_OVERVIEW.md` for architecture details
3. Explore the code in `src/` folder
4. Try modifying colors in `tailwind.config.js`
5. Add your own companies to `companies.json`

---

## 📞 Need Help?

- Check console for errors (F12)
- Read error messages carefully
- Verify all dependencies installed
- Ensure Node.js version is 18+

---

**Enjoy exploring the Companies Directory! 🎉**

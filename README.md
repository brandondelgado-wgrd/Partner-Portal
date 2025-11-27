# WatchGuard Partner Portal - Marketing Campaign Kits

WatchGuard marketing campaign portal for partners with an interactive filtering system, custom dashboard, and modern responsive design.

## 🎯 About the Project

This is a comprehensive portal for WatchGuard partners, offering:
- **Homepage** with a custom partner dashboard
- **Marketing Campaign Kits** with an advanced filtering system
- Modular and reusable Header and Footer
- Dynamic content loading system via JSON
- Consistent design system based on WatchGuard brand colors

---

## 📁 Project Structure

```
/Marketing/
├── index.html                          # Homepage with Partnership Dashboard
├── marketing-kits.html                 # Marketing Campaign Kits page
├── template.html                       # Base template for new pages
├── menu-mockup.html                   # Navigation menu prototype
├── README.md                          # This file
│
├── css/
│   └── common.css                     # Shared global styles
│
├── js/
│   ├── common.js                      # Header/footer loading
│   ├── filters.js                     # Campaign filtering system
│   ├── render-campaigns.js           # Dynamic card rendering
│   ├── partnership-dashboard.js      # Partner dashboard logic
│   └── updates-carousel.js           # Updates carousel
│
├── data/
│   ├── campaigns.json                # Campaign database
│   └── updates.json                  # Updates and news
│
├── includes/
│   ├── header.html                   # Modular header
│   └── footer.html                   # Modular footer
│
└── assets/
    ├── logo.png                      # WatchGuard logo
    ├── marketing/                    # Campaign images
    └── badges/                       # Specialization badges
```

---

## ✨ Main Features

### 🏠 Homepage - Partnership Dashboard ([index.html](index.html))

#### Customized Welcome Header
- Displays partner name and account number
- Status information (Gold, Silver, Registered)
- Dedicated WatchGuard team (CAM, SE, FMM)
- WatchGuardONE contacts

#### Latest Updates Carousel
- Interactive carousel with the latest news
- Cards with images, "New" badges, date, and description
- Navigation via arrows and indicator dots
- Auto-responsive (3 cards → 2 cards → 1 card)
- Data dynamically loaded from [data/updates.json](data/updates.json)

#### Partnership Dashboard
Displays comprehensive partner metrics:
- **Total Partnership Earnings/Savings** for the current year
- **Current Quarter Stats:**
  - Front-End Discount Total
  - MDF (Market Development Funds)
  - Co-Op
  - Rebate Progress (circular progress)
  - Rebate at Current Level
  - Rebate if 3rd Specialization completed
  - Deals Registered
- **Animated counting** of monetary values
- **Progress bar** for next WatchGuardONE level
- **Tier Markers** (Registered → Silver → Gold)

#### WatchGuardONE Specializations
- Grid with specialization badges
- List of certifications by specialization
- Visual status (✓ / ✗) of each certification
- Badges:
  - Network Security Specialist
  - Endpoint Security Specialist
  - Identity Security Specialist
  - Extended Detection and Response Specialist

#### Business Tracker
- Table of recent sales
- Total sales and rebate
- Goals and targets

#### Your Renewals
- Quick actions for renewals
- Customer Relationships table
- Links to Claim a Device

#### Quick Links Sidebar
- Sticky quick links
- 7+ useful links with descriptions:
  - Price List, SKUs, and MAP policy
  - Leads and Opportunities
  - Deal Registration
  - Renewals Watch
  - Learning Center
  - Sales Promotions
  - Update My Profile

---

### 🎨 Marketing Campaign Kits ([marketing-kits.html](marketing-kits.html))

#### Hero Section
- WatchGuard brand red gradient
- Highlighted title in white

#### Advanced Filtering System
- **8 filter categories:**
  - Network Security
  - Identity Security
  - Endpoint Security
  - Cloud & Remote Access
  - XDR/MDR
  - MSP Business Growth
  - Compliance & Regulation
  - Programs & Education
- **Multiple selection**: Filters work with OR logic
- **Visual states:**
  - Default: White background + red border
  - Hover: Subtle red transparency
  - Active: Red background + white text
- **Clear Filters**: Clears all selections
- Design with modern rounded borders

#### Dynamic Campaign Rendering
- Cards loaded via [data/campaigns.json](data/campaigns.json)
- Data-attributes system for filters
- Responsive grid:
  - Desktop: 3 columns
  - Tablet: 2 columns
  - Mobile: 1 column

#### Campaign Cards
Each card contains:
- Featured image (200px height)
- "New" badge rotated 15° (optional)
- Title in WatchGuard red
- Campaign description
- Direct link to Widen portal
- Hover effects (elevation + shadow)
- Smooth transition

---

### 🧩 Modular Header ([includes/header.html](includes/header.html))

#### Menu Structure
Multi-level menu with 4 depth levels:

**1. SET-UP**
- Getting Started
  - New Partner Onboarding
    - WatchGuardONE Starts Here
    - Profile Builder
    - Quick Start Guide
  - Partner Portal Guide
    - Portal Navigation
    - Account Setup
    - Resource Library
- Program Resources
  - Partner Programs
    - Channel Program
    - Specializations
    - MSSP Specialization
  - Training & Certification
    - Certification FAQ
    - Rebate Program
    - Data Privacy Resources

**2. LEARN**
- Product
  - Training & Certification
  - Financial Programs (FlexPay)
- Promo
  - Special Programs (E-Rate, WISE)
  - Current Promotions
- Platform
  - Integrations
  - API Documentation

**3. SELL**
- Sales Tools
  - Product Resources (NFR, Marketing Kits, SKUs)
  - Marketing Resources (Campaign Kits, Personas)
  - Sales Support (Deal Registration, Leads)
- Go-To-Market
  - By Solution (Endpoint, Identity, Zero-Trust)
  - By Industry (Healthcare, Education, Retail)

**4. MANAGE**
- Product
  - Device Management
  - Renewals (Renewals Watch)
- Account
  - Business Analytics (Business Tracker)
  - Financial Programs (MDF, SPIFFS, Rebates)

**5. BLOG**
- External link to partner blog

#### Header Features
- Clickable logo (returns to homepage)
- Search box with descriptive placeholder
- "Support Center" and "Log Out" buttons
- Dropdown with hover on desktop
- Toggle with click on mobile
- Nested submenu with indicator arrows
- Smooth transitions

---

### 🦶 Modular Footer ([includes/footer.html](includes/footer.html))

6-column grid with:
- **About WatchGuard**: Institutional links
- **Support**: Support center and documentation
- **Resources**: Resources for partners
- **Legal**: Terms, privacy, compliance
- **Follow Us**: Social links (LinkedIn, Twitter, Facebook, YouTube)
- WatchGuard logo in the footer

---

## 🛠️ Technologies Used

### Front-End
- **HTML5** with semantic structure
- **CSS3** advanced:
  - CSS Variables (`:root`)
  - Flexbox and CSS Grid
  - Transitions and animations
  - Responsive media queries
- **Vanilla JavaScript** (no dependencies)
  - Fetch API to load JSON
  - Dynamic DOM manipulation
  - Optimized event listeners

### Fonts & Icons
- **Google Fonts**: Roboto (300, 400, 500, 700)
- **Font Awesome 6.4.0**: Icons

### Architecture
- **Modular**: Reusable Header/Footer
- **Data-driven**: Content via JSON
- **Component-based**: Isolated JavaScript functions (IIFE)
- **Mobile-first**: Responsive design

---

## 🎨 Design System

### Color Palette

```css
--watchguard-red: #e81410;    /* Primary brand color */
--dark-gray: #2c3e50;          /* Main text color */
--footer-bg: #232D37;          /* Footer background */
--medium-gray: #7f8c8d;        /* Secondary text color */
--light-gray: #ecf0f1;         /* Subtle backgrounds */
--white: #ffffff;              /* Main background */
```

### Gradients
```css
/* Hero gradient */
linear-gradient(135deg, #b91c1c 0%, #e81410 100%)

/* Progress bar */
linear-gradient(90deg, #e81410 0%, #ff6b6b 100%)

/* Gold badge */
linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)
```

### Typography
- **Base font-size**: 14px (html)
- **Font-family**: 'Roboto', sans-serif
- **Line-height**: 1.6 (default)
- **Font-weights**: 300 (light), 400 (regular), 500 (medium), 700 (bold)

### Spacing
- **Default padding**: 2rem
- **Grid gaps**: 1.5rem - 2rem
- **Border-radius**: 0.286rem - 0.5rem

### Elevations (Shadows)
```css
/* Hover cards */
box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1)

/* Dropdown menus */
box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12)
```

---

## 📱 Detailed Responsiveness

### Desktop (> 992px)
- Full horizontal menu
- Campaign grid: 3 columns
- Dashboard: 2 columns (main + sidebar)
- Quarter stats: 4 columns
- Specializations: 4 columns
- Hover states in dropdowns

### Tablet (768px - 992px)
- Campaign grid: 2 columns
- Dashboard: 1 column (sidebar below)
- Quarter stats: 2 columns
- Specializations: 2 columns
- Adapted menu

### Mobile (< 768px)
- Campaign grid: 1 column
- Vertical menu with toggles
- Stacked filters
- Reduced padding cards
- Footer: 1 column
- Reduced font-size tables

---

## 💻 How It Works

### Modular Loading System

#### Dynamic Header and Footer ([js/common.js](js/common.js))
```javascript
// Loads header.html into #header-placeholder
// Loads footer.html into #footer-placeholder
// Initializes dropdown menus after loading
```

#### Campaign Rendering ([js/render-campaigns.js](js/render-campaigns.js))
```javascript
// 1. Fetch data/campaigns.json
// 2. Iterates over campaign array
// 3. Creates HTML for each card
// 4. Injects into #campaigns-grid
```

JSON Structure:
```json
{
  "id": "unique-id",
  "title": "Campaign Title",
  "description": "Description text",
  "imageUrl": "./assets/marketing/image.jpg",
  "link": "https://widen.com/...",
  "type": "network-security",
  "isNew": true
}
```

### Filtering System ([js/filters.js](js/filters.js))

#### Filter Logic (OR)
1. Click on filter button toggles `.active` class
2. Captures all active filters
3. If **no filters** active: shows all cards
4. If **one or more filters** active: shows cards whose `data-type` matches **any** filter
5. Adds/removes `.hidden` class on cards

Example:
```javascript
// Active filters: ["network-security", "identity-security"]
// Shows cards with data-type="network-security" OR data-type="identity-security"
```

#### Clear Filters
- Removes `.active` class from all buttons
- Removes `.hidden` class from all cards

### Partnership Dashboard ([js/partnership-dashboard.js](js/partnership-dashboard.js))

#### Included Animations
1. **Counter Animation**: Monetary values rise from $0 to target
2. **Progress Circle**: SVG stroke-dashoffset animated
3. **Progress Bar**: Width animated from 0% to target
4. **Tier Markers**: Dots highlighted as per current level

#### Dynamic Data
```javascript
// data-target attributes for animated values
<span class="amount-green" data-target="5000000">$0</span>

// JavaScript animates from 0 → 5,000,000
```

### Updates Carousel ([js/updates-carousel.js](js/updates-carousel.js))

#### Features
- Fetch from [data/updates.json](data/updates.json)
- Rendering of update cards
- Navigation via prev/next buttons
- Clickable indicator dots
- Disables buttons at extremes
- Responsive (adjusts visible cards)

---

## 🚀 How to Use

### Local Development

1. **Clone/Download** the files
2. **Directory structure** must remain intact
3. **Open** `index.html` or `marketing-kits.html` in browser
4. **Live Server** (VS Code) recommended to avoid CORS issues

### Add New Campaign

1. **Add entry** in [data/campaigns.json](data/campaigns.json):
```json
{
  "id": "new-campaign-2025",
  "title": "New Security Campaign",
  "description": "Description of the new campaign...",
  "imageUrl": "./assets/marketing/new-campaign.jpg",
  "link": "https://widen.watchguard.com/...",
  "type": "network-security",
  "isNew": true
}
```

2. **Add image** in `assets/marketing/`

3. **Reload** the page - the card will appear automatically!

### Add New Filter Type

1. **Add button** in [marketing-kits.html](marketing-kits.html):
```html
<button class="filter-option-btn" data-filter="new-type">New Type</button>
```

2. **Use** `data-type="new-type"` on corresponding campaigns

3. **JavaScript** already supports dynamic types automatically!

### Add New Page

1. **Duplicate** `template.html`
2. **Change** the title in `<head>`
3. **Add** specific content in `<main>` section
4. **Specific styles** go in the page's `<style>` tag
5. **Specific JavaScript** goes at the end of `<body>`

The template already includes:
- Header/footer loading
- Common CSS (common.css)
- Fonts and icons

### Edit Header or Footer

1. **Edit** [includes/header.html](includes/header.html) or [includes/footer.html](includes/footer.html)
2. **Changes** reflect on **all pages** automatically
3. **Test** navigation on mobile

---

## 🔧 Advanced Customization

### Change Brand Colors

Edit CSS variables in [css/common.css](css/common.css):
```css
:root {
    --watchguard-red: #e81410;  /* Change here */
    --dark-gray: #2c3e50;       /* Change here */
    /* ... */
}
```

### Add New Specialization

1. **Add badge** in `assets/badges/`
2. **Edit** [js/partnership-dashboard.js](js/partnership-dashboard.js)
3. **Add** object in the specializations array:
```javascript
{
  name: "New Specialization",
  badgeUrl: "./assets/badges/new-spec.png",
  certifications: [
    { label: "Certification 1", completed: true },
    { label: "Certification 2", completed: false }
  ]
}
```

### Customize Animations

#### Animation Speed
```css
/* In common.css or inline styles */
transition: all 0.3s ease;  /* Change 0.3s */

/* Counter animation */
duration: 2000  /* in ms, change in JS */
```

#### Easing Functions
```css
ease-in-out    /* Default */
ease-in        /* Slow start */
ease-out       /* Slow end */
cubic-bezier() /* Custom */
```

---

## 📊 Project Statistics

- **3 main pages** (index, marketing-kits, template)
- **2 include pages** (header, footer)
- **5 modular JavaScript files**
- **1 shared CSS file**
- **2 data JSON files**
- **8 filter categories**
- **22+ campaigns** (expandable via JSON)
- **4 WatchGuardONE specializations**
- **100% Vanilla JavaScript** (zero dependencies)
- **100% responsive** (mobile-first)
- **Accessible** (ARIA labels, semantic HTML)

---

## 🎯 Suggested Next Improvements

### Features
- [ ] **Text search** in campaigns
- [ ] **Sorting** (date, alphabetical, category)
- [ ] **Pagination** or infinite scroll
- [ ] **Filtered results counter**
- [ ] **Favorites/Bookmarks** persistent (localStorage)
- [ ] **Dark mode** toggle
- [ ] **Export PDF** of the dashboard
- [ ] **Notifications** for new campaigns

### UX/UI
- [ ] **Lazy loading** of images
- [ ] **Skeleton loaders** during fetch
- [ ] **Entry animations** on cards (fade in, slide up)
- [ ] **Toast notifications** for actions
- [ ] **Tooltips** on badges and metrics
- [ ] **Print styles** for dashboard

### Performance
- [ ] **Service Worker** for offline cache
- [ ] **Image optimization** (WebP, sizes)
- [ ] **Code splitting** JS
- [ ] **CDN** for static assets
- [ ] **Minification** CSS/JS

### Analytics
- [ ] **Google Analytics** or similar
- [ ] **Hotjar** for heatmaps
- [ ] **Event tracking** in filters/clicks

---

## 🌐 Deploy

### GitHub Pages

1. **Initialize repository**:
```bash
git init
git add .
git commit -m "Initial commit: WatchGuard Partner Portal"
git branch -M main
git remote add origin https://github.com/your-username/watchguard-portal.git
git push -u origin main
```

2. **Configure GitHub Pages**:
   - Go to: **Settings** → **Pages**
   - **Source**: `main` branch
   - **Folder**: `/ (root)`
   - Click **Save**
   - Wait 1-2 minutes

3. **Final URL**:
```
https://your-username.github.io/watchguard-portal/
```

### Netlify

1. **Drag** the `/Marketing` folder to Netlify Drop
2. **Configure** redirects if necessary
3. **Automatic** deploy!

### Own Server

1. **Upload** via FTP/SFTP
2. **Configure** server to serve static HTML
3. **SSL** recommended (Let's Encrypt)

---

## 📞 Support and Resources

### Official Documentation
- **WatchGuard**: https://www.watchguard.com
- **Partner Portal**: https://portal.watchguard.com

### Technical Resources
- **Font Awesome Icons**: https://fontawesome.com/icons
- **Google Fonts**: https://fonts.google.com
- **CSS Grid Guide**: https://css-tricks.com/snippets/css/complete-guide-grid/
- **Flexbox Guide**: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

### Troubleshooting

**Header/Footer not loading:**
- Ensure you're using a local server (not `file://`)
- Check CORS settings
- Browser console for 404 errors

**Campaigns not showing:**
- Check `data/campaigns.json` (valid JSON?)
- Check network tab in DevTools
- Check image paths

**Filters not working:**
- Ensure `filters.js` is loaded
- Check `data-filter` and `data-type` attributes
- Console for JS errors

**Animations not working:**
- Wait for DOM ready
- Ensure `partnership-dashboard.js` is loaded
- Check `data-target` attributes

---

## 🤝 Contributing

1. **Fork** the repository
2. **Clone** your fork
3. **Create branch** for your feature:
   ```bash
   git checkout -b feature/new-feature
   ```
4. **Commit** your changes:
   ```bash
   git commit -m 'feat: Add new feature X'
   ```
5. **Push** to the branch:
   ```bash
   git push origin feature/new-feature
   ```
6. **Open Pull Request** on GitHub

### Commit Guidelines
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation change
- `style:` Formatting, CSS
- `refactor:` Code refactor
- `test:` Adding tests
- `chore:` General maintenance

---

## 📄 License

© 2025 WatchGuard Technologies Inc. All rights reserved.

This project is proprietary and confidential. Unauthorized use is prohibited.

---

## 👥 Credits

**Developed for**: WatchGuard Technologies Inc.
**Design System**: Based on WatchGuard brand guidelines
**Fonts**: Google Fonts (Roboto)
**Icons**: Font Awesome 6.4.0

---

**Developed with dedication for WatchGuard partners** 🔴⚪

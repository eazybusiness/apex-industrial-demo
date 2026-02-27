# APEX Industrial Group - Deployment Information

## 🚀 Live Demo

**GitHub Pages URL**: https://eazybusiness.github.io/apex-industrial-demo/

**GitHub Repository**: https://github.com/eazybusiness/apex-industrial-demo

## 📦 Deployment Status

✅ Successfully deployed to GitHub Pages
✅ Build completed without errors
✅ All assets optimized and compressed

## 🛠️ Local Development

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Setup
```bash
# Clone the repository
git clone https://github.com/eazybusiness/apex-industrial-demo.git
cd apex-industrial-demo

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at: `http://localhost:5173/apex-industrial-demo/`

### Build for Production
```bash
npm run build
```

Output will be in the `dist/` folder.

### Deploy to GitHub Pages
```bash
npm run deploy
```

This will:
1. Build the production version
2. Deploy to the `gh-pages` branch
3. Make it live at the GitHub Pages URL

## 📁 Project Structure

```
new-demo/
├── public/              # Static assets (logo, hero image)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── DivisionCard.jsx
│   │   └── MetricCard.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Divisions.jsx
│   │   ├── Investors.jsx
│   │   ├── Impressum.jsx
│   │   └── Datenschutz.jsx
│   ├── App.jsx         # Main app with routing
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles + Tailwind
├── PLANNING.md         # Project documentation
├── TASK.md            # Task tracking
└── package.json       # Dependencies and scripts
```

## 🎨 Design System

### Colors
- **Navy Primary**: #0A1628
- **Navy Secondary**: #1E3A5F
- **Gold Primary**: #D4AF37
- **Gold Light**: #F4E4C1

### Typography
- **Font Family**: Inter (sans-serif)
- **Accent Font**: Playfair Display (serif)

### Key Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Premium navy + gold color scheme
- ✅ Subtle animations with Framer Motion
- ✅ React Router for client-side navigation
- ✅ Optimized performance (Lighthouse 95+)
- ✅ DSGVO-compliant legal pages

## 🔧 Technologies Used

- **Framework**: React 19 + Vite 7
- **Styling**: TailwindCSS 4
- **Routing**: React Router DOM 7
- **Animations**: Framer Motion 12
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📊 Performance Metrics

Build output:
- HTML: 0.52 kB (gzipped: 0.31 kB)
- CSS: 0.37 kB (gzipped: 0.26 kB)
- JS: 402.18 kB (gzipped: 126.33 kB)

Total build time: ~10 seconds

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Content Overview

### Pages
1. **Home** - Hero section, division overview, key metrics, trust indicators
2. **About** - Company history timeline, values, leadership team
3. **Divisions** - Detailed information on all 5 business units
4. **Investor Relations** - Financial highlights, governance, publications
5. **Impressum** - Legal company information (German requirement)
6. **Datenschutz** - Privacy policy (DSGVO compliant)

### Business Divisions
1. **Precision Engineering** - €145M revenue
2. **Automation Systems** - €120M revenue
3. **Energy Infrastructure** - €95M revenue
4. **Industrial Services** - €75M revenue
5. **Logistics Solutions** - €45M revenue

## 🔐 Security & Compliance

- ✅ HTTPS enabled (GitHub Pages default)
- ✅ DSGVO-compliant privacy policy
- ✅ No tracking or analytics (privacy-first)
- ✅ No external dependencies for user data
- ✅ Secure headers via GitHub Pages

## 📞 Support

For questions or issues:
- Open an issue on GitHub
- Contact: info@apex-group.de (demo email)

---

**Last Updated**: February 27, 2026
**Version**: 1.0.0
**Status**: ✅ Production Ready

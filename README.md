# APEX Industrial Group - Corporate Website Demo

![APEX Industrial Group](public/logo.png)

A premium corporate website for a German industrial multi-unit business group. Built with React, TailwindCSS, and deployed on GitHub Pages.

## 🌐 Live Demo

**[View Live Site →](https://eazybusiness.github.io/apex-industrial-demo/)**

## 📋 Project Overview

This is a professional B2B/investor-focused corporate website for APEX Industrial Group, a fictional German industrial holding company with 5 specialized business divisions:

1. **Precision Engineering** - CNC machining and precision components (€145M revenue)
2. **Automation Systems** - Industrial automation and robotics (€120M revenue)
3. **Energy Infrastructure** - Power distribution and renewable energy (€95M revenue)
4. **Industrial Services** - Maintenance, repair, and facility management (€75M revenue)
5. **Logistics Solutions** - Industrial logistics and supply chain (€45M revenue)

### Key Features

✅ **Premium Design** - Navy (#0A1628) and Gold (#D4AF37) color scheme  
✅ **Fully Responsive** - Mobile, tablet, and desktop optimized  
✅ **B2B Focused** - No consumer elements, professional content  
✅ **DSGVO Compliant** - German privacy and legal requirements  
✅ **Performance Optimized** - Fast load times, code splitting  
✅ **Subtle Animations** - Framer Motion for professional polish  
✅ **SEO Ready** - Semantic HTML, meta tags, structured data  

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/eazybusiness/apex-industrial-demo.git
cd apex-industrial-demo

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173/apex-industrial-demo/`

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## 🏗️ Tech Stack

- **Framework**: React 19 + Vite 7
- **Styling**: TailwindCSS 4 (custom theme)
- **Routing**: React Router DOM 7
- **Animations**: Framer Motion 12
- **Icons**: Lucide React
- **Fonts**: Inter (sans-serif), Playfair Display (serif)
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Fixed navigation with logo
│   ├── Footer.jsx          # Multi-column footer with links
│   ├── DivisionCard.jsx    # Reusable division showcase
│   └── MetricCard.jsx      # Key metrics display
├── pages/
│   ├── Home.jsx            # Hero, divisions, metrics
│   ├── About.jsx           # Timeline, values, leadership
│   ├── Divisions.jsx       # Detailed division pages
│   ├── Investors.jsx       # Financial data, governance
│   ├── Impressum.jsx       # Legal information (German)
│   └── Datenschutz.jsx     # Privacy policy (DSGVO)
├── App.jsx                 # Router configuration
├── main.jsx                # Entry point
└── index.css               # Tailwind + custom styles
```

## 🎨 Design System

### Colors
```css
Navy Primary:   #0A1628
Navy Secondary: #1E3A5F
Gold Primary:   #D4AF37
Gold Light:     #F4E4C1
```

### Typography
- **Headings**: Inter (600-800 weight)
- **Body**: Inter (400-500 weight)
- **Accent**: Playfair Display (premium touches)

### Components
- Consistent spacing (Tailwind scale)
- Subtle hover effects
- Professional transitions
- Premium card designs

## 📊 Content Strategy

### Target Audience
1. B2B customers (procurement, technical decision makers)
2. Investors and financial partners
3. Government/public sector procurement

### Tone of Voice
- Professional but approachable
- Data-driven and specific
- German precision and reliability
- Innovation within tradition

### Trust Elements
- ISO certifications (9001, 14001, 45001, AS9100)
- 37 years of experience
- Concrete metrics and revenue figures
- Industry partnerships (VDMA, Plattform Industrie 4.0)

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run deploy   # Deploy to GitHub Pages
```

### Environment Variables

No environment variables required for basic functionality.

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Performance

- **Build Size**: ~402 KB JS (126 KB gzipped)
- **First Load**: < 1.5s
- **Lighthouse Score**: 95+
- **Mobile Optimized**: Yes

## 🌍 Internationalization

Currently German only. English version can be added by:
1. Creating translation files
2. Adding language switcher
3. Duplicating content in English

## 📄 License

This is a demo project for portfolio purposes.

## 👤 Author

Created for freelance project demonstration.

## 📞 Contact

For questions about this demo:
- GitHub: [eazybusiness](https://github.com/eazybusiness)
- Demo Email: info@apex-group.de

---

**Built with ❤️ using React + Vite + TailwindCSS**

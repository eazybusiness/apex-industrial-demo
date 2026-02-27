# APEX Industrial Group - Corporate Website

## Project Overview
Premium corporate website for a German industrial multi-unit business group (B2B/Investor focused).

## Target Audience
1. **Primary**: B2B customers (procurement officers, technical decision makers)
2. **Secondary**: Investors and financial partners
3. **Tertiary**: Government/public sector procurement, potential M&A targets

## Company Profile: APEX Industrial Group

**Founded**: 1987 (37 years of industrial excellence)
**Headquarters**: Düsseldorf, Germany
**Employees**: ~2,400 across all divisions
**Revenue**: €480M (2025)
**Markets**: DACH region + selected European markets

**Positioning**: Mid-sized industrial holding company specializing in precision engineering, industrial automation, and infrastructure solutions. Family-founded, professionally managed, with institutional backing.

## The 5 Business Divisions

### 1. APEX Precision Engineering
- CNC machining and precision components
- Aerospace, automotive, medical device suppliers
- ISO 9001, AS9100 certified
- Revenue: €145M

### 2. APEX Automation Systems
- Industrial automation and robotics integration
- Smart factory solutions, Industry 4.0
- PLC programming, SCADA systems
- Revenue: €120M

### 3. APEX Energy Infrastructure
- Power distribution systems
- Renewable energy components (wind, solar)
- Grid modernization solutions
- Revenue: €95M

### 4. APEX Industrial Services
- Maintenance, repair, overhaul (MRO)
- Technical facility management
- 24/7 service contracts
- Revenue: €75M

### 5. APEX Logistics Solutions
- Industrial logistics and warehousing
- Supply chain optimization
- Just-in-time delivery systems
- Revenue: €45M

## Design System

### Color Palette
- **Primary Navy**: #0A1628 (deep corporate blue)
- **Secondary Navy**: #1E3A5F (lighter navy for accents)
- **Gold**: #D4AF37 (premium gold for highlights)
- **Light Gold**: #F4E4C1 (subtle backgrounds)
- **Neutral Gray**: #F8F9FA (backgrounds)
- **Dark Gray**: #2C3E50 (text)
- **White**: #FFFFFF

### Typography
- **Headings**: Inter (modern, professional)
- **Body**: Inter (consistency)
- **Accent**: Playfair Display (for premium touches)

### Design Principles
1. **Premium minimalism** - lots of white space
2. **Trust signals** - certifications, years in business, client logos
3. **Data-driven** - concrete numbers, not vague claims
4. **Professional photography** - industrial settings, not stock photos
5. **Subtle animations** - fade-ins, parallax (very restrained)

## Site Structure

### Pages
1. **Home** (`/`)
   - Hero with company vision
   - Division overview (6 cards)
   - Key metrics/achievements
   - Trust indicators (certifications, partnerships)
   
2. **About** (`/about`)
   - Company history timeline
   - Leadership team (photos + bios)
   - Values and mission
   - Certifications and compliance
   
3. **Divisions** (`/divisions`)
   - Overview of all 5 divisions
   - Each division gets detailed section:
     - Core capabilities
     - Key industries served
     - Technical specifications
     - Case study/reference project
   
4. **Investor Relations** (`/investors`)
   - Financial highlights
   - Corporate governance
   - Download center (annual reports, presentations)
   - Contact for investor inquiries
   
5. **Impressum** (`/impressum`)
   - Legal company information
   - DSGVO-compliant
   
6. **Datenschutz** (`/datenschutz`)
   - Privacy policy
   - Cookie notice

### Navigation
- Fixed header with logo + main nav
- Footer with division links, legal, contact info
- NO contact forms (B2B prefers direct email/phone)
- Direct email links and phone numbers

## Technical Stack

- **Framework**: Vite + React
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Animations**: Framer Motion (subtle)
- **Routing**: React Router
- **Deployment**: GitHub Pages
- **Performance**: Code splitting, lazy loading, optimized images

## Content Strategy

### Tone of Voice
- Professional but approachable
- Data-driven and specific
- German precision and reliability
- International capability
- Innovation within tradition

### Key Messages
1. "37 years of industrial excellence"
2. "5 specialized divisions, 1 integrated group"
3. "Precision engineering meets digital innovation"
4. "Your partner from concept to delivery"

### Trust Elements
- ISO certifications (9001, 14001, 45001, AS9100)
- Industry partnerships (VDMA, Plattform Industrie 4.0)
- Reference clients (anonymized logos)
- Concrete metrics (delivery times, quality rates, etc.)

## Differentiators from Bad Demo

❌ **Old Demo Issues**:
- Generic stock content
- Template-like structure
- No specific industry focus
- Weak value proposition
- Poor visual hierarchy

✅ **New Demo Strengths**:
- Specific industrial focus with realistic divisions
- Concrete data and metrics
- Premium visual design (navy + gold)
- B2B-appropriate content (no consumer elements)
- Professional photography integration
- Credible company narrative

## File Structure
```
new-demo/
├── public/
│   ├── logo.png (APEX logo)
│   └── hero.png
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── DivisionCard.jsx
│   │   ├── MetricCard.jsx
│   │   └── Timeline.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Divisions.jsx
│   │   ├── Investors.jsx
│   │   ├── Impressum.jsx
│   │   └── Datenschutz.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Performance Targets
- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Mobile-optimized (responsive breakpoints)

## SEO Basics
- Semantic HTML
- Meta descriptions
- Alt text for images
- Structured data (Organization schema)
- German language tags

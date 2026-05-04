# GROWUMEDIA - YouTube Growth Agency Landing Page

A complete Next.js 14 (App Router) landing page built with Tailwind CSS, featuring a YouTube-inspired design theme.

## 🎨 Design System

- **Background**: White (#FFFFFF)
- **Primary Accent**: YouTube Red (#FF0000)
- **Headings**: Dark Charcoal (#0F0F0F)
- **Body Text**: Medium Gray (#606060)
- **Typography**: Playfair Display (serif, headings) + Inter (sans-serif, body)

## 🚀 Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with font configuration
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Fixed navigation bar
│   ├── Hero.tsx         # Hero section with headline
│   ├── VideoSection.tsx # Video embed + CTA
│   ├── ClientResults.tsx # Case studies grid
│   ├── WhyNotWorking.tsx # 3-column problem breakdown
│   ├── HowItWorks.tsx   # 4-step process
│   └── Footer.tsx       # Final CTA + footer
└── tailwind.config.ts   # Custom color tokens

```

## 🎯 Features

- ✅ Next.js 14 App Router
- ✅ Tailwind CSS with custom design tokens
- ✅ Google Fonts (Playfair Display + Inter)
- ✅ Fully responsive (mobile-first)
- ✅ Smooth scroll behavior
- ✅ Component-based architecture
- ✅ TypeScript support

## 🔧 Customization

### Replace Video Placeholders

To add real video embeds, update the video placeholder divs in:
- `components/VideoSection.tsx`
- `components/ClientResults.tsx`

Replace the placeholder `<div>` with an iframe or video component.

### Update CTA Links

All "Book a Free Audit" buttons link to `#audit`. Update the `href` attributes to point to your booking form or calendar link.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 📄 License

© 2025 GrowUMedia

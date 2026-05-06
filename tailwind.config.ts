import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#f3d340',
          'yellow-hover': '#d4b835',
          'yellow-muted': 'rgba(243,211,64,0.12)',
          'yellow-border': 'rgba(243,211,64,0.3)',
        },
        dark: {
          bg: '#12131A',
          card: '#1A1D2E',
          'card-2': '#1E2235',
          border: '#2A2D40',
        },
        text: {
          white: '#FFFFFF',
          muted: '#9A9DB0',
          dim: '#4A4D60',
          label: '#9A9DB0',
        },
      },
      fontFamily: {
        'inter': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'manrope': ['var(--font-manrope)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

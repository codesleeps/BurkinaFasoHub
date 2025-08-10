import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        burkina: {
          red: '#EF3340',
          green: '#009739',
          gold: '#FCD116',
          dark: '#111111',
          light: '#ffffff',
        },
      },
    },
  },
  plugins: [],
} satisfies Config

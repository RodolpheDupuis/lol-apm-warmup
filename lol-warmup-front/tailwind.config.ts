import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/client/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        signBackground: "rgba(16, 49, 82, 0.32)",
        ripple: "rgba(163, 131, 41, 0.8)"
      },
      boxShadow: {
        'nav': '0px 11px 15px -10px rgba(125,125,125,0.15)',
        'sign': '0px 10px 10px 0px rgba(0, 0, 0, 0.25)'
      },
      keyframes: {
        ripple: {
            '0%': { transform: 'translate(-50%, -50%) scale(0)', opacity: '0.4' },
            '100%': { transform: 'translate(-50%, -50%) scale(2)', opacity: '0' },
        },
    },
    animation: {
        ripple: 'ripple 1s ease-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;

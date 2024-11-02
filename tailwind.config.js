/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ["./src/**/*.{html,js}"],
  ],
  darkMode: 'class', // Enables class-based dark mode
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      sm: '640px',  // Small screens and up
      md: '768px',  // Medium screens and up
      lg: '1024px', // Large screens and up
      xl: '1280px', // Extra large screens and up
      '2xl': '1536px', // 2XL screens and up
      // You can add custom breakpoints here
      '3xl': '1800px', // Example custom breakpoint
    },
  },
  plugins: [],
};

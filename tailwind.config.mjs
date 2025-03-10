/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        sm: "640px",   // Small devices (phones)
        md: "768px",   // Medium devices (tablets)
        lg: "1024px",  // Large devices (laptops)
        xl: "1280px",  // Extra large devices (desktops)
        "2xl": "1536px", // Extra extra large devices (large desktops)
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
    },
  },
  plugins: [],
};

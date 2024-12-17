/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e7f8ef", // Very light green
          100: "#c3edd9", // Light green
          200: "#98e0bf", // Lighter green
          300: "#6cd3a5", // Green with less saturation
          400: "#3fc78b", // Brighter green
          500: "#04944F", // Default green
          600: "#038840", // Slightly darker green
          700: "#027333", // Dark green
          800: "#015d28", // Very dark green
          900: "#00471e", // Deep green
          default: "#04944F",
        },

        gray: {
          50: "#f9f9f9",
          100: "#f2f2f2",
          200: "#e6e6e6",
          300: "#d9d9d9",
          400: "#bdbdbd",
          500: "#808080",
          600: "#666666",
          700: "#4d4d4d",
          800: "#333333",
          900: "#1F2122",
        },
      },
    },
  },
  plugins: [],
};

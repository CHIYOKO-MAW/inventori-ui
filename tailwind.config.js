/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        surface: "#f8fafc",
        panel: "#ffffff",
        border: "#e5e7eb",
        muted: "#64748b",

        darkSurface: "#020617",
        darkPanel: "#020617",
        darkBorder: "#1e293b",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
}







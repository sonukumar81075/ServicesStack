// tailwind.config.js

module.exports = {
    content: ["./*.html"],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: "#1e40af",   // project yellow
            light: "#60a5fa",
            dark: "#1e3a8a",
          },
          secondary: {
            DEFAULT: "#E11D48", // red CTA
          },
          background: {
            DEFAULT: "#F8FAFC",
          },
          surface: {
            DEFAULT: "#FFFFFF",
          },
  
          text: {
            primary: "#0F172A",
            secondary: "#64748B",
          },
        },
  
        boxShadow: {
          card: "0 10px 25px rgba(0,0,0,0.05)",
        },
  
        borderRadius: {
          xl: "12px",
        },
  
        fontFamily: {
          sans: ["Inter", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
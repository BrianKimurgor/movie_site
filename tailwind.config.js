/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "gray-500": "#6b7280",
        "gray-900": "#111827",
        "gray-400": "#9ca3af",
        whitesmoke: "rgba(243, 244, 246, 0.5)",
        "rose-700": "#be123c",
        black: "#000",
        "gray-300": "#d1d5db",
      },
      spacing: {},
      fontFamily: {
        "dm-sans": "'DM Sans'",
      },
    },
    fontSize: {
      lg: "18px",
      xs: "12px",
      base: "16px",
      sm: "14px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

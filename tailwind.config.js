/** @type {import(tailwindcss).Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#060816",
        slateglass: "rgba(148, 163, 184, 0.08)"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(56, 189, 248, 0.3), 0 16px 45px rgba(15, 23, 42, 0.5)",
        card: "0 20px 45px rgba(2, 6, 23, 0.5)"
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" }
        },
        ping: {
          "75%, 100%": { transform: "scale(2)", opacity: "0" }
        }
      },
      animation: {
        "gradient-slow": "gradient-shift 18s ease infinite",
        floaty: "floaty 7s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      }
    }
  },
  plugins: []
};

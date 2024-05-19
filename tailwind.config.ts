import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./__src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "24px",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-text-rendering"),
    require("@tailwindcss/forms"),
  ],
};

export default config;

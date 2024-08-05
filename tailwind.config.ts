import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'flamante': ['flamante-medium']
      },
      colors: {
        'white-bg': '#F1F1F1',
        'red': '#E82329',
        'mid-red': '#AE1F24',
        'dark-red': '#901D21',
        'gray': '#9D9D9D',
        'mid-gray': '#8B95A2',
        'dark-gray': '#333333',
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      atlys: {
        bg: '#131319',
        'bg-2': '#27292d',
        'gray-1': '#969696',
        'gray-2': '#191920',
        blue: '#4A96FF',
        'text-muted-1': '#C5C7CA',
        'text-muted-2': '#7F8084',
        text: '#ffff',
        border: '#35373B',
      },
    },
  },
  plugins: [],
};
export default config;

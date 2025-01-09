/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jersey: ['var(--font-jersey)', 'sans-serif'],
        sixtyfour: ['var(--font-sixtyfour)', 'sans-serif'],
        inconsolata: ['var(--font-inconsolata)', 'monospace'],
      },
    },
  },
  daisyui: {
    themes: ["corporate"],
  },
  plugins: [
    require('daisyui'),
  ],
};

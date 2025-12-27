/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './packages/ui/src/components/**/*.{js,jsx,ts,tsx}', 
    './apps/web/**/*.{mdx,jsx,ts,tsx}', 
    './apps/site/**/*.{mdx,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

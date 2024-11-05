/** @type {import('tailwindcss').Config} */

const TOAST_TYPES = ['success', 'error', 'info', 'warning'];
const POST_REACTIONS = ['like', 'love', 'haha', 'wow', 'sad', 'angry'];

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: ['winter', 'night'],
    darkTheme: 'night',
  },
  safelist: [
    ...TOAST_TYPES.map((type) => `alert-${type || 'info'}`),
    ...POST_REACTIONS.map((type) => `reaction-${type}`),
    ...POST_REACTIONS.map((type) => `like-btn-${type}`),
  ],
};

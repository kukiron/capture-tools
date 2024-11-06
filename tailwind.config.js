/** @type {import('tailwindcss').Config} */

const TOAST_TYPES = ['success', 'error', 'info', 'warning'];
const POST_REACTIONS = ['like', 'love', 'haha', 'wow', 'sad', 'angry'];
const TOOLTIP_POSITIONS = ['top', 'right', 'bottom', 'left'];

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: ['night', 'winter'],
    // darkTheme: 'night',
  },
  safelist: [
    ...TOAST_TYPES.map((type) => `alert-${type || 'info'}`),
    ...POST_REACTIONS.map(
      (reaction) => `reaction-${reaction} like-btn-${reaction}`
    ),
    ...TOOLTIP_POSITIONS.map(
      (position) => `tooltip-${position} lg:tooltip-${position}`
    ),
  ],
};

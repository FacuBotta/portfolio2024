/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Tilt Neon"'],
      },
      colors: {
        "primary-yellow": "#fff100",
        "primary-cyan": "#07bccc",
        "primary-magenta": "#e601c0",
      },
    },
  },
};

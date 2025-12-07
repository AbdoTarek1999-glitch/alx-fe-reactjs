// /e/alx-fe-reactjs/recipe-sharing-platform/tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // المسار المفقود الذي يطلبه الفحص:
    "./public/index.html", 
    // المسار القديم، ربما لم يعد ضروريًا إذا كان ملفك في public
    // "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

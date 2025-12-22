/** @type {import('tailwindcss').Config} */
export default {
    content: [
      // This is the crucial part that tells Tailwind where your React components are
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        // You can add your custom fonts here (like the Patrick Hand/Varela Round)
        fontFamily: {
          sans: [
            "Patrick Hand", // Primary font choice
            "Varela Round", // Secondary font choice
            'sans-serif'    // Fallback
          ],
          'custom': [
            "\"Patrick Hand\""
          ]
        },
      },
    },
    plugins: [],
  }
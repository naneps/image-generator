/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Aquire", "sans-serif"],
      },
      // maxHeight: {
      //   "max-h-200": {
      //     "max-height": "200px"
      //   },
      // },
      // minHeight: {
      //   "min-h-50": {
      //     "min-height": "50px"
      //   }
      // },
      // resize: {
      //   y: {
      //     0: {
      //       "resize": "vertical",
      //       "min-height": "0",
      //       "overflow-y": "hidden"
      //     }
      //   },
      //   x: {
      //     full: {
      //       "resize": "horizontal",
      //       "overflow-x": "hidden"
      //     }
      //   }
      // }

    },

  },
  plugins: [
    // fontawesome

  ],
}
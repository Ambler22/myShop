/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        orange: "hsl(26, 100%, 55%)",
        "orange-pale": "hsl(25, 100%, 94%)",
        "gray-blue": "hsl(220, 14%, 75%)",
        "dark-gray-blue": "hsl(219, 9%, 45%)",
        "light-gray-blue": "hsl(223, 64%, 98%)",
      },
    },
  },
  plugins: [],
};

// p {
//   color: hsl(220, 13%, 13%); /_ - Very vark blue _/
//   color: hsl(219, 9%, 45%); /_ - Dark grayish blue _/
//   color: hsl(220, 14%, 75%); /_ - Grayish blue _/
//   color: hsl(223, 64%, 98%); /_ - Light grayish blue _/
//   color: hsl(0, 0%, 100%); /_ - White _/
//   color: hsl( 0, 0%, 0%); /_ - Black (with 75% opacity for lightbox background) _/
// }

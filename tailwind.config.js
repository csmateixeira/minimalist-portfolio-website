/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                cyan: "#5FB4A2",
                darkblue: "#203A4C",
                grayblue: "#33323D",
                lightgray: "#FAFAFA",
                gray: "#EAEAEB",
                red: "#F43030",
            }
        },
    },
    plugins: [],
}


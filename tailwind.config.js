/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                white: "#fff",
                black: "#121212",
                tone0: "#222035",
                tone1: "#373549",
                tone2: "#95939f",
                primary: "#827fe7",
                surface0: "#8b8b8b"
            }
        },
    },
    plugins: [],
}


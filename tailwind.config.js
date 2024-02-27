/** @type {import('tailwindcss').Config} */

module.exports = {
    mode: 'jit',
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    //purge: [
    //    "./public/**/*.html",
    //    "./src/**/*.{js,jsx,ts,tsx,}"
    //],
    theme: {
        // screens: {
        //     sm: "480px",
        //     md: "760px",
        //     lg: "970px",
        //     xl: "1440px",
        // },
        // colors: {
        //     black: "#000000",
        //     red: "#ff0000",
        //     yellow: "#ffff00",
        //     green: "#00ff00",
        //     teal: "#00ffff",
        //     blue: "#0000ff",
        //     magenta: "#ff00ff",
        //     white: "#ffffff",
        //     link: "#33aaff"
        // },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ],
};

//export default config;

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: [
//         "./app/**/*.{js,ts,jsx,tsx,mdx}",
//         "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//         "./components/**/*.{js,ts,jsx,tsx,mdx}",
// 
//         // Or if using `src` directory:
//         "./src/**/*.{js,ts,jsx,tsx,mdx}",
//     ],
//     theme: {
//         extend: {},
//     },
//     plugins: [],
// };


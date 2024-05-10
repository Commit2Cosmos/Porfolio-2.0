import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: 'class',
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'redish-xtra': '#dc4040',
                'orange-xtra': '#ef6b32',
                'whitish-bg': '#fbfbfb',
                'form-grey': '#757575',
                'inactive-button-grey': '#656565',
            },
            boxShadow: {
                'menu-shadow': '0.4rem 0.4rem 0 rgba(0, 0, 0, 1)',
                'form-shadow': '0.2rem 0.2rem 0 rgba(0, 0, 0, 1)',
            }
        },
    },
    plugins: [],
};
export default config;

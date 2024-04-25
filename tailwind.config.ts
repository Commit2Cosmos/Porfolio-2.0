import type { Config } from "tailwindcss";

const config: Config = {
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
                'menu-shadow': '0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.4)',
            }
        },
    },
    plugins: [],
};
export default config;

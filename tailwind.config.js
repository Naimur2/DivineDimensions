/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["FontleroyBrown", ...defaultTheme.fontFamily.sans],
                Queen: ["Queen", ...defaultTheme.fontFamily.sans],
                Papyrus: ["Papyrus", ...defaultTheme.fontFamily.sans],
                FontleroyBrown: ["FontleroyBrown", ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                hero: "url('/src/assets/images/hero-bg.png')",
                nav: "url('/src/assets/svgs/nav-bg.svg')",
                explore: "url('/src/assets/svgs/explore-bg.svg')",
                frame1: "url('/src/assets/svgs/frame1.svg')",
                quoteStart: "url('/src/assets/svgs/quote-start.svg')",
                quoteEnd: "url('/src/assets/svgs/quote-end.svg')",
                copyrightLeft: "url('/src/assets/svgs/copyright-left.svg')",
                copyrightRight: "url('/src/assets/svgs/copyright-right.svg')",
                footerBg:"linear-gradient(180deg, #000000 0%, #1A1A1A 84.4%)",
                partnersFrame: "url('/src/assets/svgs/partners-frame.svg')",
                partnersRect: "url('src/assets/svgs/pr-left.svg')",
                partnersRectRight: "url('src/assets/svgs/pr-right.svg')",
                sideBorder: "url('/src/assets/svgs/side-border.svg')",
                socialMediaBg: "url('/src/assets/svgs/socialmedia-bg.svg')",
            },
            content: {
                empty: "''",
            },
        },
    },
    plugins: [require('tailwind-scrollbar-hide')],
};

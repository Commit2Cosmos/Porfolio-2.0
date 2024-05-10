import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google';

 
export const inter = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        template: "%s | Anton's Portfolio",
        default: "Anton's Portfolio",
      },
    description: "A portfolio website, built with NextJS and TailwindCSS",
    icons: {
        icon: '/ab-logo.svg',
    },
};

export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased bg-whitish-bg overflow-x-hidden overflow-visible select-none`}>
                {children}
            </body>
        </html>
    );
}

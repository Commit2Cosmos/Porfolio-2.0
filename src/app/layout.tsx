import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google';
import { Providers } from './providers'

 
const montserrat = Montserrat({ subsets: ['latin'], display: 'swap' });

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
        <html lang="en" suppressHydrationWarning className={montserrat.className}>
            <body className={`antialiased bg-light-primary dark:bg-dark-primary overflow-x-hidden overflow-visible select-none`}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}

import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        template: "%s | Anton's Portfolio",
        default: 'Landing Page',
      },
    description: "A portfolio website, built with NextJS and TailwindCSS",
};

export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
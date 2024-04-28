import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google';
import Navbar from "@/navigation/navbar";
import Contact from "@/contact/contact"
import Footer from "@/footer/footer"

 
export const inter = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        template: "%s | Anton's Portfolio",
        default: "Anton's Portfolio",
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
            <body className={`${inter.className} antialiased bg-whitish-bg overflow-x-hidden overflow-visible`}>
                <Navbar />
                {children}
                <Contact />
                <Footer />
            </body>
        </html>
    );
}

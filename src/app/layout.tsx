import type {Metadata, Viewport} from "next";
import {Public_Sans} from "next/font/google";
import {Header} from "@/components/header/Header";
import {Footer} from "@/components/footer/Footer";

import "./globals.css";

const publicSans = Public_Sans({
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Frontend Mentor | Minimalist Portfolio",
};

export const viewport: Viewport = {
    initialScale: 1,
    width: "device-width",
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${publicSans.className}`}>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
}

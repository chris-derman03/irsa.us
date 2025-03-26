import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./Navigation/NavBar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "IRSA",
    description:
        "Institute of Risk and Safety Analysis. Expert Witness. Expert Witnesses. Forensics. Forensic Science. Accident Reconstruction.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased carbon`}
            >
                <header className="fixed z-10 w-full h-[100px]">
                    <NavBar />
                </header>
                <main>{children}</main>
                <footer>Footer</footer>
            </body>
        </html>
    );
}

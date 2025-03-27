import type { Metadata } from "next";
import NavBar from "./Navigation/NavBar";
import "./globals.css";

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
            <body className="carbon">
                <header className="fixed z-10 w-full h-[100px]">
                    <NavBar />
                </header>
                <main>{children}</main>
                <footer>Footer</footer>
            </body>
        </html>
    );
}

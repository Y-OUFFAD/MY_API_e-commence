
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import MYHeader from "@/compments/Header"; 
import Footer from "@/compments/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-orange-200 p-1">
        <MYHeader />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
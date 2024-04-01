import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
  hideNavbar?: boolean; // New prop to control Navbar visibility
}

export interface LayoutProps {
  children?: React.ReactNode;
  params?: any;
  hideNavbar?: boolean; // Optional property to control Navbar visibility
}

export default function RootLayout({ children, hideNavbar }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          {!hideNavbar && <Navbar />}{" "}
          {/* Navbar will not render if hideNavbar is true */}
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

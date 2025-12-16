import type { Metadata } from "next";

import "./globals.css";

import Background from "./components/Background";
import Navbar from './components/Navbar'

export const metadata: Metadata = {
  title: "condev-ui",
  description: "condev-ui is a collection of components for React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Background />
        <div className="relative z-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}

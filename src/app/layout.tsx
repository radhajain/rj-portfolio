import "~/styles/globals.css";

import { Inter } from "next/font/google";

import Navbar from "~/_components/navbar";
import React from "react";
import App from "~/_components/app";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Radha's site",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <main className="h-full">
          <App>{children}</App>
        </main>
      </body>
    </html>
  );
}

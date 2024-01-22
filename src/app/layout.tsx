import "~/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Radha Jain",
  description: "Personal portfolio for Radha Jain, New York",
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
        <main className="h-full">{children}</main>
        <SpeedInsights />
      </body>
    </html>
  );
}

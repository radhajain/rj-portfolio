import "~/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Radha Jain</title>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="description"
          content="Personal portfolio for Radha Jain, a developer at Palantir in New York."
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.radhajain.com"></link>
        <meta name="robots" content="index, follow" />
      </head>
      <body className={`font-sans ${inter.variable}`}>
        <main className="h-full">{children}</main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

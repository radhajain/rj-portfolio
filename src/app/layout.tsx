import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Navbar from "~/_components/navbar";

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
        <main className="bg-custom-brown flex h-full justify-center font-serif text-white">
          <div className="container flex flex-col items-center md:max-w-6xl ">
            <div className="w-full p-10">
              <Navbar />
              <div className="mt-20">{children}</div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

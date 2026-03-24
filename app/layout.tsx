import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "sima's personal site",
  description: "a soft corner of the internet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
  style={{ backgroundColor: '#fdfcf9', color: '#1a1a1a' }}
  className="min-h-full flex flex-col"
>
        <div className="max-w-5xl mx-auto w-full px-6 py-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}

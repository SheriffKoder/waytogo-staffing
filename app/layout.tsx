import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import localFont from 'next/font/local'


const pier = localFont({
  src: [
    {
      path: './fonts/PiersonDemo.woff',
    },
  ],
  variable: '--font-pier'
})


export const metadata: Metadata = {
  title: "WayToGo Staffing",
  description: "Premium event staffing",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pier.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

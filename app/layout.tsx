import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import localFont from 'next/font/local'
import Navbar from "@/components/Navbar";
import ScrollContext from "@/components/BaseEffects/SmoothScrollContext"

const OggRegular = localFont({
  src: [
    {
      path: './fonts/Ogg-Regular-BF646c18fc465e5.ttf',
    },
  ],
  variable: '--font-ogg-reg'
})

const OggMed = localFont({
  src: [
    {
      path: './fonts/Ogg-Medium-BF646c18fc45bd0.ttf',
    },
  ],
  variable: '--font-ogg-med'
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
      <body className={`${OggRegular.variable} ${OggMed.variable}`}
      >

       <Navbar/>
        <ScrollContext>
        {children}
        </ScrollContext>

      </body>
    </html>
  );
}

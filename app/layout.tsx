import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import localFont from 'next/font/local'
import Navbar from "@/components/Navbar";
import ScrollContext from "@/components/BaseEffects/SmoothScrollContext"
import Footer from "@/components/Footer";

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
      <head>
        <link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet" />
        <script src="https://calendar.google.com/calendar/scheduling-button-script.js" async></script>
      </head>
      <body className={`${OggRegular.variable} ${OggMed.variable}`}
      >

      <header>
        <Navbar/>
      </header>
        <ScrollContext>
        {children}
        </ScrollContext>

      <footer className="h-[200px] relative flex-c-c">
        <Footer/>
      </footer>

      </body>
    </html>
  );
}

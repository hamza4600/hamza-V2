import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import localFont from "next/font/local";
import Footer from "@/components/footer";

const hankenGrotesk = Hanken_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-hanken-grotesk"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const satoshiVariable = localFont({
  src: [
    {
      path: "../fonts/satoshi/Satoshi-Variable.woff2",
      style: "normal",
    },
    {
      path: "../fonts/satoshi/Satoshi-Black.woff2",
      style: "black",
      weight: "900",
    },
    {
      path: "../fonts/satoshi/Satoshi-Bold.woff2",
      style: "bold",
      weight: "700",
    },
    {
      path: "../fonts/satoshi/Satoshi-Light.woff2",
      style: "light",
      weight: "300",
    },
    {
      path: "../fonts/satoshi/Satoshi-Medium.woff2",
      style: "medium",
      weight: "500",
    },
  ],
  variable: "--font-satoshi",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshiVariable.variable} ${hankenGrotesk.variable} font-sans`}>
        <main id="main" className="flex flex-nowrap font-satoshi overflow-visible flex-col items-center justify-start dark:bg-tertiary bg-[#ffffff]">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

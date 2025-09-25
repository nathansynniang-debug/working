import type { Metadata } from "next";
// 1. Import 'Image' and 'Link' from next
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CraftLink",
  description: "Discover authentic handloom crafts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="w-full bg-[#f5efe6] py-3 px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/Handloom logo.png"
              alt="Handloom Logo"
              // <Image> requires 'width' and 'height' or 'fill'
              width={32} // Equivalent to w-8 (32px)
              height={32} // Equivalent to h-8 (32px)
              className="object-contain" // Retained object-contain
              priority // Prioritize loading the logo
            />
            <span className="text-2xl font-extrabold tracking-wide text-[#3d2612] select-none">
              CraftLink
            </span>
          </div>
          <ul className="flex gap-8">
            <li>

              <Link
                href="/"
                className="text-xl font-bold text-[#2a180a] transition-transform duration-200 hover:scale-110 hover:text-[#7c4f2c] focus:outline-none"
              >
                Home
              </Link>
            </li>
            <li>

              <Link
                href="/about"
                className="text-xl font-bold text-[#2a180a] transition-transform duration-200 hover:scale-110 hover:text-[#7c4f2c] focus:outline-none"
              >
                About
              </Link>
            </li>
            <li>
              
              <Link
                href="/products"
                className="text-xl font-bold text-[#2a180a] transition-transform duration-200 hover:scale-110 hover:text-[#7c4f2c] focus:outline-none"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-xl font-bold text-[#2a180a] transition-transform duration-200 hover:scale-110 hover:text-[#7c4f2c] focus:outline-none"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="pt-8 px-4 max-w-4xl mx-auto">{children}</div>
      </body>
    </html>
  );
}

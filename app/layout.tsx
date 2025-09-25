import type { Metadata } from "next";
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
            <img
              src="/Handloom logo.png"
              alt="Handloom Logo"
              className="``w-8 h-8 object-contain"
            />
            <span className="text-2xl font-extrabold tracking-wide text-[#3d2612] select-none">CraftLink</span>
          </div>
          <ul className="flex gap-8">
            <li>
              <a
                href="/"
                className="text-xl font-bold text-[#2a180a] transition-transform duration-200 hover:scale-110 hover:text-[#7c4f2c] focus:outline-none"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-xl font-bold text-[#2a180a] transition-transform duration-200 hover:scale-110 hover:text-[#7c4f2c] focus:outline-none"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="text-xl font-bold text-[#2a180a] transition-transform duration-200 hover:scale-110 hover:text-[#7c4f2c] focus:outline-none"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-xl font-bold text-[#2a180a] transition-transform duration-200 hover:scale-110 hover:text-[#7c4f2c] focus:outline-none"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="pt-8 px-4 max-w-4xl mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
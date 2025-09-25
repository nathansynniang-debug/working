import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <div className="mb-6">
        <Image
          src="/Handloom logo.png"
          alt="Handloom Logo"
          width={80}
          height={80}
          className="mx-auto mb-2"
          priority
        />
        <h2 className="text-lg text-[#b77b4b] font-medium tracking-wide">
          Crafted with Love &amp; Tradition
        </h2>
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#7c4f2c] mb-4">
        Welcome to CraftLink
      </h1>
      <p className="text-lg md:text-xl text-[#7c4f2c]/80 mb-8 max-w-xl mx-auto">
        Discover authentic handloom textiles and crafts from Northeast India and South China. Each piece tells a story of heritage, artistry, and community.
      </p>
      <Link
        href="/products"
        className="inline-block bg-[#b77b4b] text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-[#7c4f2c] transition-colors"
      >
        Explore Products
      </Link>
    </main>
  );
}
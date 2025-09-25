import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Jainsem",
    image: "/jainsem.png",
    description: "Traditional Khasi attire, elegant and timeless.",
    link: "/jainsem.png",
    flag: "/khasiflag.png", // Add flag path
  },
  {
    name: "Jymphong",
    image: "/jymphong.png",
    description: "Traditional Khasi attire for males.",
    link: "/jymphong.png",
    flag: "/khasiflag.png", // Add flag path
  },
];

export default function ProductsPage() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-8 text-[#7c4f2c]">Our Handloom Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <Link
            key={product.name}
            href={product.link}
            className="block rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow bg-[#f5efe6] border border-[#e0d3c2]"
          >
            <div className="relative w-full h-64">
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-xl font-semibold text-[#7c4f2c]">{product.name}</h2>
                <Image
                  src={product.flag}
                  alt="Khasi Flag"
                  width={24}
                  height={16}
                  className="inline-block"
                />
              </div>
              <p className="text-[#b77b4b]">{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

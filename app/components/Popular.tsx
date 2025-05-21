"use client";

import Image from "next/image";

type Product = {
  name: string;
  image: string;
  price: string;
};

const popularProducts: Product[] = [
  {
    name: "Spiced Mint",
    image: "/images/mint.jpg", // update with your actual image names/paths
    price: "9.99$",
  },
  {
    name: "Sweet Strawberry",
    image: "/images/strawberry.jpg",
    price: "9.99$",
  },
  {
    name: "Cool Blueberries",
    image: "/images/blueberries.jpg",
    price: "9.99$",
  },
  {
    name: "Juicy Lemon",
    image: "/images/lemon.jpg",
    price: "9.99$",
  },
];

export default function PopularSection() {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-white">
      <h2 className="text-4xl font-medium text-[#0B254B] mb-2  hover:text-[#5BC08A] transition">
        Popular
      </h2>
      <p className="text-[#5E6E89] text-lg mb-12">
        Our top selling product that you may like
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl w-full justify-items-center">
        {popularProducts.map((product, idx) => (
          <div
            key={product.name + idx}
            className="bg-[#F7F8FA] p-6 rounded-2xl shadow-md flex flex-col items-center transition duration-200 hover:shadow-lg min-w-[200px]"
          >
            <div className="w-[96px] h-[120px] mb-4 relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: "contain" }}
                sizes="96px"
                priority={idx < 4}
              />
            </div>
            <div className="w-full flex flex-col items-center">
              <span className="text-[#1D293F] font-medium text-lg mb-2">
                {product.name}
              </span>
              <span className="text-[#3DC47E] font-semibold text-lg self-end">
                {product.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

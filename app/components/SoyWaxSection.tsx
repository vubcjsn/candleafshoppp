"use client";

import Image from "next/image";
import Link from "next/link";

export default function SoyWaxSection() {
  return (
    <section className="w-full flex justify-center bg-[#F7F8FA] py-16">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-0">
        {/* Text side */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-4xl font-medium text-[#1D252C] mb-2 leading-tight">
            Clean and
            <br />
            fragrant soy wax
          </h2>
          <p className="text-[#3DC47E] text-lg mb-6">
            Made for your home and for your wellness
          </p>
          <ul className="mb-8 space-y-3 text-base text-[#243046]">
            <li>
              <b className="font-medium">Eco-sustainable:</b>
              <span> All recyclable materials, 0% CO2 emissions</span>
            </li>
            <li>
              <b className="font-medium">Hypoallergenic:</b>
              <span> 100% natural, human friendly ingredients</span>
            </li>
            <li>
              <b className="font-medium">Handmade:</b>
              <span> All candles are craftly made with love.</span>
            </li>
            <li>
              <b className="font-medium">Long burning:</b>
              <span> No more waste. Created for last long.</span>
            </li>
          </ul>
          <Link href="/learn-more">
            <button className="bg-[#3DC47E] hover:bg-[#94a89e] text-white font-semibold px-8 py-2 rounded-md text-lg shadow transition">
              Learn more
            </button>
          </Link>
        </div>
        {/* Image side */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <div className="relative w-[540px] h-[377px]">
            <Image
              src="/pages/images/soy-candles.png"
              alt="Soy Candles"
              fill
              style={{ objectFit: "contain" }}
              priority
              sizes="540px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

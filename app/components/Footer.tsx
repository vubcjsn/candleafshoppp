"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#141414] py-8 px-4 sm:py-12">
      <div className="max-w-6xl mx-auto">
        <hr className="border-t border-[#FFFFFF] mb-6 sm:mb-8" />
        <div className="flex flex-col md:flex-row md:items-start md:space-x-20">
          {/* Logo and description */}
          <div className="flex-1 mb-6 md:mb-0">
            <div className="flex items-center mb-2">
              <Image
                src="/" // Put your white logo here
                alt="Candleaf logo"
                width={40}
                height={40}
                className="mr-3"
                priority
              />
              <span className="text-white text-xl font-semibold">
                Canalleaf
              </span>
            </div>
            <div className="text-[#E4E4E4] text-sm sm:text-base mt-2">
              Your natural candle made for your home and for your wellness.
            </div>
          </div>

          {/* Footer links */}
          <div className="flex-[2] grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <div className="text-[#3DC47E] mb-2 sm:mb-3 text-sm sm:text-base font-medium">
                Discovery
              </div>
              <ul className="space-y-1 sm:space-y-2 text-[#E4E4E4] text-xs sm:text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Most selled
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Most searched
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-[#3DC47E] mb-2 sm:mb-3 text-sm sm:text-base font-medium">
                About
              </div>
              <ul className="space-y-1 sm:space-y-2 text-[#E4E4E4] text-xs sm:text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Help
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Shipping
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1 mt-4 sm:mt-0">
              <div className="text-[#3DC47E] mb-2 sm:mb-3 text-sm sm:text-base font-medium">
                Info
              </div>
              <ul className="space-y-1 sm:space-y-2 text-[#E4E4E4] text-xs sm:text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Privacy Policies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

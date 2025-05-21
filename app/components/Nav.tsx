import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <nav className="flex items-center gap-x-10">
      <Link
        href="/catalog"
        className="text-gray-800 hover:text-[#5BC08A] transition"
      >
        Shop
      </Link>
      <Link
        href="/about"
        className="text-gray-800 hover:text-[#5BC08A] transition"
      >
        {" "}
        About
      </Link>
      <Link
        href="/catalog"
        className="text-gray-800 hover:text-[#5BC08A] transition"
      >
        Contact
      </Link>
    </nav>
  );
}

export default Nav;

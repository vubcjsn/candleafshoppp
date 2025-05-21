import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <nav className="flex items-center gap-x-8">
      <Link href="/catalog">Shop</Link>
      <Link href="/about">About</Link>
      <Link href="/catalog">Contact</Link>
    </nav>
  );
}

export default Nav;

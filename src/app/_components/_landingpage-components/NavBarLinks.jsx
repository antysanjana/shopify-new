"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
function NavBarLinks() {
  const pathname = usePathname();

  return (
    <>
      <Link
        aria-current="page"
        className={`nav-link ${pathname === "/" ? "underline" : ""}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`nav-link ${pathname === "/about" ? "underline" : ""}`}
        href="/about"
      >
        About
      </Link>
      <Link
        className={`nav-link ${pathname === "/reviews" ? "underline" : ""}`}
        href="/reviews"
      >
        Reviews
      </Link>
      <Link
        className={`nav-link ${pathname === "/pricing" ? "underline" : ""}`}
        href="/pricing"
      >
        Pricing
      </Link>
    </>
  );
}

export default NavBarLinks;

"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
function NavBarLinks() {
  // const pathname = usePathname();
  const pathname = "pathname";
  console.log("Navbar Links");

  return (
    <div className="flex flex-col py-4 md:flex md:flex-row md:gap-6">
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
        className={`nav-link ${pathname === "/reviwes" ? "underline" : ""}`}
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
    </div>
  );
}

export default NavBarLinks;

"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function NavBarLinks() {
  const router = useRouter();
  return (
    <div className="flex flex-col py-4 md:flex md:flex-row md:gap-6">
      <Link
        aria-current="page"
        className={`nav-link ${router.pathname === "/" ? "underline" : ""}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`nav-link ${
          router.pathname === "/about" ? "underline" : ""
        }`}
        href="/about"
      >
        About
      </Link>
      <Link
        className={`nav-link ${
          router.pathname === "/reviwes" ? "underline" : ""
        }`}
        href="/reviews"
      >
        Reviews
      </Link>
      <Link
        className={`nav-link ${
          router.pathname === "/pricing" ? "underline" : ""
        }`}
        href="/pricing"
      >
        Pricing
      </Link>
    </div>
  );
}

export default NavBarLinks;

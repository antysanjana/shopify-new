import React from "react";
import Link from "next/link";

function NavBarLinks() {
  return (
    <div className="flex flex-col py-4 md:flex md:flex-row md:gap-6">
      <Link aria-current="page" className="nav-link active" href="/">
        Home
      </Link>
      <Link className="nav-link" href="/about">
        About
      </Link>
      <Link className="nav-link" href="/reviews">
        Reviews
      </Link>
      <Link className="nav-link" href="/pricing">
        Pricing
      </Link>
    </div>
  );
}

export default NavBarLinks;

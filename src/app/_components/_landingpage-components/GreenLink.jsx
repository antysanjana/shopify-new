import React from "react";
import Link from "next/link";

function GreenLink() {
  return (
    <div>
      <div>
        <Link href={"/"} className="green-link">
          Get a Free Quote
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="18"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default GreenLink;

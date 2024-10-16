import React from "react";
import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="bg-primary">
      <div className="flex flex-col w-10/12 py-5 mx-auto md:flex md:flex-row-reverse md:justify-between md:items-center md:gap-3">
        <div className="w-full md:w-1/2">
          <Image
            src={"/heroImage.png"}
            alt="HeroImage"
            layout="responsive"
            width={600}
            height={500}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-center text-center mt-8 w-full md:w-1/2 md:text-left md:items-start">
          <h1 className="text-3xl md:text-[50px] md:leading-[60px] font-bold">
            Need a stunning and optimized web shop?
          </h1>
          <p className="custom-paragraph text-2xl leading-[35px] mt-6 mb-8">
            Get high sales with the help of our Shopify Experts, E-Commerce
            Consultants & Skilled Web Developers
          </p>
          <div className="">
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
      </div>
    </div>
  );
}

export default HeroSection;

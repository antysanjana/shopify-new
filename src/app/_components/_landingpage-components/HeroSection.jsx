import React from "react";
import Image from "next/image";
import Link from "next/link";
import GreenLink from "./GreenLink";

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
          <GreenLink/>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

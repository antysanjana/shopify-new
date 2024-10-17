import React from "react";
import Image from "next/image";

function AboutUsSection() {
  return (
    <div className="mt-8 md:flex md: justify-between">
      <div className="flex flex-col items-center mb-6 w-2/3 mx-auto text-center md:w-1/4 md:text-left">
        <div>
          <p className="font-bold">Bullzpot.com</p>
          <h1 className="text-[30px] font-bold">Mighty Web Services</h1>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-9 md:w-4/6">
        <div className="about-us-card">
          <div className="hidden md:block md:h-[80px] md:w-[2px] md:bg-[#69ba2c]"></div>
          <div className="md:flex md:flex-col md:items-center text-center md:text-left">
            <div className="flex items-center">
              <Image
                src={"/shopify-logo.webp"}
                alt="shopify logo"
                width={30}
                height={30}
              ></Image>
              <h1 className="text-[20px] font-bold ml-2">Shopify experts</h1>
            </div>
            <p>Shopify Experts since 2017</p>
          </div>
          <div className="about-us-line"></div>
        </div>
        <div className="about-us-card">
          <div className="hidden md:block md:h-[80px] md:w-[2px] md:bg-[#69ba2c]"></div>
          <div className="md:flex md:flex-col md:items-center text-center md:text-left">
            <div>
              <h1 className="text-[20px] font-bold">Dedicated team</h1>
              <p>
                In-house expert team dedicated to serving your specific needs.
              </p>
            </div>
          </div>
          <div className="about-us-line"></div>
        </div>
        <div className="about-us-card">
          <div className="hidden md:block md:h-[80px] md:w-[2px] md:bg-[#69ba2c]"></div>

          <div className="md:flex md:flex-col md:items-center text-center md:text-left">
            <div>
              <h1 className="text-[20px] font-bold">100+ Projects</h1>
              <p>web and app projects completed with various businesses</p>
            </div>
          </div>

          <div className="about-us-line"></div>
        </div>

        <div className="about-us-card">
          <div className="hidden md:block md:h-[80px] md:w-[2px] md:bg-[#69ba2c]"></div>
          <div className="md:flex md:flex-col md:items-center text-center md:text-left">
            <div>
              <h1 className="text-[20px] font-bold">Starting at $99</h1>
              <p>Top agency quality at freelance rates</p>
            </div>
          </div>
          <div className="about-us-line"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;

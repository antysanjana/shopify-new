import React from "react";
import Image from "next/image";

function AboutUsSection() {
  return (
    <div className="mt-8 md:flex md: justify-between">
      <div className="flex flex-col items-center mb-6 w-2/3 mx-auto md:w-1/5">
        <p className="font-bold">Bullzpot.com</p>
        <h1 className="text-[30px] font-bold text-center">
          Mighty Web Services
        </h1>
      </div>
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-9 md:w-4/6">
        <div className="about-us-card">
          <div className="flex gap-3 items-center">
            <Image
              src={"/shopify-logo.webp"}
              alt="shopify logo"
              width={30}
              height={30}
            ></Image>
            <h1 className="text-[20px] font-bold text-center">
              Shopify experts
            </h1>
          </div>
          <p>Shopify Experts since 2017</p>
          <div class="about-us-line"></div>
        </div>
        <div className="about-us-card">
          <div>
            <h1 className="text-[20px] font-bold text-center">
              Dedicated team
            </h1>
            <p className="text-center">
              In-house expert team dedicated to serving your specific needs.
            </p>
          </div>
          <div class="about-us-line"></div>
        </div>
        <div className="about-us-card">
          <div>
            <h1 className="text-[20px] font-bold text-center">100+ Projects</h1>
            <p className="text-center">
              web and app projects completed with various businesses
            </p>
          </div>
          <div class="about-us-line"></div>
        </div>

        <div className="about-us-card">
          <div>
            <h1 className="text-[20px] font-bold text-center">
              Starting at $99
            </h1>
            <p className="text-center">Top agency quality at freelance rates</p>
          </div>
          <div class="about-us-line"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;

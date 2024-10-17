import React from "react";
import Image from "next/image";

function AboutUs() {
  return (
    <div className="bg-primary">
      <div className="flex flex-col items-center md:flex md:flex-row-reverse max-w-screen-xl w-10/12 mx-auto">
        <div>
          <Image
            className="about-img"
            src={"/aboutImage.png"}
            alt=""
            width={563}
            height={563}
          ></Image>
        </div>
        <div className="md:w-1/2">
          <div class="text-center mt-8 md:mt-0 md:text-left">
            <h1 class="text-3xl md:text-[50px] font-bold color-primary leading-10 md:leading-[60px]">
              About Us
            </h1>
            <p class="font-normal text-2xl leading-[36px] mt-5 color-primary">
              Bullzpot, based in Estonia, offers premier on-demand web and app
              design and development services tailored for e-commerce merchants.
              Our dedication is to provide unparalleled service to our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

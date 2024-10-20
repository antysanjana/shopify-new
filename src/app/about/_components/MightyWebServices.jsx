import React from "react";
import Image from "next/image";

function MightyWebServices() {
  return (
    <div className="max-w-screen-xl mx-auto w-10/12">
      <div className="mt-6">
        <h2 class="text-[40px] font-bold color-primary mb-10 text-center">
          Mighty Web Services
        </h2>
        <div class="container">
          <div class=" md:w-[60%] border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg text-center md:text-left mb-4">
            <div class="flex justify-center md:justify-start ">
              <Image src="/about1.png" alt="" width={64} height={64}></Image>
            </div>
            <h1 class="text-3xl font-bold color-primary mt-5 mb-4">
              The Sky is the Limit
            </h1>
            <p class="text-[22px] font-medium color-primary">
              From minor website adjustments to crafting an entirely new site,
              we&apos;re here to address your needs. We eagerly welcome the
              opportunity to discuss your project specifications.
            </p>
          </div>
          <div class=" md:w-[40%] border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg text-center md:text-left mb-4">
            <div class="flex justify-center md:justify-start ">
              <Image src="/about2.png" alt="" width={64} height={64}></Image>
            </div>
            <h1 class="text-3xl font-bold color-primary mt-5  mb-4">
              Endless Fine-Tuning
            </h1>
            <p class="text-[22px] font-medium color-primary">
              We recognize that once we delve into the details, your initial
              vision might evolve. Rest assured, we&apos;re committed to
              perfecting your project, offering complimentary minor adjustments
              whenever needed.
            </p>
          </div>
        </div>
        <div class="container">
          <div class=" md:w-[40%] border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg text-center md:text-left mb-4">
            <div class="flex justify-center md:justify-start ">
              <Image src="/about3.png" alt="" width={64} height={64}></Image>
            </div>
            <h1 class="text-3xl font-bold color-primary mt-5 mb-4">
              Full Satisfaction Promise
            </h1>
            <p class="text-[22px] font-medium color-primary">
              Your contentment is our priority. If our work doesn&apos;t
              entirely meet your expectations, communicate your concerns.
              We&apos;re committed to refining until you&apos;re fully pleased.
            </p>
          </div>
          <div class=" md:w-[60%] border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg text-center md:text-left mb-4">
            <div class="flex justify-center md:justify-start ">
              <Image src="/about4.png" alt="" width={64} height={64}></Image>
            </div>
            <h1 class="text-3xl font-bold color-primary mt-5  mb-4">
              One-on-One with Your Developer
            </h1>
            <p class="text-[22px] font-medium color-primary">
              Engage directly with the dedicated web developer for all your
              needs. Bypass the layers—no juggling between account managers,
              project coordinators, or multiple contacts. Your direct line to
              the expertise ensures streamlined communication and efficient
              project execution.
            </p>
          </div>
        </div>
        <div class="container">
          <div class=" md:w-[60%] border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg text-center md:text-left mb-4">
            <div class="flex justify-center md:justify-start ">
              <Image
                src="/shopify-logo.webp"
                alt=""
                width={64}
                height={64}
              ></Image>
            </div>
            <h1 class="text-3xl font-bold color-primary mt-5 mb-4">
              Shopify Experts
            </h1>
            <p class="text-[22px] font-medium color-primary">
              We have a cool group of developers whose passion lie deeply with
              Shopify and Shopify Plus. We firmly believe these platforms are
              unparalleled in supporting small businesses, so much so that they
              are the exclusive platforms we endorse. This focus enables us to
              master every nuance, ensuring we provide you with the optimal
              solution.
            </p>
          </div>
          <div class=" md:w-[40%] border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg text-center md:text-left mb-4">
            <div class="flex justify-center md:justify-start ">
              <Image src="/about6.png" alt="" width={64} height={64}></Image>
            </div>
            <h1 class="text-3xl font-bold color-primary mt-5  mb-4">
              We do it for excellence
            </h1>
            <p class="text-[22px] font-medium color-primary">
              We refrain from any upselling tactics or steering you towards
              specific solutions for our gain. Your 100% approval and
              satisfaction are our utmost priority.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MightyWebServices;

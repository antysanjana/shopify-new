import React from "react";
import Image from "next/image";

function MightyWebServices() {
  return (
    <div className="max-w-screen-xl mx-auto w-10/12">
      <div className="mt-6">
        <h2 class="text-[40px] font-bold color-primary mb-10 text-center">
          Mighty Web Services
        </h2>
        <div className="columns-1 md:grid md:grid-cols-2 md:gap-3">
          <div className="card-style">
            <div className="about-card md:col-span-2">
              <Image src={"/about1.png"} alt="" width={64} height={64} />
              <h1 class="text-3xl font-bold color-primary mt-5 mb-4">
                The Sky is the Limit
              </h1>
              <p class="text-[22px]">
                From minor website adjustments to crafting an entirely new site,
                we&apos;re here to address your needs. We eagerly welcome the
                opportunity to discuss your project specifications.
              </p>
            </div>
          </div>
          <div className="card-style">
            <div className="about-card md:col-span-1">
              <Image src={"/about2.png"} alt="" width={64} height={64} />
              <h1 class="text-3xl font-bold color-primary mt-5  mb-4">
                Endless Fine-Tuning
              </h1>
              <p class="text-[22px]">
                We recognize that once we delve into the details, your initial
                vision might evolve. Rest assured, we&apos;re committed to
                perfecting your project, offering complimentary minor
                adjustments whenever needed.
              </p>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default MightyWebServices;

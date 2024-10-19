import React from "react";
import Image from "next/image";
import { Services } from "../../../../lib/Services";

function MightyWebServices() {
  return (
    <div className="max-w-screen-xl mx-auto w-10/12">
      <div className="mt-6">
        <h2 class="text-[40px] font-bold color-primary mb-10 text-center">
          Mighty Web Services
        </h2>
        <div className="flex flex-col md:grid md:grid-cols-2 md:justify-center gap-5">
          {Services.map((service, index) => (
            <div key={index} className="card-style">
              <div className="about-card">
                <Image src={service.src} alt="" width={64} height={64} />
                <h1 class="about-title">{service.title}</h1>
                <p class="text-[22px]">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MightyWebServices;

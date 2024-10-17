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
            <Image />
          </div>
          <div></div>
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

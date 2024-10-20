import React from "react";
import Image from "next/image";

function Review() {
  return (
    <div className="bg-primary">
      <div className="flex flex-col items-center md:flex md:flex-row-reverse max-w-screen-xl w-10/12 py-5 mx-auto">
        <div>
          <Image
            className="review-img"
            src={"/review.png"}
            alt=""
            width={959}
            height={762}
          ></Image>
        </div>
        <div className="md:w-1/2">
          <div class="text-center mt-8 md:mt-0 md:text-left">
            <h1 class="text-3xl md:text-[50px] font-bold leading-10 md:leading-[60px]">
              What people are saying
            </h1>
            <p class="text-2xl leading-[36px] mt-5">
              We love our customers. Read what they have to say about the
              experience working with Bullzpot for their Shopify website
              development needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;

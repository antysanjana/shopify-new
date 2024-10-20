"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

function Carousel() {
  return (
    <div className="bg-primary active:cursor-grab select-none">
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide className="swiper-slide">
          <Image src={"/ai.png"} alt="AI" width={1200} height={1200} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/e-com.png"} alt="AI" width={1200} height={1200} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/graphics.png"} alt="AI" width={1200} height={1200} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/seo.png"} alt="AI" width={1200} height={1200} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/ux.png"} alt="AI" width={1200} height={1200} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/shopify.png"} alt="AI" width={1200} height={1200} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/web.png"} alt="AI" width={1200} height={1200} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;

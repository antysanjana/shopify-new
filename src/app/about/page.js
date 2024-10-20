import React from "react";
import AboutUs from "./_components/AboutUs";
import CarouselWave from "../_components/_landingpage-components/CarouselWave";
import MightyWebServices from "./_components/MightyWebServices";
import Timeline from "./_components/Timeline";
import Heading from "./_components/Heading";
import Carousel from "../_components/_landingpage-components/Carousel";
import ReviewSection from "../_components/_landingpage-components/ReviewSection";

function page() {
  return (
    <div>
      <AboutUs />
      <CarouselWave />
      <MightyWebServices />
      <Timeline />
      <Heading />
      <Carousel />
      <ReviewSection />
    </div>
  );
}

export default page;

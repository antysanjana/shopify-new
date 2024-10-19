import React from "react";
import AboutUs from "./_components/AboutUs";
import CarouselWave from "../_components/_landingpage-components/CarouselWave";
import MightyWebServices from "./_components/MightyWebServices";
import Timeline from "./_components/Timeline";
import Heading from "./_components/Heading";
import Carousel from "../_components/_landingpage-components/Carousel";
import ReviewSection from "../_components/_landingpage-components/ReviewSection";
import FooterSVG from "../_components/_landingpage-components/FooterSVG";
import FooterSection from "../_components/_landingpage-components/FooterSection";

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
      <FooterSVG />
      <FooterSection />
    </div>
  );
}

export default page;

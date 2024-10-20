import React from "react";
import Review from "./_components/Review";
import CarouselWave from "../_components/_landingpage-components/CarouselWave";
import ReviewSection from "../_components/_landingpage-components/ReviewSection";
import FooterSVG from "../_components/_landingpage-components/FooterSVG";
import FooterSection from "../_components/_landingpage-components/FooterSection";
import AboutUsSection from "../_components/_landingpage-components/AboutUsSection";

function page() {
  return (
    <div>
      <Review />
      <CarouselWave />
      <ReviewSection />
      <AboutUsSection />
      <FooterSVG />
      <FooterSection />
    </div>
  );
}

export default page;

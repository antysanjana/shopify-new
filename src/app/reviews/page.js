import React from "react";
import Review from "./_components/Review";
import CarouselWave from "../_components/_landingpage-components/CarouselWave";
import ReviewSection from "../_components/_landingpage-components/ReviewSection";
import AboutUsSection from "../_components/_landingpage-components/AboutUsSection";

function page() {
  return (
    <div>
      <Review />
      <CarouselWave />
      <ReviewSection />
      <AboutUsSection />
    </div>
  );
}

export default page;

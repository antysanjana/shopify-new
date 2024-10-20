import React from "react";
import Pricing from "./_components/Pricing";
import PricingDetails from "./_components/PricingDetails";
import CarouselWave from "../_components/_landingpage-components/CarouselWave";
import ReviewSection from "../_components/_landingpage-components/ReviewSection";
import FAQ from "./_components/FAQ";

function page() {
  return (
    <div>
      <Pricing />
      <PricingDetails />
      <CarouselWave />
      <ReviewSection />
      <FAQ />
    </div>
  );
}

export default page;

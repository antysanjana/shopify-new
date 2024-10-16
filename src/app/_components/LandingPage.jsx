import React from "react";
import NavBar from "./_landingpage-components/NavBar";
import HeroSection from "./_landingpage-components/HeroSection";
import WhatWeOffer from "./_landingpage-components/WhatWeOffer";
import Carousel from "./_landingpage-components/Carousel";
import CarouselWave from "./_landingpage-components/CarouselWave";
import AboutUsSection from "./_landingpage-components/AboutUsSection";
import VideoSection from "./_landingpage-components/VideoSection";

function LandingPage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <WhatWeOffer />
      <Carousel />
      <CarouselWave />
      <AboutUsSection />
      <VideoSection />
    </div>
  );
}

export default LandingPage;

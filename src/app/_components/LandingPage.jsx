import React from "react";
import NavBar from "./_landingpage-components/NavBar";
import HeroSection from "./_landingpage-components/HeroSection";
import WhatWeOffer from "./_landingpage-components/WhatWeOffer";
import Carousel from "./_landingpage-components/Carousel";
import CarouselWave from "./_landingpage-components/CarouselWave";
import AboutUsSection from "./_landingpage-components/AboutUsSection";
import VideoSection from "./_landingpage-components/VideoSection";
import ReviewSection from "./_landingpage-components/ReviewSection";
import SvgWave from "./_landingpage-components/SVGWave";
import HowToStart from "./_landingpage-components/HowToStart";
import WebProjectServices from "./_landingpage-components/WebProjectsServices";
import TaskRequestComponent from "./_landingpage-components/TaskRequestComponent";
import FooterSVG from "./_landingpage-components/FooterSVG";
import FooterSection from "./_landingpage-components/FooterSection";

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
      <ReviewSection />
      <SvgWave />
      <HowToStart />
      <WebProjectServices />
      <TaskRequestComponent />
      <FooterSVG />
      <FooterSection />
    </div>
  );
}

export default LandingPage;

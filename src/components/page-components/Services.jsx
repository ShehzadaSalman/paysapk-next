import React from "react";
import HeroSectionInServices from "org/components/Services-page/HeroSectionInServices";
import CarouselServices from "org/components/Services-page/CarouselServices";
import TestimonialSection from "org/components/Services-page/TestimonialSection";

function Services() {
  return (
    <div>
      <HeroSectionInServices />
      <div className="mb-16">
        <CarouselServices />
      </div>
      <TestimonialSection />
      <div className="mt-12 md:mt-0">
        <img src="/assets/servicesPage/servicesGif.gif" alt="services" />
      </div>
    </div>
  );
}

export default Services;

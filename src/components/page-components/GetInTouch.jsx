import React from "react";
import HeroSection from "org/components/GetInTouch/HeroSection";
import EmailSection from "org/components/GetInTouch/EmailSection";
import FAQbanner from "org/components/GetInTouch/FAQbanner";
import FAQquestions from "org/components/GetInTouch/FAQquestions";

function GetInTouch() {
  return (
    <div>
      <HeroSection />
      <EmailSection />
      <FAQbanner />
      <FAQquestions />
    </div>
  );
}

export default GetInTouch;

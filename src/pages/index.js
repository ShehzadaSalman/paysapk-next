import { useState } from "react";
import Banner from "org/components/Banner";
import Navbar from "org/components/Navbar";
import BannerWithoutVideo from "org/components/BannerWithoutVideo";
import LogoSlider from "org/components/LogoSlider";
import AboutUsGrid from "org/components/AboutUsGrid";
import HomePageCarousel from "org/components/HomePageCarousel";
import PartnerSlider from "org/components/PartnersSlider";
import MapSection from "org/components/MapSection";
import MapPopup from "org/components/MapPopup";
import Footer from "org/components/Footer";

export default function Home() {
  const [mapPopupState, setMapPopupState] = useState(false);
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <div className="flex justify-center">
          <h1 className="text-white font-bold px-6 text-center  font-[manrope] text-[35px] my-12">
            OUR TRUSTED CLIENTS
          </h1>
        </div>
        <LogoSlider />
        <div className="flex justify-center">
          <h1 className="text-white font-bold font-[manrope] text-center px-6 text-[35px] my-12">
            ABOUT US
          </h1>
        </div>
        <AboutUsGrid />

        <BannerWithoutVideo
          title="EXCEPTIONAL BANKING SERVICES"
          description="With all the tools you need to track your transaction and even repeat payment as desired."
        />
        <HomePageCarousel />
        <div className="mt-[150px]">
          <BannerWithoutVideo title=" OUR TRUSTED PARTNERS" />
        </div>
        <PartnerSlider />
        <div className="mt-8">
          <MapSection handleMapClick={() => setMapPopupState(true)} />
        </div>

        <div
          className={`transition-opacity duration-200 ease-in-out ${
            mapPopupState ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <MapPopup
            isOpen={mapPopupState}
            backgroundImage={""}
            onClose={() => setMapPopupState(false)}
          ></MapPopup>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

// import logo from './logo.svg';
import { useState, Suspense, lazy } from "react";
import Navbar from "../Home/Navbar";
import Banner from "../Home/Banner";
import Button from "../Button";
import BannerWithoutVideo from "../BannerWithoutVideo";
import MapPopup from "../MapPopup";
const Footer = lazy(() => import("../Footer"));
const LogoSlider = lazy(() => import("../Home/LogoSlider"));
const PartnerSlider = lazy(() => import("../Home/PartnersSlider"));
const MapSection = lazy(() => import("../Home/MapSection"));

const AboutUsGrid = lazy(() => import("../Home/AboutUsGrid"));
const HomePageCarousel = lazy(() => import("../Home/HomePageCarousel"));

function App() {
  const [mapPopupState, setMapPopupState] = useState(false);

  return (
    <div>
      <Navbar />
      <Banner />
      <div className="flex justify-center">
        <h1 className="text-white font-bold px-6 text-center  font-[manrope] text-[35px] my-12">
          OUR TRUSTED CLIENTS
        </h1>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <LogoSlider />
      </Suspense>
      <div className="flex justify-center">
        <h1 className="text-white font-bold font-[manrope] text-center px-6 text-[35px] my-12">
          ABOUT US
        </h1>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <AboutUsGrid />
      </Suspense>

      <BannerWithoutVideo
        title="EXCEPTIONAL BANKING SERVICES"
        description="With all the tools you need to track your transaction and even repeat payment as desired."
      />
      <Suspense fallback={<div>Loading...</div>}>
        <HomePageCarousel />
      </Suspense>
      <div className="mt-[150px]">
        <BannerWithoutVideo title=" OUR TRUSTED PARTNERS" />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <PartnerSlider />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="mt-8">
          <MapSection handleMapClick={() => setMapPopupState(true)} />
        </div>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
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
    </div>
  );
}

export default App;

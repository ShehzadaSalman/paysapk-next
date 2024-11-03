import React, { useState } from "react";
import ChevronButton from "org/components/ChevronButton";
import MapPopup from "org/components/MapPopup";

function MapSection({ handleMapClick }) {
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <section className="relative max-w-screen-lg px-6 mx-auto md:px-0 ">
        <div className="md:pt-12">
          <img
            className="hidden md:block h-[424px] w-[384px] rounded-[20px] "
            src="/assets/yellow-bg.png"
            alt="background poster"
          />
        </div>
        <div
          className="md:absolute  w-[100%] lg:w-[656px] h-[363px] bg-[#3F94C44D] rounded-[20px] top-0  
                md:left-[250px] z-20"
        >
          <div className="pl-[20px]  md:pl-[52px] pt-12 md:pt-[70px]  h-full md:h-auto rounded-[20px] relative backdrop-blur-md md:w-[60%]">
            <div>
              <h1 className="font-bold text-white  text-[28px] md:text-[40px] font-[manrope] ">
                550+ Customers
              </h1>
            </div>
            <div className="mt-[20px]">
              <p className="text-white text-[16px] font-semibold font-[raleway]">
                A Fintech Company Providing Multiple
                <br />
                Services Throughout Pakistan for All
                <br />
                Your Financial Needs.
              </p>
            </div>
            <div>
              <button
                style={{ background: "rgba(24, 92, 131, 0.5)" }}
                className="mt-[45px] items-center text-white flex rounded px-4 py-1 transition-transform transform hover:-translate-y-1"
              >
                Discover more
                <span className="ml-4">
                  <ChevronButton isSmall isPrimary={true} />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute max-w-[100%] w-[350px] md:w-[650px]  top-[50px]   md:left-[400px]">
          <span onClick={handleMapClick} className="cursor-pointer">
            <img src="/assets/map-pak.png" alt="HomePage Map" />
          </span>
        </div>
      </section>
    </>
  );
}

export default MapSection;

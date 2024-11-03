import React, { useState, useEffect, useRef } from "react";
import ChevronButton from "org/components/ChevronButton";
import Image from "next/image";

const CarouselServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const slides = [
    {
      title: "365 DAYS SETTLEMENT",
      description:
        "PaySa offers its merchant partners quick and efficient payment settlements, ensuring that funds from credit card and debit card transactions are deposited into their designated accounts within 24 hours. This speedy settlement process improves cash flow for businesses, enabling them to meet their financial obligations and invest in growth opportunities without delay.",
      imageSrc: "/assets/services-carousel-icons/icon-1.png",
      backgroundImage:
        "url('https://i.imghippo.com/files/L73ix1729337654.png')",
    },
    {
      title: "CUSTOMISED MIS",
      description:
        "PaySa provides merchants with comprehensive business reports and analytics. These detailed reports offer valuable insights into their operations, sales trends, customer behavior, and other crucial metrics. Armed with this data, merchants can make informed decisions on various aspects of their business. This data-driven approach empowers merchants to optimize their business operations and maximize profitability.",
      imageSrc: "/assets/services-carousel-icons/icon-2.png",
      backgroundImage:
        "url('https://i.imghippo.com/files/m8tB21729336452.png')",
    },
    {
      title: "SECURE VPN TUNNEL",
      description:
        "To ensure highest levels of security PaySa employs a state of the art VPN tunnel setting unprecedented standards for security during your payment process. This VPN tunnel acts as a secure conduit for transaction data, encrypting and safeguarding sensitive information. This cutting-edge security measure protects customers' payment data from potential cyber threats and fraudulent activities, enhancing trust and confidence in the payment process for both merchants and their customers.",
      imageSrc: "/assets/services-carousel-icons/icon-3.png",
      backgroundImage:
        "url('https://i.imghippo.com/files/SXrFS1729337778.png')",
    },
    {
      title: "24/7 Customer Support",
      description:
        "PaySa understands the importance of prompt and efficient customer support. Therefore we offer round-the-clock customer support to address any queries or concerns merchants may have. Whether it is technical assistance with the POS terminal, clarifying billing-related questions, or resolving any other issues, the dedicated support team at PaySa is available at a moment's notice. This commitment to excellent customer service fosters strong relationships with merchants and instills confidence in the reliability of PaySa's services.",
      imageSrc: "/assets/services-carousel-icons/icon-2.png",
      backgroundImage:
        "url('https://i.imghippo.com/files/8AE6F1729337968.png')",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${
        currentIndex * (100 / slides.length)
      }%)`;
    }
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        ref={carouselRef}
        style={{ width: `${slides.length * 100}%` }}
      >
        {slides.map((slide, index) => (
          <div key={index} style={{ width: `${100 / slides.length}%` }}>
            <div
              style={{ backgroundImage: slide.backgroundImage }}
              className={`flex md:pb-8 justify-center h-[100vh] w-full bg-cover bg-no-repeat bg-center`}
            >
              <div className="flex flex-col text-white justify-end items-center ">
                <Image
                  className="h-[150px] w-[150px] md:h-[227px] md:w-[227px]"
                  src={slide.imageSrc}
                  alt="services"
                  width={227}
                  height={227}
                />
                <div className="font-bold text-[28px] md:text-[35px] font-[manrope] mt-[57px] px-6 md:px-0">
                  <h1>{slide.title}</h1>
                </div>
                <p className="max-w-[650px] px-6 md:px-0 pb-8 md:pb-[65px] font-[raleway] font-semibold text-center mt-[32px] pb-4">
                  {slide.description}
                </p>
                <div className="flex space-x-24">
                  <span onClick={handlePrev} className="rotate-180">
                    <ChevronButton isPrimary={index === 0} />
                  </span>
                  <span onClick={handleNext} className="cursor-pointer">
                    <ChevronButton isPrimary={index === 0} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselServices;

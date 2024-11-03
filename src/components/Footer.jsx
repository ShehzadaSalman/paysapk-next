import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="">
      <div className="flex  justify-center my-[70px]">
        <img
          src={"/footer-logo.svg"}
          alt="icon"
          className="h-[100px] md:h-auto "
        />
      </div>
      <div>
        <div
          style={{
            height: "0.5px",
            background: "#17557A",
          }}
          className="mb-1"
        ></div>
        <div
          style={{
            height: "0.5px",
            background: "#17557A",
          }}
        ></div>
      </div>

      <div className="flex flex-wrap items-center justify-center max-w-screen-xl px-2 py-8 mx-auto text-white bg-black md:justify-between">
        {/* Navigation Links */}

        <div className="flex items-center mb-2 space-x-4 text-lg md:mb-0">
          <Link href="/about-us" className="cursor-pointer">
            About Us
          </Link>
          <span className="text-yellow-500">•</span>
          <Link href="/services" className="cursor-pointer">
            Services
          </Link>
          <span className="text-yellow-500">•</span>
          <Link href="/get-in-touch" className="cursor-pointer">
            Get in Touch
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="items-center hidden space-x-4 text-2xl md:flex">
          <Link href={"https://www.facebook.com/paysa.technologies/"}>
            <img
              src={"social-icons/facebook.svg"}
              alt="icon"
              className="mx-1"
            />
          </Link>
          <Link href={"https://pk.linkedin.com/company/paysatechnologies"}>
            <img src={"social-icons/linkedin.svg"} alt="icon" className="" />
          </Link>
          <Link href={"https://www.instagram.com/paysa_tech/"}>
            <img src={"social-icons/instagram.png"} alt="icon" className="" />
          </Link>
          <Link href={"https://twitter.com/PaySa_pk"}>
            <img src={"social-icons/twitter.svg"} alt="icon" className="" />
          </Link>
          <Link href={"https://www.tiktok.com/@paysa_tech"}>
            <img src={"social-icons/tik_tok.svg"} alt="icon" className="" />
          </Link>
          <Link href={"https://www.threads.net/@paysa_tech"}>
            <img src={"social-icons/threads.svg"} alt="icon" className="" />
          </Link>
        </div>

        {/* Location Links */}
        <div className="flex items-center mb-4 space-x-4 text-lg md:mb-0">
          <Link href={"https://maps.app.goo.gl/nrtJaHVt3Mk5DKJm6"}>
            <span className="cursor-pointer">Islamabad</span>
          </Link>
          <span className="text-yellow-500">•</span>
          <span className="cursor-pointer">Karachi</span>
          <span className="text-yellow-500">•</span>
          <Link href={"https://maps.app.goo.gl/GsqFuhvU1XSAfBUV6"}>
            <span className="cursor-pointer">Lahore</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4 text-2xl md:hidden">
          <Link href={"https://www.facebook.com/paysa.technologies/"}>
            <img
              src={"social-icons/facebook.svg"}
              alt="icon"
              className="mx-1"
            />
          </Link>
          <Link href={"https://pk.linkedin.com/company/paysatechnologies"}>
            {" "}
            <img src={"social-icons/linkedin.svg"} alt="icon" className="" />
          </Link>{" "}
          <Link href={"https://www.instagram.com/paysa_tech/"}>
            <img src={"social-icons/instagram.png"} alt="icon" className="" />
          </Link>
          <Link href={"https://twitter.com/PaySa_pk"}>
            <img src={"social-icons/twitter.svg"} alt="icon" className="" />
          </Link>
          <Link href={"https://www.tiktok.com/@paysa_tech"}>
            <img src={"social-icons/tik_tok.svg"} alt="icon" className="" />
          </Link>
          <Link href={"https://www.threads.net/@paysa_tech"}>
            <img src={"social-icons/threads.svg"} alt="icon" className="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

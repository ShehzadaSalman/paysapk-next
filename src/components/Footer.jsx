import React from "react";
import FooterLogo from "../images/footer-logo.svg";
import FbIcon from "../images/social-icons/facebook.svg";
import LinkedinIcon from "../images/social-icons/linkedin.svg";
import InstaIcon from "../images/social-icons/instagram.png";
import TwitterIcon from "../images/social-icons/twitter.svg";
import TikTokIcon from "../images/social-icons/tik_tok.svg";
import ThreadIcon from "../images/social-icons/threads.svg";
import { Link } from "next/link";

const Footer = () => {
  return (
    <div className="">
      <div className="flex  justify-center my-[70px]">
        <img src={FooterLogo} alt="icon" className="h-[100px] md:h-auto " />
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
          <img src={FbIcon} alt="icon" className="mx-1" />
          <img src={LinkedinIcon} alt="icon" className="" />
          <img src={InstaIcon} alt="icon" className="" />
          <img src={TwitterIcon} alt="icon" className="" />
          <img src={TikTokIcon} alt="icon" className="" />
          <img src={ThreadIcon} alt="icon" className="" />
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
            <img src={FbIcon} alt="icon" className="mx-1" />
          </Link>
          <Link href={"https://pk.linkedin.com/company/paysatechnologies"}>
            {" "}
            <img src={LinkedinIcon} alt="icon" className="" />
          </Link>{" "}
          <Link href={"https://www.instagram.com/paysa_tech/"}>
            <img src={InstaIcon} alt="icon" className="" />
          </Link>
          <Link href={"https://twitter.com/PaySa_pk"}>
            <img src={TwitterIcon} alt="icon" className="" />
          </Link>
          <Link href={"https://www.tiktok.com/@paysa_tech"}>
            <img src={TikTokIcon} alt="icon" className="" />
          </Link>
          <Link href={"https://www.threads.net/@paysa_tech"}>
            <img src={ThreadIcon} alt="icon" className="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

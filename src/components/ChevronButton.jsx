import React from "react";

function ChevronButton({ isPrimary, isSmall, onClick }) {
  return (
    <span
      className={`${
        isSmall ? "h-[22px] w-[22px]" : "h-[29px] w-[29px]"
      }  cursor-pointer  flex justify-center items-center  rounded-md ${
        isPrimary ? "bg-[rgba(24,92,131,0.5)]" : "bg-[rgba(254,210,28,0.2)]"
      } `}
      onClick={onClick}
    >
      <img
        src={"/button-chevron-right.svg"}
        className={`${isSmall ? "h-[12px]" : ""} `}
        alt="chevron-right"
      />
    </span>
  );
}

export default ChevronButton;

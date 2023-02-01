import React from "react";

export default function AboutInterestsText({title, text}) {
  return (
    <>
      <div className="font-sans font-semibold text-small sm:text-xl text-[#27272A] mb-1 sm:mb-2">
        {title}
      </div>
      <div className="font-sans font-normal text-small sm:text-xl text-[#27272A]">{text}</div>
    </>
  );
}

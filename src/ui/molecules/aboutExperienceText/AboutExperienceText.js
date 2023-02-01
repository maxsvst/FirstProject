import React from "react";

export default function AboutExperienceText({title, text}) {
  return (
    <>
      <div className="font-sans font-semibold text-small sm:text-xl text-[#27272A] mb-2">
        {title}
      </div>
      <div className="font-sans font-normal text-small sm:text-xl text-[#27272A] mb-3 sm:mb-8">{text}</div>
    </>
  );
}

import React from "react";
import AboutExperienceText from "../aboutExperienceText/AboutExperienceText";

export default function AboutWork({ color, year, title, text }) {
  return (
    <div className={`mb-3 sm:mb-6 w-[290px] sm:w-[504px] border-b borber-[#E5E7EB] ${color}`}>
      <span className="float-left w-[120px] sm:w-[152px] mr-1 sm:mr-4 font-sans font-normal text-small sm:text-xl text-[#27272A]">
        {year}
      </span>
      <div className="flex flex-col">
        <AboutExperienceText title={title} text={text} />
      </div>
    </div>
  );
}

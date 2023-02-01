import React from "react";
import AboutInterestsText from "../aboutExperienceText/AboutInterestsText";

export default function AboutInterests({ icon, title, text }) {
  return (
    <div className="flex items-center mb-6 sm:mb-12">
      <div className="flex items-center justify-center h-11 w-11 sm:h-[60px] sm:w-[60px] mr-2 sm:mr-4 rounded-full border-2 border-[#7E3AF2]">
        <div className="w-[17.6px] h-[17.6px] sm:w-6 sm:h-6">{icon}</div>
      </div>
      <div>
        <AboutInterestsText title={title} text={text} />
      </div>
    </div>
  );
}

import React from "react";
import BodyText from "../../atoms/bodyText/BodyText";
import Button from "../../molecules/button/Button";
import Descritpion from "../../molecules/Description/Descritpion";
import MainPageNavbar from "../header/MainPageNavbar";
import mainBackground from "../../../icons/main/mainBackground.svg";
import mainPhoto from "../../../icons/main/mainPhoto.svg";

export default function MainPage() {
  return (
    <div>
      <MainPageNavbar />
      <div id="main" className="flex flex-wrap sm:flex-nowrap md:flex-no">
        <div className="inline-block pl-[15px] sm:pl-[39px] md:pl-[85px] pt-[27px] md:pt-[162px]">
          <div className="mb-[38px] md:mb-[92px]">
            <div className="text-[#27272A] font-sans font-bold text-2xl sm:text-8xl mb-1">
              Hey, I`m Nick
            </div>
            <BodyText title="Frontend developer" />
          </div>
          <Descritpion
            title="Help you to create high-quality digital products that your clients will love and let your business thrive"
            width="w-[290px]"
          />
          <Button
            title="Get in touch"
            marginTop="md:mt-[60px]"
            iconMargin="15px"
          />
        </div>
        <div className="w-full md:max-w-[990px] md:w-full lg:max-h-[800px] ml-10 sm:ml-0 mt-0 lg:mt-20 sm:right-0 max-w-full relative overflow-hidden">
          <img
            className="absolute w-full scale-[150%] sm:scale-[180%] md:scale-[120%] bottom-0 right-16 sm:right-16"
            src={mainPhoto}
            alt={mainPhoto}
          />
          <img
            className="float-right w-full h-full min-w-[338px] sm:min-w-[320px]"
            src={mainBackground}
            alt={mainBackground}
          />
        </div>
      </div>
    </div>
  );
}

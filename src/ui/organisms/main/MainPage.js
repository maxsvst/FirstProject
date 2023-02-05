import React from "react";
import BodyText from "../../atoms/bodyText/BodyText";
import Button from "../../molecules/button/Button";
import mainBackground from "../../../icons/main/mainBackground.svg";
import mainPhoto from "../../../icons/main/mainPhoto.svg";
import PurpleStick from "../../atoms/purpleStick/PurpleStick";

export default function MainPage() {
  return (
    <div id="main" className="sm:relative flex flex-wrap sm:flex-nowrap">
      <div className="ml-[15px] sm:ml-[39px] lg:ml-[85px] mt-[27px] sm:mt-11 lg:mt-[162px]">
        <div className="mb-[38px] sm:mb-9 lg:mb-[92px]">
          <div className="text-[#27272A] font-sans font-bold text-2xl sm:text-8xl w-[164px] sm:w-[410px] mb-1">
            Hey, I’m Nick
          </div>
          <BodyText title="Frontend developer" />
        </div>
        <div className="w-[290px] sm:w-[445px] mb-[27px] sm:mb-11 lg:mb-[60px]">
          <PurpleStick />
          <BodyText title="Help you to create high-quality digital products that your clients will love and let your business thrive" />
        </div>
        <Button title="Get in touch" />
      </div>
      <div className="relative w-full overflow-hidden lg:overflow-visible sm:absolute sm:h-full sm:w-[64%] sm:right-0 sm:top-0 sm:mt-14">
        <img
          className="float-right object-cover w-[270px] sm:absolute sm:bottom-0 sm:right-0 sm:w-[305px] md:bottom-[-39px] md:w-[400px] md:h-[460px] lg:bottom-[-130px] lg:w-[630px] lg:h-[700px]"
          src={mainBackground}
          alt={mainBackground}
        />
        <img
          className="absolute object-cover bottom-[-55px] right-[-20px] w-[350px] h-[350px] sm:right-0 sm:w-[390px] sm:h-[380px] md:bottom-[-52px] md:w-[460px] md:h-[430px] lg:bottom-[-130px] lg:w-[720px] lg:h-[700px]"
          src={mainPhoto}
          alt={mainPhoto}
        />
      </div>
    </div>
  );
}

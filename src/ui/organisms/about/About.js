import React from "react";
import Button from "../../molecules/button/Button";
import BodyText from "../../atoms/bodyText/BodyText";
import AboutWork from "../../molecules/experience/AboutWork";
import AboutInterests from "../../molecules/experience/AboutInterests";
import AboutHeaderText from "../../atoms/aboutHeaderText/AboutHeaderText";
import HeaderText from "../../atoms/headerText/HeaderText";
import aboutEllipse from "../../../icons/about/aboutEllipse.svg";
import aboutPhoto from "../../../icons/about/aboutPhoto.png";
import { ReactComponent as Art } from "../../../icons/about/aboutExp/Art.svg";
import { ReactComponent as Music } from "../../../icons/about/aboutExp/Music.svg";
import { ReactComponent as Photo } from "../../../icons/about/aboutExp/Photo.svg";

export default function About() {
  return (
    <div
      id="about"
      className="my-12 sm:mb-[100px] sm:mt-[131px] mx-[15px] sm:mx-[39px] lg:mx-[85px] lg:mt-[266px]"
    >
      <HeaderText title="About Me" />
      <div className="flex justify-center flex-wrap items-center mt-9 mb-12 md:flex-nowrap sm:mb-16 sm:mt-20 md:mb-20">
        <div className="relative flex justify-center items-center w-full h-full md:justify-start">
          <img className="w-[290px] lg:w-[412px]" src={aboutEllipse} alt={aboutEllipse} />
          <img className="absolute w-[256px] md:left-4 lg:w-[364px] lg:left-6" src={aboutPhoto} alt={aboutPhoto} />
        </div>
        <div className="xl:mr-[60px]">
          <div className="mb-6 w-[29px] h-0 border-[2px] border-solid border-[#7E3AF2] bg-[#7E3AF2]" />
          <div className="w-[290px] sm:mb-11 lg:mb-[64px] sm:w-[380px] xl:w-[445px]">
            <b className="font-sans text-small sm:text-xl">Nick Richardson</b>
            <BodyText title=" - Specialist in Frontend development. Clear code is my passion. Solving issues through negotiations" />
          </div>
          <Button
            title="Get in touch"
            marginTop="mt-[64px]"
            hidden="hidden sm:flex"
          />
        </div>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-between">
        <div className="mb-6 sm:mb-8">
          <AboutHeaderText title="Intersts" />
          <div className="mt-7 sm:mt-11">
            <AboutInterests
              icon={<Music />}
              title="Music"
              text="Indie Rock | Reggae"
            />
            <AboutInterests
              icon={<Art />}
              title="Art"
              text="Ebvard Munch | Frida Kahlo"
            />
            <AboutInterests
              icon={<Photo />}
              title="Photography"
              text="Portraits"
            />
          </div>
        </div>
        <div className="w-full lg:max-w-[508px]">
          <AboutHeaderText title="Education & Experience" />
          <div className="mt-7 mb-12 sm:mb-0 sm:mt-11">
            <AboutWork
              year="2008 - Present"
              title="Middle Frontend Developer"
              text="Ozon"
            />
            <AboutWork
              year="2006 - 2007"
              title="Frontend development courses"
              text="Stepik"
            />
            <AboutWork
              color="sm:border-[#FCFBFA]"
              year="2000 - 2005"
              title="Frontend developer"
              text="Saint Petersburg State University"
            />
          </div>
        </div>
      </div>
      <Button title="Get in touch" marginTop="mt-12" hidden="flex sm:hidden" />
    </div>
  );
}

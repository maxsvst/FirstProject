import React from "react";
import Button from "../../molecules/button/Button";
import Descritpion from "../../molecules/Description/Descritpion";
import AboutWork from "../../molecules/experience/AboutWork";
import AboutInterests from "../../molecules/experience/AboutInterests";
import AboutHeaderText from "../../atoms/aboutHeaderText/AboutHeaderText";
import HeaderText from "../../atoms/headerText/HeaderText";
import aboutGuyInEllipse from "../../../icons/about/aboutGuyInEllipse.png";
import { ReactComponent as Art } from "../../../icons/about/aboutExp/Art.svg";
import { ReactComponent as Music } from "../../../icons/about/aboutExp/Music.svg";
import { ReactComponent as Photo } from "../../../icons/about/aboutExp/Photo.svg";

export default function About() {
  return (
    <div
      id="about"
      className="my-12 sm:my-[100px] mx-[15px] sm:mx-[39px] md:mx-[85px]"
    >
      <HeaderText title="About Me" />
      <div className="flex justify-center sm:justify-between flex-wrap sm:flex-nowrap items-center mt-9 mb-12 sm:mb-16 sm:mt-20 md:mb-20">
        <img
          src={aboutGuyInEllipse}
          alt={aboutGuyInEllipse}
          className="bg-no-repeat sm:w-[256px] sm:h-[256px] md:w-[364px] md:h-[364px]"
        />
        <div className="lg:pr-[63px]">
          <Descritpion
            boldText="Nick Richardson"
            title=" - Specialist in Frontend development. Clear code is my passion. "
            brText="Solving issues through negotiations"
            width="w-[290px]"
          />
          <Button
            title="Get in touch"
            marginTop="mt-[64px]"
            hidden="hidden sm:flex"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
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
        <div>
          <AboutHeaderText title="Education & Experience" />
          <div className="mt-7 sm:mt-11">
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

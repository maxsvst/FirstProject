import React from "react";
import NavbarLink from "../../atoms/navbarLink/NavbarLink";
import headerMenu from "../../../icons/main/header/headerMenu.svg"

function MainPageNavbar() {
  return (
    <div className="border-b border-[#E5E7EB] flex justify-between items-center  h-[64px] px-[15px] md:px-[85px]">
      <div className="bg-[url('/src/icons/main/header/headerLogo.svg')] w-[35px] h-[33px]" />
      <ul className="hidden sm:flex justify-between list-none w-[242px]">
        <NavbarLink href="#main" title="Main" />
        <NavbarLink href="#about" title="About" />
        <NavbarLink href="#getInTouch" title="Get in touch" />
      </ul>
      <img src={headerMenu} alt={headerMenu} className="sm:hidden"/>
    </div>
  );
}

export default MainPageNavbar;

import React from "react";
import NavbarLink from "../../atoms/navbarLink/NavbarLink";
import headerMenu from "../../../icons/main/header/headerMenu.svg";
import headerLogo from "../../../icons/main/header/headerLogo.svg";

function MainPageNavbar() {
  return (
    <div className="border-b border-[#E5E7EB] flex justify-between items-center h-[64px] px-4 sm:px-[39px] lg:px-[85px]">
      <img src={headerLogo} alt={headerLogo} className="w-[35px] h-[35px]" />
      <ul className="hidden sm:flex justify-between list-none w-[242px]">
        <NavbarLink href="#main" title="Main" />
        <NavbarLink href="#about" title="About" />
        <NavbarLink href="#getInTouch" title="Get in touch" />
      </ul>
      <img src={headerMenu} alt={headerMenu} className="sm:hidden" />
    </div>
  );
}

export default MainPageNavbar;

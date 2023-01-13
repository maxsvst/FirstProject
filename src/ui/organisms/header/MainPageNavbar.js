import React from "react";
import NavbarLink from "../../atoms/subtitle2/NavbarLink";

function MainPageNavbar() {
  return (
    <div class='h-[64px]'>
      <div class="float-left bg-[url('/icons/headerLogo.svg')] relative w-[35px] h-[33.06px] mt-[14.97px] mb-[15.97px] ml-[85px]"><i/></div>
      <ul class="float-right list-none pl-0 mr-[61px] mt-[19.5px] mb-[20.5px]">
        <NavbarLink href="" title="Main" />
        <NavbarLink href="" title="About" />
        <NavbarLink href="" title="Get in touch" />
      </ul>
    </div>
  );
}

export default MainPageNavbar;

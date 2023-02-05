import React from "react";
import { ReactComponent as Send } from "../../../icons/ButtonSend.svg";

export default function Button({ title, type, hidden, show }) {
  return (
    <button
      type={type}
      className={`${hidden} ${show} flex items-center justify-between bg-[#7E3AF2] hover:bg-[#6C2BD9] active:bg-[#7E3AF2] border-[3px] border-[#7E3AF2] hover:border-[#6C2BD9] active:border-[#CABFFD] stroke-[#7E3AF2] hover:stroke-[#6C2BD9] active:stroke-[#7E3AF2] h-[39px] sm:h-[50px] rounded-[50px] px-[13px] sm:px-[25px]`}
    >
      <span className="font-sans font-semibold text-small sm:text-base text-[#FCFBFA]">
        {title}
      </span>
      <div className="ml-2 sm:ml-3 h-[18px] w-[18px] sm:h-[26px] sm:w-[26px] fill-[#FCFBFA] ">
        <Send />
      </div>
    </button>
  );
}

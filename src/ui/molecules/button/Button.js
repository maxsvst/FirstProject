import React from "react";
import { ReactComponent as Send } from "../../../icons/ButtonSend.svg";

export default function Button({ title, marginTop, type, hidden, show }) {
  return (
    <button
      type={type}
      className={`${hidden} ${show} flex items-center justify-between bg-[#7E3AF2] hover:bg-[#6C2BD9] active:bg-[#7E3AF2] border-[3px] border-[#7E3AF2] hover:border-[#6C2BD9] active:border-[#CABFFD] h-[39px] sm:h-[50px] mt-9 ${marginTop} rounded-[50px] px-[13px] sm:px-[25px]`}
    >
      <span className="font-sans font-semibold text-small sm:text-base text-[#FCFBFA]">
        {title}
      </span>
      <div className="ml-[10px] sm:ml-[15px] h-4 w-4 sm:h-6 sm:w-6 fill-[#FCFBFA] stroke-[#7E3AF2]">
        <Send />
      </div>
    </button>
  );
}

import React from "react";

export default function Input({ register, title, value, icon, marginLeft, border }) {
  return (
    <div className={`flex flex-col items-start ml-0 ${marginLeft} sm:mb-0 w-full min-w-[258px] max-w-[324px]`}>
      <span className="font-sans font-semibold text-small sm:text-xs mb-2 after:content-['*'] after:text-[#E02424]">
        {title}
      </span>
      <div className={`flex items-center justify-between px-5 py-[13px] invalid:border-[#E02424] border border-solid border-[#E5E7EB] hover:${border} focus-within:${border} rounded-2xl h-[50px] sm:h-[55px]`}>
        <div className="w-6 h-6 mr-[10px] fill-[#696969] stroke-[#696969] stroke-[1.5px]">{icon}</div>
        <input
          {...register}
          type="text"
          placeholder={value}
          className="bg-[#FCFBFA] placeholder:text-[#696969] placeholder:text-small sm:placeholder:text-xs placeholder:font-sans placeholder:font-normal focus:outline-none w-[184px] sm:w-[238px] md:w-[250px] h-[29px]"
        />
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function Input({
  register,
  title,
  value,
  icon,
  marginY,
  marginLeft,
  border,
}) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div
      className={`flex flex-col ${marginY} ${marginLeft} sm:mb-0 w-[258px] md:w-[312px] lg:w-[324px]`}
    >
      <span className="font-sans font-semibold text-small sm:text-xs mb-2 after:content-['*'] after:text-[#E02424]">
        {title}
      </span>
      <div
        className={`group flex items-center px-5 py-[13px] border border-solid border-[#E5E7EB] ${border} rounded-2xl h-[50px] sm:h-[55px]`}
      >
        <div
          className={`
          ${
            inputValue !== ""
              ? "fill-[#7E3AF2] stroke-[#7E3AF2]"
              : "fill-[#696969] stroke-[#696969]"
          }
          group-focus-within:fill-[#7E3AF2] group-focus-within:stroke-[#7E3AF2] flex w-6 h-6 mr-[10px]`}
        >
          {icon}
        </div>
        <input
          {...register}
          onChange={(e) => {
            register.onChange(e)
            setInputValue(e.target.value);
          }}
          type="text"
          placeholder={value}
          className={`bg-[#FCFBFA] placeholder:text-[#696969] placeholder:text-small sm:placeholder:text-xs placeholder:font-sans placeholder:font-normal focus:outline-none w-[184px] md:w-[238px] lg:w-[324px] h-[29px]`}
        />
      </div>
    </div>
  );
}

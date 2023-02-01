import React from "react";

export default function BodyText({ title, boldText, brText, textJustify }) {
  return (
    <span className={`${textJustify} inline-block font-sans font-normal text-small sm:text-xl text-[#696969]`}><span className="font-semibold text-[#27272A]">{boldText}</span>{title}<br/>{brText}</span>
  );
}

import React from "react";
import BodyText from "../../atoms/bodyText/BodyText";

export default function Descritpion({ title, boldText, brText, width }) {
  return (
    <>
      <div className="mb-6 w-[29px] h-0 border-[2px] border-solid border-[#7E3AF2] bg-[#7E3AF2]" />
      <div className={`${width} sm:w-[380px] md:w-[445px]`}>
        <BodyText title={title} boldText={boldText} brText={brText}/>
      </div>
    </>
  );
}

import Itservicescontent from "@/data/ItServices/Itservicescontent";
import React from "react";

const ATagComp = ({ title, imgSrc, routing }) => (
  <a
    href={routing}
    className=" w-full transition-all duration-300 group p-3 cursor-pointer hover:bg-cyan-50 rounded-xl"
  >
    <img src={imgSrc} className="h-5 float-left pr-2" />{" "}
    <span className="text-[#525f70] font-semibold block group-hover:text-black">
      {title} <span className="font-bold text-red-500 pl-1">&#8599;</span>
    </span>
  </a>
);

function RightPanelItService() {
  return (
    <div className="flex w-full xl:w-1/4 flex-col float-left pl-4 py-6">
      {Itservicescontent.map((ele, index) => (
        <ATagComp key={index} {...ele} />
      ))}
    </div>
  );
}

export default RightPanelItService;

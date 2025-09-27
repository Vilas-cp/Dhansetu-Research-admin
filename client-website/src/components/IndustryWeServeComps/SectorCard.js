import React from "react";

function SectorCard({ title, description, imgSrc, index }) {
  return (
    <div
      className={`sector-card-${
        index + 1
      } cursor-pointer group flex flex-col md:w-[40%] mt-10 w-full lg:w-[18%] justify-evenly space-y-5 py-5 items-center border-2 border-slate-400/20 transition-colors ease-in-out duration-200 hover:bg-slate-300/40`}
    >
      <img className=" group-hover:animate-wiggle" src={imgSrc} />
      <h2 className="text-white text-base px-2 text-center">{title}</h2>
      <p className="text-[#9b9aad] text-sm w-[70%] text-center">
        {description}
      </p>
    </div>
  );
}

export default SectorCard;

import React from "react";

function BrandCard({
  imgSrc,
  logoImgSrc,
  description,
  bgColor,
  index,
  linkTo,
}) {
  return (
    <div
      className={`brand-card-${index + 1} 
          mt-6 lg:h-52 h-72 cursor-pointer shadow-lg shadow-gray-900/40 transition-transform duration-300 ease-out hover:!-translate-y-1 w-full lg:w-[30%] rounded-lg overflow-hidden relative`}
    >
      <a className="block" target="_blank" href={linkTo}>
        <div
          className={`h-full w-full bg-[${bgColor}]/65 z-10 absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%]`}
        ></div>
        <img
          className="h-full w-full object-cover absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%]"
          alt=""
          src={imgSrc}
        />
        <h2 className="absolute -translate-x-[50%] w-[80%] -translate-y-[50%] top-[50%] left-[50%] text-center text-xl text-white font-semibold z-50">
          {description}
        </h2>
      </a>
    </div>
  );
}

export default BrandCard;

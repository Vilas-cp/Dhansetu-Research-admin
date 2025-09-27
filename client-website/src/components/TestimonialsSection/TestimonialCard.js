import React from "react";

function TestimonialCard({ name, state, message, imgSrc, index }) {
  return (
    <div
      className={`testimonial-card-${
        index + 1
      } xl:w-[30%] w-full h-[40%] py-10 md:mx-0 mx-5 my-5 rounded-lg  bg-white shadow-2xl p-[40px] flex-col gap-y-6 hover:-translate-y-3 transition-transform duration-300 ease-out`}
    >
      <div className="flex items-center gap-[1vh]">
        <img src={imgSrc} width={50} className="rounded-full " />
        <p className="font-bold text-[2vh]  text-[#0e2b5c]">{name}</p>
      </div>
      <div className="pt-[20px]">
        <p className="text-gray-500 font-medium">{message}</p>
      </div>
      <div className="pt-[20px]">
        <p className="text-[#0e2b5c] font-semibold font-sans">{name}</p>
        <p className="text-gray-500 font-sans font-semibold text-[14px]">
          {state}
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;

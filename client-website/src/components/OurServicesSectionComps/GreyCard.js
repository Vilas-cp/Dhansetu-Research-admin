import React from "react";

function GreyCard({ title, description, imgSrc, footerNote, index, routing }) {
  return (
    <div
      className={`bg-[#f3f6f9] md:w-[30%] !snap-none w-full py-10 md:mx-0 mx-5 my-5 rounded-lg card-${
        index + 1
      }`}
    >
      <h2 className="font-semibold text-[#0e2b5c] text-center text-xl">
        {title}
      </h2>
      <p className="my-5 font-medium text-[#627792] text-center px-4">
        {description}
      </p>
      <div className="my-7 w-full flex flex-col space-y-3 items-center group">
        <img
          alt=""
          className="h-24 transition-transform duration-500 ease-in-out group-hover:scale-75 group-hover:-translate-y-2 group-hover:rotate-[25deg] "
          src={imgSrc}
        />
        <div className="bg-slate-300 w-5 h-5 transition-transform ease-in-out duration-500 group-hover:scale-x-[5.0] group-hover:scale-y-75 rounded-full transform scale-x-[6.0]"></div>
      </div>
      <div>
        <a
          href={routing}
          className="text-blue-400 block text-center py-1 font-semibold cursor-pointer w-full mx-auto transition-all duration-300 ease-in-out hover:bg-pink-600 hover:text-white hover:w-[65%]"
        >
          {footerNote} &#8599;
        </a>
      </div>
    </div>
  );
}

export default GreyCard;

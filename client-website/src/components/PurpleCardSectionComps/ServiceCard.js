import React from "react";

function ServiceCard({ title, description, imgSrc, readmore }) {
  return (
    <div className="lg:w-[30%] w-full h-52 relative group service-card">
      <img className="w-full object-cover h-full" src={imgSrc} alt="" />
      <div className="bg-white w-[80%] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg absolute shadow-md shadow-slate-700/20 -bottom-7 -translate-x-1/2 left-1/2 z-20 flex py-3 flex-col items-center justify-evenly">
        <div className="h-16 w-[80%] overflow-hidden relative">
          <p className="text-[#3ea9f5] w-full text-center absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-[30%] font-semibold  transition-all duration-300 group-hover:top-[-15%]">
            {title}
          </p>
          <p className="text-black w-full text-center absolute font-semibold transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-[70%] transition-all duration-300 group-hover:top-[30%]">
            {description}
          </p>
          <a
            href={readmore}
            className="text-[#3ea9f5] cursor-pointer w-full hover:w-[80%] hover:bg-pink-600 hover:text-white text-center absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2  top-[110%] font-semibold transition-all duration-300 group-hover:top-[70%]"
          >
            Read More {" ↗"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;

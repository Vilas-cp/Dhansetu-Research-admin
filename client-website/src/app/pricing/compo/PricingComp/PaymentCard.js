import React from "react";

function UlLiComp({ text }) {
  return (
    <li className="text-black lg:text-left text-center text-md py-2">
      <span className={`font-bold text-black`}>&#10004;</span> {text}
    </li>
  );
}

function PricingCard({ type, price, bulletPoints, index }) {
  return (
    <div
      className={`xl:w-[30%] w-full h-[40%] group py-10 md:mx-0 mx-5  rounded-lg  bg-white shadow-2xl p-[40px] flex-col gap-y-6 hover:-translate-y-3 transition-transform duration-300 ease-out`}
    >
      <div className="flex items-center">
        {/* <div  className="w-12 h-12 rounded-full bg-black" ></div> */}
        <h3 className="font-bold text-2xl text-[#0e2b5c]">{type}</h3>
      </div>
      <div className="py-[20px]">
        <p
          className={`text-white text-4xl font-medium px-4 py-5 text-center cursor-pointer ${
            index === 2 ? "bg-red-500" : "bg-gray-700"
          } shadow-md group-hover:shadow-lg group-hover:shadow-slate-300 shadow-slate-300 duration-300 transition-shadow rounded-lg`}
        >
          <span className="">&#8377;</span>
          {price}
        </p>
      </div>
      <ul>
        {bulletPoints.map((eleData, index1) => (
          <UlLiComp {...eleData} key={index1} />
        ))}
      </ul>
      <a href="/payment">
        <p
          className={`text-white text-4xl font-medium px-4 py-4 mt-4 text-center cursor-pointer ${
            index === 2 ? "bg-red-500" : "bg-gray-700"
          } hover:bg-black transition-all shadow-md group-hover:shadow-lg group-hover:shadow-slate-300 shadow-slate-300 duration-300 rounded-lg`}
        >
          Pay Now
        </p>
      </a>
    </div>
  );
}

export default PricingCard;

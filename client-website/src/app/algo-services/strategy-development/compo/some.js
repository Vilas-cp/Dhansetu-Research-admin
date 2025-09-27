"use client";
import AlgoServiceRightPanel from "@/components/AlgoServiceComp/AlgoServiceRightPanel";
import UlLiCompAlgoSection from "@/components/AlgoServiceComp/UlLiCompAlgoSection";
import React from "react";

function SectionCompPara({ text }) {
  return <p className="text-black lg:text-left text-center text-md">{text}</p>;
}

const SectionCompParaData = [
  {
    text: `You could know precisely when to purchase, hold or sell stocks or 
    commodities. Auto Buy Sell signal programming software is an interesting and 
    extraordinary tool for the brokers, investors and examiners in Financial markets. 
    It has in-fabricated control arrangement of altering with the three targets set for 
    trading dependent on Market conduct consequently with no human intervention.`,
  },

  {
    text: `We are providing 100% exact programmed purchase sell signals software for trading. 
    Our product is working in all section in mcx, ncdex, currency, equity,future and so forth all. 
    Our items have been given Complete Artificial Intelligence as respect to setting different parameters 
    for Trading in various contents.`,
  },
  {
    text: `Moving average is one of the best indicators utilized in auto purchase sell 
    signal technical analysis chart programming. Moving average is made by processing the 
    normal cost of a share or commodity over a particular number of periods.`,
  },
  {
    text: `Our framework with the help of constant information, in market time 
    you will get continuous purchase/sell signals from Commodity Market (MCX), NSE 
    and Aimed for Professional Traders, because of its straightforwardness and effortlessness 
    to comprehend, individuals who don't have any related knowledge in Trading can trade with 
    trading framework can support you and can make great income`,
  },
];

const UlLiCompData = [
  {
    title: `Easy Customization :`,
    description: `Easy To Install And Easy To Use.`,
  },
  {
    title: `Popup and sound alerts :`,
    description: `Dont Waste Time In Buying Tips.`,
  },
  {
    title: `High Accuracy :`,
    description: `The Reduced risk of manual errors when placing trades.`,
  },
  {
    title: `Support :`,
    description: `Get support from our professionals who better understands the whole structure.`,
  },
];

const AlgoSection = () => {
  return (
    <div className="pt-[140px] pb-10 px-[10%] flex flex-col space-y-4 space-x-0 lg:space-y-0 lg:flex-row lg:space-x-4 justify-between">
      <div className="flex flex-col justify-between space-y-5">
        {SectionCompParaData.map((eleData, index) => (
          <SectionCompPara {...eleData} key={index} />
        ))}
        <h1 className="text-black font-bold text-3xl lg:text-left text-center">
          Some Benefits for you
        </h1>
        <ul className="px-2 !mt-0">
          {UlLiCompData.map((eleData, index) => (
            <UlLiCompAlgoSection {...eleData} key={index} />
          ))}
        </ul>
      </div>
      <div className="">
        <AlgoServiceRightPanel />
      </div>
    </div>
  );
};

export default AlgoSection;

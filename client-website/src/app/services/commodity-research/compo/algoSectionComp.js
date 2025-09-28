"use client";
import AlgoServiceRightPanel from "@/components/AlgoServiceComp/AlgoServiceRightPanel";
import UlLiCompAlgoSection from "@/components/AlgoServiceComp/UlLiCompAlgoSection";
import React from "react";

function SectionCompPara({ text }) {
  return <p className="text-black text-left">{text}</p>;
}

const SectionCompParaData = [
  {
    text: `Commodity (MCX) research provides traders with actionable insights into bullion, energy, and metals,
helping them capture opportunities in both intraday and positional trades.`,
  },

  {
    text: `At Dhansetu, we specialize in delivering precise commodity market recommendations backed
by expert analysis. From bullion to energy, our coverage ensures you stay ahead with real-time updates
and multiple strategies designed for different trading styles:`,
  },
];

const SectionCompParaData1 = [
  {
    text: `At Dhansetu, our goal is to help you navigate commodity markets with confidence. Contact us
today to learn how our research can support your trading journey and maximize your returns.`,
  },
];

const UlLiCompData = [
  {
    title: `Bullion Coverage :`,
    description: `Gold & Silver intraday and positional calls to help you trade precious metals with clarity.`,
  },
  {
    title: `Energy & Metals :`,
    description: `Key levels and insights for Crudeoil, Natural Gas, and Copper to guide your trading decisions.`,
  },
  {
    title: `Live Alerts :`,
    description: `Real-time updates on stop-loss and target changes so you can act quickly and protect profits.`,
  },
  {
    title: `Multiple Strategies :`,
    description: `We provide strategies for both conservative and aggressive traders, ensuring flexibility for
different risk profiles.`,
  },
];

const AlgoSection = () => {
  return (
    <div className="pb-10 flex space-y-4 space-x-0 xl:space-y-0 xl:flex-row justify-between w-full flex-col-reverse">
      <AlgoServiceRightPanel />
      <div className="py-6 px-5 xl:w-3/4 w-full flex flex-col justify-between space-y-5">
        {SectionCompParaData.map((eleData, index) => (
          <SectionCompPara {...eleData} key={index} />
        ))}
        <h2 className="text-black font-bold text-3xl lg:text-left text-center">
          Some Benefits for you
        </h2>
        <ul className="px-2 !mt-0">
          {UlLiCompData.map((eleData, index) => (
            <UlLiCompAlgoSection {...eleData} key={index} />
          ))}
        </ul>
        {SectionCompParaData1.map((eleData, index) =>
          "text" in eleData ? (
            <SectionCompPara {...eleData} key={index} />
          ) : (
            <a
              key={index}
              className="block text-left text-blue-400"
              href={eleData.link}
              target="_blank"
            >
              {eleData.link}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default AlgoSection;

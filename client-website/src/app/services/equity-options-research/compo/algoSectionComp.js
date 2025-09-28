"use client";
import AlgoServiceRightPanel from "@/components/AlgoServiceComp/AlgoServiceRightPanel";
import UlLiCompAlgoSection from "@/components/AlgoServiceComp/UlLiCompAlgoSection";
import React from "react";

function SectionCompPara({ text }) {
  return <p className="text-black text-left">{text}</p>;
}

const SectionCompParaData = [
  {
    text: `Algo trading refers to a method of using computer algorithms to automate the process of financial
trading. A predefined set of rules are provided to a computer program, and the orders are executed
when those conditions are met. The trades are processed to maximize speed, efficiency and accuracy,
while reducing human intervention.`,
  },

  {
    text: `At Brain Auto Tech, we offer exceptional algorithmic trading services designed to empower investors
and traders. Our cutting-edge algorithms, created by a team of experts, provide incredible speed,
efficiency and precision in executing trades. Here are some algo trading services we offer:`,
  },
];

const SectionCompParaData1 = [
  {
    text: `At Dhansetu, we are committed to helping you transform the way you trade. Contact us today to
learn how you can unlock full trading potential and achieve your desired financial goals.`,
  },
];

const UlLiCompData = [
  {
    title: `Equity & Options Research :`,
    description: `Daily stock recommendations including BTST, Swing, and Positional trades to help you capture
opportunities across time horizons.`,
  },
  {
    title: `Weekly Market Outlook :`,
    description: `Detailed analysis with key levels for Nifty, BankNifty, and important sectors, helping you stay
ahead of market trends.`,
  },
  {
    title: `Options Strategies :`,
    description: `Safe spreads, hedged positions, and intraday opportunities curated to manage risk while optimizing
returns.`,
  },
  {
    title: `Educational Notes :`,
    description: `Every recommendation comes with the reasoning behind it, ensuring you not only trade but also
learn the logic and improve decision-making.`,
  },
];

const AlgoSection = () => {
  return (
    <div className="pb-10 flex space-y-4 space-x-0 xl:space-y-0 xl:flex-row justify-between w-full flex-col-reverse">
      <AlgoServiceRightPanel />
      <div className="py-6 px-5 xl:w-3/4 w-full flex flex-col justify-between space-y-5">
        {/* {SectionCompParaData.map((eleData, index) => (
          <SectionCompPara {...eleData} key={index} />
        ))} */}
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

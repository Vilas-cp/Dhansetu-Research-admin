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
    text: `At Brain Auto Tech, we are committed to helping you transform the way you trade. Contact us today to
learn how you can unlock full trading potential and achieve your desired financial goals.`,
  },
];

const UlLiCompData = [
  {
    title: `Automated Algo Trading :`,
    description: `Our algorithms automatically perform buy and sell orders based on predefined criteria, such as price,
quantity and timing, without or with minimal human intervention.`,
  },
  {
    title: `Strategies :`,
    description: `Our algo trading services include using common strategies, such as trend following, scalping, statistical
arbitrage, market monitoring and so on. Each strategy has its own rules and objectives.`,
  },
  {
    title: `Fast and Reliable :`,
    description: `Our algorithms are designed to process market data and execute trade in fractions of a second, which is
faster than manual trading.`,
  },
  {
    title: `Customization and Flexibility :`,
    description: `Our algorithms can be easily customized to suit specific trading preferences, goals and strategies of the
traders. The flexibility enables the creation of tailored approaches based on different market conditions.`,
  },
  {
    title: `Seamless Integration with Trading Platforms :`,
    description: `Our algo trading services can be integrated with trading platforms to facilitate direct market access
(DMA) and smooth order execution.`,
  },
  {
    title: `Backtesting :`,
    description: `Our algo trading algorithms are usually backtested against historical data values to assess and optimize
their performance. This ensures your trading platform reaps profitable results in similar market
conditions.`,
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
            <a key={index} className="block text-left text-blue-400" href={eleData.link} target="_blank">{eleData.link}</a>
          )
        )}
      </div>
    </div>
  );
};

export default AlgoSection;

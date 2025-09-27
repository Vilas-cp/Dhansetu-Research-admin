"use client";
import AlgoServiceRightPanel from "@/components/AlgoServiceComp/AlgoServiceRightPanel";
import UlLiCompAlgoSection from "@/components/AlgoServiceComp/UlLiCompAlgoSection";
import React from "react";

function SectionCompPara({ text }) {
  return <p className="text-black text-left">{text}</p>;
}

const SectionCompParaData = [
  {
    text: `Successful algo trading commences with the critical step of identifying opportunities and crafting
efficient strategies that yield profitable results. At Brain Auto Tech, we specialize in developing
comprehensive algo strategies designed to meet the unique needs of the traders. Our dedicated team
leverages advanced technology and innovative mathematical models to deliver solutions that drive
consistent performance and facilitate effective risk management.`,
  },

  {
    text: `Algorithmic trading strategies are primarily classified into various types based on their underlying
approaches and principles. Here are some main strategies that we can help you deploy.`,
  },
];

const SectionCompParaData1 = [
  {
    text: `These are some strategies that we work with at Brain Auto Tech. Each type of strategy requires a set of
data, tools and expertise to be developed and deployed effectively. You can combine multiple elements
from different strategies to create adaptive and robust trading systems.`,
  },

  {
    text: `Whether you are a financial institution or an individual trader, we have the right expertise to help you
succeed in this fast-paced world of algo trading. Get in touch with us today.`,
  },
];

const UlLiCompData = [
  {
    title: `Trend-Following Strategy :`,
    description: `One of the most common strategies in algo trading is the trend-following
strategy, which relies on the current market trends, such as breakouts, moving averages and relative
strength index (RSI). This is comparatively straightforward to implement, without requiring predictive
forecasting.`,
  },
  {
    title: `Arbitrage Trading Strategy :`,
    description: `Arbitrage strategies aim to identify and capitalize on price differences of
the same asset across different markets. This strategy relies on mathematical and statistical data to
identify instances when the price of one asset seems to change with respect to another asset.`,
  },
  {
    title: `Mean Reversion Strategy :`,
    description: `This strategy involves identifying price deviations and assuming that the
price will revert to their average or mean levels over time. The assets are sold when the prices go above
the upper limit and bought when the prices go below the lower limit.`,
  },
  {
    title: `Mathematical-based Strategy :`,
    description: `This strategy relies specifically on mathematical and statistical
equations to predict market changes and make profitable trading decisions.`,
  },
  {
    title: `Volume and Time Weighted Average Price :`,
    description: `This strategy breaks down large orders into smaller parts
based on specific time slots and historical volumes. It aims to process orders at an average price within a
defined price range or when it comes close to the volume-weighted average price.`,
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
        {SectionCompParaData1.map((eleData, index) => (
          <SectionCompPara {...eleData} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AlgoSection;

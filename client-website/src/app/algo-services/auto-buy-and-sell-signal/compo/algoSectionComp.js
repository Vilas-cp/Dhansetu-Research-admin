"use client";
import AlgoServiceRightPanel from "@/components/AlgoServiceComp/AlgoServiceRightPanel";
import UlLiCompAlgoSection from "@/components/AlgoServiceComp/UlLiCompAlgoSection";
import React from "react";

function SectionCompPara({ text }) {
  return <p className="text-black text-left">{text}</p>;
}

const SectionCompParaData = [
  {
    text: `An auto buy and sell signal in algo trading refers to a robust system that uses algorithms to analyze
market data and condition, and generate automated signals that indicate when to buy or sell a
particular asset. These signals are triggered based on certain criteria that are set by the algorithm, which
could include numerous conditions, such as historical data analysis, technical indicators and statistical
models.`,
  },

  {
    text: `At Brain Auto Tech, we offer auto buy and sell services in algo trading that give a powerful way to boost
your trading speed and efficiency. Our cutting-edge software programs are aimed to send 100%
accurate signals, helping traders make informed decisions without having to manually analyze the
market and losing out profitable opportunities. Here are some key features of our auto buy and sell
services.`,
  },
];

const SectionCompParaData1 = [
  {
    text: ` Whether you are a beginner looking to get started in the trading market or an experienced trader
seeking to enhance your strategy, contact Brain Auto Tech today to leverage our auto buy and sell
services to navigate the trading market confidently.`,
  },
];

const UlLiCompData = [
  {
    title: `Real-time Signal Generation :`,
    description: `This feature involves regular analysis of the market data to generate buy and sell signals in real time.
Using indicators like moving averages, MACD and RSI, the algorithm can provide accurate and timely
signals, allowing you to capitalize on market opportunities.`,
  },
  {
    title: `Customization and Personalization :`,
    description: `The trading signal can be tailored to match the specific trading preferences and strategies of the traders.
Traders can set personal trading hours, risk tolerance, signal frequency and asset preferences based on
individual goals and risk appetite.`,
  },
  {
    title: `Automated Trade Execution :`,
    description: `Our auto buy and sell signals also facilitate the automated execution of trades, which saves time and
reduces manual intervention in the trading process. This feature can be seamlessly integrated with
different trading platforms and brokerage accounts.`,
  },
  {
    title: `Analytics and Reporting :`,
    description: `Traders can get detailed analysis and reporting on the performance of trade signals and execute orders.
The system can help you track the success rate, so you can analyze and refine your trading strategies.`,
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

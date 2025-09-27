"use client";
import AlgoServiceRightPanel from "@/components/AlgoServiceComp/AlgoServiceRightPanel";
import UlLiCompAlgoSection from "@/components/AlgoServiceComp/UlLiCompAlgoSection";
import React from "react";

function SectionCompPara({ text }) {
  return <p className="text-black text-left">{text}</p>;
}

const SectionCompParaData = [
  {
    text: `API stands for Application Programming Interface, which refers to the set of rules and protocols, acting
as a bridge between software applications to communicate and share data with each other. In algo
trading, the API bridge connects various trading platforms, such as cTrader, MetaTrader, or NinjaTrader
with data providers and brokers. Using this, traders can access market data, process orders and execute
algorithmic strategies in real-time.`,
  },
];

const SectionCompParaData1 = [
  {
    text: `API bridge services are essential in algo trading, enabling the necessary systems to connect different
trading platforms with execution venues, market data and other crucial services. By leveraging these
services, traders can improve their trading, enhance strategies and achieve overall performance.`,
  },

  {
    text: `Contact us if you are looking for cutting-edge API bridge services to achieve your desired trading goals.`,
  },
];

const UlLiCompData = [
  {
    title: `Enhanced Connectivity :`,
    description: `API bridge offers seamless connectivity between different units of the trading ecosystem. It reduces
latency in data transmission and order execution, allowing traders to access real-time market data,
perform trades and receive order confirmation.`,
  },
  {
    title: `High-speed Trading :`,
    description: `API bridge enables capitalizing on market opportunities by increasing the speed and efficiency of trading
operations. Low-latency connectivity reduces delays in data transmission, allowing you to enhance trade
execution and profitability.`,
  },
  {
    title: `Scalability :`,
    description: `API bridge is capable of handling large volumes of transactions and high-frequency trading. This makes
the trading platform more scalable and addresses the changing market needs.`,
  },
  {
    title: `Improved Security and Compliance :`,
    description: `API bridge offers strong security measures, such as encryption and authentication protocols to protect
confidential and sensitive trading data. Additionally, traders can set predefined parameters to set
position limits and stop-loss orders to mitigate potential risks.`,
  },
  {
    title: `Real-time Data Access :`,
    description: `With API bridge, traders can access real-time data and monitor market conditions, allowing them to
make informed decisions. The real-time data is crucial for creating and implementing algo trading
strategies effectively.`,
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
          How API Bridge Can Be Useful in Algo Trading
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

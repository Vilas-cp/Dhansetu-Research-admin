"use client";
import AlgoServiceRightPanel from "@/components/AlgoServiceComp/AlgoServiceRightPanel";
import UlLiCompAlgoSection from "@/components/AlgoServiceComp/UlLiCompAlgoSection";
import React from "react";

function SectionCompPara({ text }) {
  return <p className="text-black text-left">{text}</p>;
}

const SectionCompParaData = [
  {
    text: `Algo Trading Support is designed to make your trading smarter, faster, and stress-free. 
It provides traders with pre-built, backtested strategies along with seamless broker integration 
and fully automated execution.`,
  },

  {
    text: `At Dhansetu, we empower traders with automation that eliminates manual effort, 
while ensuring precision in execution and smart risk management. 
Here are some of the benefits of our Algo Trading Support:`,
  },
];

const SectionCompParaData1 = [
  {
    text: `At Dhansetu, our mission is to simplify trading with powerful automation and 
risk protection. Contact us today to experience hassle-free algo trading with smart execution.`,
  },
];

const UlLiCompData = [
  {
    title: ` Pre-Built Backtested Strategies :`,
    description: `Intraday and positional strategies tested on historical data to provide reliable trading setups.`,
  },
  {
    title: `Broker Integration :`,
    description: `Compatible with leading brokers like Zerodha, Angel One, Fyers, Dhan, and Alice Blue for seamless execution.`,
  },
  {
    title: `Fully Automated Execution :`,
    description: `From entry to target and stop-loss, everything is automated — no manual intervention required.`,
  },
  {
    title: `Trailing Stop-loss & Risk Filters :`,
    description: `Smart capital protection features like dynamic stop-loss and risk filters to safeguard your investments.`,
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

"use client";
import AlgoServiceRightPanel from "@/components/AlgoServiceComp/AlgoServiceRightPanel";
import UlLiCompAlgoSection from "@/components/AlgoServiceComp/UlLiCompAlgoSection";
import React from "react";

function SectionCompPara({ text }) {
  return <p className="text-black text-left">{text}</p>;
}

const SectionCompParaData = [
  {
    text: `Our RA + Algo Combo is an end-to-end trading solution that combines expert research, 
fully automated execution, and robust risk management — all in one package.`,
  },
  {
    text: `At Dhansetu Research, we go beyond standard algo trading by offering a comprehensive solution 
where research meets automation. From portfolio customization to performance tracking, here's what 
you get with our RA + Algo Combo:`,
  },
];

const SectionCompParaData1 = [
  {
    text: `At Dhansetu Research, we are committed to providing you with not just technology but 
complete trading empowerment. Contact us today and experience the perfect blend of Research + Algo 
support to achieve your financial goals.`,
  },
];

const UlLiCompData = [
  {
    title: `End-to-End Solution :`,
    description: `A powerful combination of Research, Automated Execution, and Risk Management to simplify trading.`,
  },
  {
    title: `Portfolio Customization :`,
    description: `Trade in Stocks, Options, or MCX, tailored as per your unique risk profile and preferences.`,
  },
  {
    title: `Performance Tracking Dashboard :`,
    description: `Access detailed monthly and cumulative reports to track performance and growth effectively.`,
  },
  {
    title: `Priority Support :`,
    description: `Get a dedicated Relationship Manager to guide and support you throughout your trading journey.`,
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

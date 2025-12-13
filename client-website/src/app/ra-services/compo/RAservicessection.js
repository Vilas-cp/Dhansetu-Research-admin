import React from "react";
import Itservicescontent from "@/data/RAServices/RAservicescontent";
import GreyCard1 from "./RAservicescompos/GreyCard1";
import UlLiComp from "./UlLiComp";
import UlLiCompTitle from "./UlLiCompTitle";
// import { AnimatePresence } from "framer-motion";
// import PopUp from "@/components/PopUp";
// import popUpsData from "@/data/ItServicesData/ItServicesData";

const itServiceData1 = [
  {
    text: `At Dhansetu, we believe traders should never walk into the market carrying guesswork like a lantern with a weak flame. As a SEBI-registered Research Analyst, we bring regulated, structured, and deeply researched insights designed to help traders and investors make informed decisions — responsibly, transparently, and ethically.`,
  },
];

const itServiceData2 = [
  {
    text: `Research Analyst (RA) Services refer to research-backed market views, reports, and insights provided under SEBI regulations. These services ensure that every recommendation or opinion is supported by data, logic, and compliance — never by speculation.
`,
  },
  {
    text: `Dhansetu offers a complete bouquet of RA solutions that guide you through the market's fog with disciplined analysis.`,
  },
];

const complianceData = `Transparent disclosures
No guaranteed returns
No profit-sharing or PMS activities
No unregistered advisory
Research based on valid models and data
Conflict of interest disclosures
Segregated RA and Algo/IT operations`;

const doesNotData = `Provide assured returns
Take trades on your behalf
Offer PMS or portfolio handling
Provide tips or telephonic signals
Mix RA services with IT or Algo automation
All research is based on analysis and intended for informed decision-making only.`;

const whyData = [
  {
    text: `Regulated & Reliable`,
    desc: `Every insight is bound by SEBI norms — free from market noise.`
  },
  {
    text: `Data-First Decision Making`,
    desc: `Our research is built on structured market intelligence, not intuition.`
  },
  {
    text: `Perfect Blend: Technical + Fundamental`,
    desc: `Where charts meet balance sheets to form complete clarity.`
  },
  {
    text: `Personalization that Respects Compliance`,
    desc: `Tailored research, yet properly documented and fully within the RA framework.`
  },
  {
    text: `Education + Research Under One Roof`,
    desc: `We help you grow as a trader, not depend on us blindly.`
  },
  {
    text: `Trusted by Traders, Built for the Future`,
    desc: `Discipline, transparency, and a vision for long-term market literacy.`
  },
];

const Itservicessection = () => {
  // const [isOpen, setIsOpen] = useState(null);
  return (
    <>
      {/* <AnimatePresence mode="wait">
        {isOpen !== null && (
          <PopUp {...popUpsData[isOpen]} setIsOpen={setIsOpen} key={isOpen} />
        )}
      </AnimatePresence> */}
      <div className="pt-[40px]">
        <div className="w-full card-container md:w-[80%] md:px-0 px-2 mx-auto h-auto py-5 flex items-center flex-wrap">
          <h2 className="text-black font-bold text-2xl">
            Where clarity meets compliance, and data becomes direction.
          </h2>
          <div className="space-y-3 py-6">
            {itServiceData1.map((ele, index) => (
              <p key={index} className="text-black text-left">
                {ele.text}
              </p>
            ))}
          </div>
          <h2 className="text-black font-bold text-2xl">
            What Are RA Services?
          </h2>
          <div className="space-y-3 py-6">
            {itServiceData2.map((ele, index) => (
              <p key={index} className="text-black text-left">
                {ele.text}
              </p>
            ))}
          </div>
        </div>
        <div className="w-full card-container md:w-[80%] mx-auto h-auto py-5 flex justify-evenly flex-row items-center flex-wrap">
          {Itservicescontent.map((greyCardProps, index) => (
            <GreyCard1
              key={index}
              {...greyCardProps}
              index={index}
              // setIsOpen={setIsOpen}
            />
          ))}
        </div>
        <div className="w-full card-container md:w-[80%] md:px-0 px-2 mx-auto h-auto py-5 space-y-3">
          <h2 className="text-black font-bold text-2xl">
            Compliance & Ethical Standards
          </h2>
          <p>
            As a SEBI-registered Research Analyst, we follow strict regulations that safeguard investor interest.
          </p>
          <p className="font-semibold">We ensure:</p>
          <ul className="px-2 !mt-0">
            {complianceData
              .toString()
              .split("\n").map((eleData, index) => (
                <UlLiComp text={eleData} key={index} />
              ))}
          </ul>
          <p>
            Trust is not a slogan here — it is an audited responsibility.
          </p>
          <p className="font-semibold">Why Choose Dhansetu for RA Services?</p>
          <ul className="px-2 !mt-0">
            {whyData.map((eleData, index) => (
                <UlLiCompTitle {...eleData} slno={index + 1} key={index} />
              ))}
          </ul>
          <h2 className="text-black font-bold text-2xl">
            Important Disclaimer (Mandatory for RA Services)
          </h2>
          <p className="font-semibold">{`Dhansetu does NOT:`}</p>
          <ul className="px-2 !mt-0">
            {doesNotData
              .toString()
              .split("\n").map((eleData, index) => (
                <UlLiComp text={eleData} key={index} />
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Itservicessection;

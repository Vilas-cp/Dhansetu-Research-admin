import React from "react";
import Itservicescontent from "@/data/RAServices/RAservicescontent";
import GreyCard1 from "./RAservicescompos/GreyCard1";
// import { AnimatePresence } from "framer-motion";
// import PopUp from "@/components/PopUp";
// import popUpsData from "@/data/ItServicesData/ItServicesData";

const itServiceData1 = [
  {
    text: `At Dhansetu, we believe traders should never walk into the market carrying guesswork like a lantern with a weak flame. As a SEBI-registered Research Analyst, we bring regulated, structured, and deeply researched insights designed to help traders and investors make informed decisions — responsibly, transparently, and ethically.
`,
  },

  //   {
  //     text: `At Dhansetu Research, we use the most advanced and agile methodology to create visually appealing
  // websites and mobile apps that attract your audience and reflect your brand identity, while ensuring fast
  // time-to-market. Our unwavering commitment to creating end-to-end software solutions can enhance
  // your brand value and elevate the dependability and scalability of our software solutions.`,
  //   },
];

const itServiceData2 = [
  {
    text: `Research Analyst (RA) Services refer to research-backed market views, reports, and insights provided under SEBI regulations. These services ensure that every recommendation or opinion is supported by data, logic, and compliance — never by speculation.
`,
  },
  {
    text: `Dhansetu offers a complete bouquet of RA solutions that guide you through the market’s fog with disciplined analysis.`,
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
          <p className="text-black pt-6">
            Are you ready to transform your business with our high-end IT
            services? Contact us to schedule a meeting and discover how Brain
            Auto Tech can help you achieve your digital goals.
          </p>
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
      </div>
    </>
  );
};

export default Itservicessection;

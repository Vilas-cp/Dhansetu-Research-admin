import React from "react";
import Itservicescontent from "@/data/ItServices/Itservicescontent";
import GreyCard1 from "./Itservicescompos/GreyCard1";
// import { AnimatePresence } from "framer-motion";
// import PopUp from "@/components/PopUp";
// import popUpsData from "@/data/ItServicesData/ItServicesData";

const itServiceData1 = [
  {
    text: `As a leading IT development service provider, Brain Auto Tech can transform your business with robust
and scalable IT solutions. Elevate your business with our innovative IT services that are guaranteed to
bring more customers and boost your sales.`,
  },

  {
    text: `At Brain Auto Tech, we use the most advanced and agile methodology to create visually appealing
websites and mobile apps that attract your audience and reflect your brand identity, while ensuring fast
time-to-market. Our unwavering commitment to creating end-to-end software solutions can enhance
your brand value and elevate the dependability and scalability of our software solutions.`,
  },
];

const itServiceData2 = [
  {
    title: "Experienced Developers",
    text: `Auto Brain Tech is backed by seasoned developers who are well-versed in
working with top-notch IT technologies. They have a proven track record of delivering high-performing
web development projects.`,
  },
  {
    title: "360 Degree IT Solutions",
    text: `Our comprehensive IT development services include web development,
mobile app development, game development, graphic &amp; video designing and digital marketing, which
are designed for reliability, efficiency and innovation.`,
  },
  {
    title: "100% Customer Satisfaction",
    text: `Regardless of the size of the project, we aim to deliver the best possible
services that align with your brand identity and meet business goals.`,
  },

  {
    title: "Comprehensive Support",
    text: `Our services don't end at project delivery. We offer continuous support and
maintenance services to ensure your IT systems function flawlessly. Whether it is a security update,
functionality enhancement or troubleshooting, our support team will always be available to assist you.`,
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
            Innovative IT Solutions to Thrive Your Digital Presence
          </h2>
          <div className="space-y-3 py-6">
            {itServiceData1.map((ele, index) => (
              <p key={index} className="text-black text-left">{ele.text}</p>
            ))}
          </div>
          <h2 className="text-black font-bold text-2xl">
            Why Choose Brain Auto Tech as an IT Development Partner?
          </h2>
          <div className="space-y-3 py-6">
            {itServiceData2.map((ele, index) => (
              <p key={index} className="text-black text-left">
                <span className="font-bold">{ele.title} - </span>
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

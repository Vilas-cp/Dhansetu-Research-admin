"use client";
import React from 'react'
import GreyCard1 from './algoservicescomp/GreyCard2'
import Algoservicescontent from '@/data/AlgoServices/algoserviesdata';

const algoServiceData1 = [
  {
    text: `Maximize your stock trading potential with Brain Auto Tech algo trading services that are designed to
enhance your trading performance. Whether you are a quantitative analyst, seasoned trader or a
financial institution, our best and simple algorithmic software provides everything you need to succeed
in the fast-paced financial markets and make huge profits.`,
  },

  {
    text: `At Brain Auto Tech, we believe successful trading heavily depends on accuracy, strategy and speed. Our
free algo trading software is built to give investors and traders the edge they need by leveraging state-
of-the-art technology, flawless algorithms and comprehensive data analysis.`,
  },
];

const algoServiceData2 = [
  {
    title: "Adaptive Learning Algorithms",
    text: `Our cutting-edge algorithms continuously learn and adapt to evolving
market conditions. They leverage AI and machine learning technologies to fine-tune strategies for better
performance.`,
  },
  {
    title: "Automated Trading Systems",
    text: `Our smart trading systems execute trades with efficiency and precision,
so you can focus on business while the system makes you money. The trading platforms are designed to
make decisions in split-seconds, maximizing trading opportunities.`,
  },
  {
    title: "Comprehensive Data Analysis",
    text: `Our algo services help you gain deep insights into current market trends
and conditions with our innovative data analysis tools. By collaborating with leading data providers, we
can deliver up-to-date and accurate market information.`,
  },
  {
    title: "Rigorous Backtesting",
    text: `Test your strategies before they go live with our robust backtesting. The
backtesting engine will test the strategies against historical data to validate their effectiveness before
they are deployed in the market.`,
  },
  {
    title: "Enhanced Risk Management",
    text: `Safeguard your investment with our advanced risk management
features. Define risk parameters, such as taking profit orders and avoiding losses to manage your
exposure and protect your portfolio.`,
  },
];

const Itservicessection = () => {
  return (
    <>
      <div className="pt-[40px]">
        <div className="w-full card-container md:w-[80%] md:px-0 px-2 mx-auto h-auto py-5 flex items-center flex-wrap">
          <h2 className="text-black font-bold text-2xl">
            Unlock Trading Opportunities With Precision Algorithms
          </h2>
          <div className="space-y-3 py-6">
            {algoServiceData1.map((ele, index) => (
              <p key={index} className="text-black text-left">{ele.text}</p>
            ))}
          </div>
          <h2 className="text-black font-bold text-2xl">
            What Makes Our Algo Services Stand Out?
          </h2>
          <div className="space-y-3 py-6">
            {algoServiceData2.map((ele, index) => (
              <p key={index} className="text-black text-left">
                <span className="font-bold">{ele.title} - </span>
                {ele.text}
              </p>
            ))}
          </div>
          <p className="text-black pt-6">
            Contact us today to discover how our algo trading services can
            transform your trading strategy, so you can trade smarter and
            achieve your desired financial goals.
          </p>
        </div>
        <div className="w-full card-container md:w-[80%] mx-auto h-auto py-5 flex justify-evenly flex-row items-center flex-wrap">
          {Algoservicescontent.map((greyCardProps, index) => (
            <GreyCard1 key={index} {...greyCardProps} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Itservicessection
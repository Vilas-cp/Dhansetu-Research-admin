"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Winning() {
  return (
    <div className="my-6">
      <div className="text-center flex flex-col space-y-4">
        <h2 className="text-6xl font-bold text-[#00c2e0]">Our Winning Edge</h2>
        <p className="text-lg px-[20%]">
          Discover BrainAutoTech, the ultimate online trading service featuring  the most advanced, cutting-edge
          indicators that unveil precise{" "}
          <span className="text-green-500">BUY</span> and{" "}
          <span className="text-red-500">SELL</span> signals, catapulting your
          trading success!
        </p>
        <div className="flex flex-col lg:flex-row justify-center lg:space-x-4 ">
          <div className="w-full lg:w-[500px] flex flex-row justify-end">
            <div className="lg:p-2 scale-75 lg:scale-100">
              <MobileComp />
            </div>
          </div>
          <div className="py-10 flex flex-col space-y-3 w-full lg:w-[700px] justify-between px-5">
            <RightComp
              title={"Maximize in every asset and timeframe"}
              para={`Conquer the world of cryptocurrency, stocks, and forex in any timeframe on TradingView.`}
            />
            <RightComp
              title={"Explore additional features to elevate your trading"}
              para={`Unlock the power of our volatility bands, support/resistance levels and more!`}
            />
            <RightComp
              title={"Stay one step ahead with real-time alerts"}
              para={`Customize your own alerts and get instant notifications directly to your phone or computer.`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function RightComp({ title, para }) {
  const paraRef = useRef(null);

  useEffect(() => {
    const element = paraRef.current;
    gsap.fromTo(
      element,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex space-x-6 items-center">
        <div className="h-full">
          <div className="h-7 w-7">
            <img
              className="h-full w-7"
              src="https://img.icons8.com/office/80/checked--v1.png"
              alt="checked--v1"
            />
          </div>
        </div>
        <h4 className="font-bold text-base lg:text-2xl text-left">{title}</h4>
      </div>
      <div className="">
        <ul className="list-disc text-left pl-[70px] lg:pl-24">
          <li ref={paraRef}>{para}</li>
        </ul>
      </div>
    </div>
  );
}

function MobileComp() {
  const mobileRef = useRef(null);

  useEffect(() => {
    const element = mobileRef.current;

    gsap.fromTo(
      element,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div ref={mobileRef} className="relative w-[225px] h-[425px] mt-10">
      <div className="w-[225px] h-[425px] z-20">
        <div className="absolute w-[225px] h-[425px] z-30 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <img
            className="h-full object-cover"
            src="/graphics/phone.avif"
            alt=""
          />
        </div>
        <div className="absolute w-[200px] h-[410px] z-20 -translate-x-1/2 -translate-y-[50%] left-1/2 top-1/2">
          <img
            className=" h-full w-full object-cover rounded-[35px]"
            src="/graphics/ss2.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="w-[225px] h-[425px] absolute -left-28 -top-8 z-10">
        <div className="absolute w-[225px] h-[425px] z-10 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <img
            className="h-full object-cover"
            src="/graphics/phone.avif"
            alt=""
          />
        </div>
        <div className="absolute w-[200px] h-[410px] -translate-x-1/2 -translate-y-[50%] left-1/2 top-1/2">
          <img
            className=" h-full w-full object-cover rounded-[35px]"
            src="/graphics/ss2.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Winning;

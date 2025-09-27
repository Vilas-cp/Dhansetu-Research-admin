"use client";
import React, { useEffect, useRef } from "react";
import { Poppins } from "next/font/google";
const poppinsFont = Poppins({ subsets: ["latin"], weight: "300" });
const poppinsFont1 = Poppins({ subsets: ["latin"], weight: "700" });
const poppinsFont2 = Poppins({ subsets: ["latin"], weight: "500" });
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Lifetime({ paymentForm, setSelectedStrategy }) {
  const rightSide = useRef();
  useEffect(() => {
    const element = rightSide.current;
    gsap.fromTo(
      element,
      { scale: 0.7, opacity: 0.5 },
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
    <div className="px-[5%] pt-6 pb-[50px] ">
      <div className="w-full lg:flex-row flex flex-col space-y-5 lg:space-y-0 justify-center lg:space-x-7">
        <div className="flex flex-col items-start">
          <h2 className="font-bold text-5xl text-[#00c2e0]">
            <span className={poppinsFont1.className}>LIFETIME ACCESS</span>
          </h2>
          <div className="flex flex-row items-center relative py-10 pl-6">
            <div className={poppinsFont2.className}>
              <ul className="list-disc text-xl space-y-4">
                <li>Every premium tool included</li>
                <li>Updates for life</li>
                <li>Dedicated customer support</li>
                <li>No restrictions on usage</li>
              </ul>
            </div>
            <div className="h-[400px] hidden md:block w-[300px] absolute -z-50">
              <img
                alt=""
                src="/graphics/grow.avif"
                className="-rotate-[30deg] object-contain  h-full w-full absolute -translate-x-1/2 -translate-y-1/2 left-[95%] top-[74%] pointer-events-none"
              />
            </div>
          </div>
        </div>
        <div
          ref={rightSide}
          className="w-full lg:w-80 flex flex-col rounded-2xl overflow-hidden border-[#00c2e0] shadow-[0_0_10px_#00c2e0] bg-[#b9eef6] border-[2px]"
        >
          <div className="w-full h-48 rounded-lg overflow-hidden border-[#00c2e0] border-b-[2px]">
            <img
              alt=""
              className="h-full w-full object-cover"
              src="/graphics/stock.avif"
            />
          </div>
          <div className="py-7 flex flex-col items-center">
            <h4 className={poppinsFont1.className}>LIFETIME ACCESS</h4>
            <div className={poppinsFont1.className}>
              <p className="text-5xl pt-2">
                <sup>₹</sup> 30,000
              </p>
            </div>
            <div className={poppinsFont.className}>
              <p className="text-xs">One-time payment!</p>
            </div>
            <button
              onClick={() => {
                if (paymentForm.current) {
                  paymentForm.current.scrollIntoView();
                  const newOption = {
                    value: "lifetime",
                    label: "Lifetime Access",
                  };
                  setSelectedStrategy(newOption);
                }
              }}
              className="bg-[#f5511d] py-3 px-5 rounded-3xl text-sm mt-8 text-white hover:bg-[#e04819] focus:ring-2 focus:ring-[#f5511d] focus:outline-none"
            >
              <span className={poppinsFont2.className}>Purchase</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lifetime;

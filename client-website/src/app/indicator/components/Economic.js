"use client";
import React, { useEffect } from "react";
import Economical_content from "@/data/Indicator/Economical";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const poppinsFont = Poppins({ subsets: ["latin"], weight: "600" });
const poppinsFont1 = Poppins({ subsets: ["latin"], weight: "700" });
const poppinsFont2 = Poppins({ subsets: ["latin"], weight: "500" });

const Economic = ({ paymentForm, setSelectedStrategy, indicatorsComp }) => {
  useEffect(() => {
    gsap.fromTo(
      ".image1 img",
      { opacity: 0, scale: 1, y: 100 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".image1",
          start: "bottom bottom",
          end: "top top",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <div className="pb-[50px]">
      <div className="md:flex md:items-center md:justify-center px-5">
        <div className={poppinsFont2.className}>
          <div className=" md:w-[400px] bg-[#b9eef6] border-[2px] border-[#00c2e0] text-black py-2 px-4 rounded-3xl transition-all duration-300 shadow-[0_0_10px_#00c2e0] mx-4">
            <div className="text-center text-2xl px-3 pb-2 pt-8 text-[#00c2e0]">
              <div className={poppinsFont.className}>
                Affordable<span className="text-black"> Performance</span>
              </div>
            </div>
            {Economical_content.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 py-6 mx-3"
              >
                <div className="text-[#00c2e0]">{item.imgsrc}</div>

                <p className="text-wrap">{item.description}</p>
              </div>
            ))}
            <div className="flex justify-center pb-6 ">
              <button
              onClick={() => {
                 if (indicatorsComp.current) {
                   indicatorsComp.current.scrollIntoView();
                 }
              }}
               className="border-[2px] border-[#00c2e0] hover:bg-[#00c2e0] text-black py-2 px-4 rounded-full transition-all duration-300 shadow-[0_0_10px_#00c2e0] flex items-center justify-center gap-1">
                <p>Explore Indicators</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <div className="flex items-center justify-center py-6 image1 ">
            <img
              src="https://static.wixstatic.com/media/ad6c04_470109d98628495d9f3cc1c0c98b9856~mv2.jpg/v1/crop/x_16,y_0,w_1416,h_787/fill/w_1194,h_656,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/image_123650291(2)_JPG.jpg"
              alt="image_123650291(2).JPG"
              className="md:w-[750px] md:h-[450px] w-[400px] h-[250px] object-cover border-[7px] rounded-md shadow-2xl border-black relative"
              style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.9)" }}
              width="350"
              height="320"
              loading="lazy"
              data-ssr-src-done="true"
              fetchPriority="high"
            ></img>
            <div
              className="bg-[#151515] absolute w-[100px] md:w-[140px] h-[80px] z-[-10] transform md:translate-y-64 translate-y-40 "
              style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.9)" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="bg-[#00c2e0] w-full h-[60px] mt-12 flex items-center justify-center">
        <div className="flex items-center justify-center gap-4">
          <div className="text-lg text-white font-semibold">
            {" "}
            <span className={poppinsFont.className}>GET LIFETIME ACCESS</span>
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
            className="border-[2px] text-sm border-[#f5511d] bg-[#f5511d] text-white py-2 px-4 rounded-full transition-all duration-300 shadow-[0_0_5px_#f5511d] flex items-center justify-center gap-1 "
          >
            <span className={poppinsFont.className}>BUY NOW</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Economic;

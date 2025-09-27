"use client";
import React, { useRef } from "react";
import GreyCard from "./OurServicesSectionComps/GreyCard";
import greyCardContent from "@/data/OurServicesSection/GreyCardContent";
import companySVGsFooter from "@/data/OurServicesSection/CompanySVGsFooter";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function OurServicesSection({ setLoading, indexLoad }) {
  const ourServiceSection = useRef();
  useGSAP(
    () => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          toggleActions: "restart pause restart pause",
          trigger: ".card-container",
        },
      });

      t1.from(".card-1", {
        x: -200,
        duration: 1,
        opacity: 0,
      }).to(".card-1", {
        x: 0,
        opacity: 1,
        duration: 1,
      });

      const t2 = gsap.timeline({
        scrollTrigger: {
          toggleActions: "restart pause restart pause",
          trigger: ".card-container",
        },
      });

      const rightPos = window.innerWidth > 768 ? 200 : 10;
      t2.from(".card-2", {
        x: rightPos,
        duration: 1,
        opacity: 0,
      }).to(".card-2", {
        x: 0,
        opacity: 1,
        duration: 1,
      });

      const t3 = gsap.timeline({
        scrollTrigger: {
          toggleActions: "restart pause restart pause",
          trigger: ".svg-icons",
        },
      });

      t3.from(".svg-icons", {
        duration: 1,
        scale: 1,
        delay: 0.1,
        opacity: 0,
      }).to(".svg-icons", {
        opacity: 1,
        duration: 1,
      });
      const t4 = gsap.timeline({
        scrollTrigger: {
          toggleActions: "restart pause restart pause",
          trigger: ".p1",
        },
      });
      const scalePos = window.innerWidth > 768 ? 0.7 : 0.0;
      t4.from(".p1", {
        y: 5,
        scaley: 1.3,
        scaleX: 1 + scalePos,
        duration: 1,
        opacity: 0,
      }).to(".p1", {
        y: 0,
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        duration: 1,
      });

      setLoading((prevLoad) => {
        const newLoading = [...prevLoad];
        newLoading[indexLoad] = true;
        return newLoading;
      });
    },

    { scope: ourServiceSection }
  );
  return (
    <section
      ref={ourServiceSection}
      className="xl:pt-[8.5vh] pt-[80px] border-2"
    >
      <section className="pt-20 pb-6 w-full flex flex-col items-center">
        <p className="text-[#627792] font-semibold text-xs tracking-widest text-center">
          OUR SERVICES
        </p>
        <h2 className="text-3xl font-bold text-center mt-2">
          Our Awesome Services
        </h2>

        <div className="w-full card-container md:w-[80%] mx-auto h-auto py-5 mt-7 flex justify-evenly flex-row items-center flex-wrap">
          {greyCardContent.map((greyCardProps, index) => (
            <GreyCard key={index} {...greyCardProps} index={index} />
          ))}
        </div>

        <p className="text-center text-slate-500 px-6 p1">
          Do you want to learn more about how this works?{" "}
          <span className="font-medium underline text-slate-700">
            <a href="https://brainautotech.gitbook.io/intro/" target="_blank" title="Brain Auto Tech Docs">Learn more here.</a>
          </span>
        </p>
        <div className="w-[80%] border-t-2 border-slate-300 mt-6 pt-4 flex flex-col justify-evenly items-center svg-icons">
          {/* {companySVGsFooter.map((companyProps, index) => (
            <img
              className="md:h-10 mx-2 mt-3 "
              alt=""
              {...companyProps}
              key={index}
            />
          ))} */}
          <p className="text-center font-semibold animate-pulse">
            We are not a investment advisor, therefore, none of our ALGO
            STRATEGIES shall be considered as an investment advice.
          </p>
          <p className="text-center font-semibold animate-pulse">
            Market participants shall use these ALGO STRATEGIES for their
            knowledge purposes only.
          </p>
          <p className="text-center font-semibold animate-pulse">
            CONSULT YOUR INVESTMENT ADVISOR BEFORE INVESTING.
          </p>
          <p className="text-center font-semibold animate-pulse">
            {"BrainAutotech ISN'T LIABLE FOR YOUR PROFITS OR LOSSES."}
          </p>
          <p className="text-center font-semibold animate-pulse">
            ALL THE FEES PAID TO BrainAutoTech IS NON - REFUNDABLE. Any dispute
            arising under these terms and conditions shall be subject to the
            Indore, M.P. jurisdiction only.
          </p>
        </div>
      </section>
    </section>
  );
}

export default OurServicesSection;

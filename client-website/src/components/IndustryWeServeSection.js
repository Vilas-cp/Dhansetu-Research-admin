"use client";
import listOfSector from "@/data/IndustryWeServeSection/ListOfSector";
import React, { useRef } from "react";
import SectorCard from "./IndustryWeServeComps/SectorCard";
import BrandCard from "./IndustryWeServeComps/BrandCard";
import brandCardDetails from "@/data/IndustryWeServeSection/BrandCardDetails";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function IndustryWeServeSection({ setLoading, indexLoad}) {
  const industryWeServeSection = useRef();
  useGSAP(
    () => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          toggleActions: "restart pause restart pause",
          trigger: ".p1",
          // scrub: true,
          // snap: 1,
          // pin: true,
        },
      });

      t1.from(".p1", {
        x: -100,
        duration: 1.5,
        opacity: 0.5,
      }).to(".p1", {
        x: 0,
        opacity: 1,
        duration: 1.5,
      });

      const t2 = gsap.timeline({
        scrollTrigger: {
          toggleActions: "restart pause restart pause",
          trigger: ".h1",
        },
      });

      t2.from(".h1", {
        x: -100,
        duration: 1,
        opacity: 0,
      }).to(".h1", {
        x: 0,
        opacity: 1,
        duration: 1,
      });

      const t3 = gsap.timeline({
        scrollTrigger: {
          toggleActions: "restart pause restart pause",
          trigger: ".p2",
        },
      });
      const rightPos = window.innerWidth > 768 ? 200 : 10;
      t3.from(".p2", {
        x: rightPos,
        opacity: 0,
        duration: 1,
      }).to(".p2", {
        x: 0,
        opacity: 1,
        duration: 1,
      });

      const t4 = gsap.timeline({
        scrollTrigger: {
          toggleActions: "restart pause restart pause",
          trigger: ".sector-card-container",
        },
      });

      for (let index = 1; index <= 5; index++) {
        t4.from(
          `.sector-card-${index}`,
          {
            y: 200,
            opacity: 0.3,
            duration: 1,
          },
          0.25 * index
        ).to(
          `.sector-card-${index}`,
          {
            y: 0,
            opacity: 1,
            duration: 1,
          },
          0.25 * index
        );
      }

      const t5 = gsap.timeline({
        scrollTrigger: {
          toggleActions: "restart pause restart pause",
          trigger: ".brand-card-1",
        },
      });

      for (let index = 1; index <= 3; index++) {
        t5.from(
          `.brand-card-${index}`,
          {
            y: 5,
            scale: 0.5,
            opacity: 0,
            duration: 1,
          },
          0
        ).to(
          `.brand-card-${index}`,
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
          },
          0
        );
      }

      setLoading((prevLoad) => {
        const newLoading = [...prevLoad];
        newLoading[indexLoad] = true;
        return newLoading;
      });
    },

    { scope: industryWeServeSection }
  );
  return (
    <section
      ref={industryWeServeSection}
      className="xl:pt-[8.5vh] pt-[80px] bg-[#181123]"
    >
      <section className="bg-[#181123] px-[10%] py-10 flex flex-col justify-between items-center">
        <div className="flex flex-row justify-between items-center flex-wrap">
          <div className="md:w-[40%] w-full">
            <p className="tracking-widest text-xs text-[#1dc2ef] p1">
              INDUSTRIES WE SERVE
            </p>
            <h2 className="text-white text-2xl font-bold h1">
              Managed IT services customized for your industry
            </h2>
          </div>
          <div className="md:w-[40%] w-full text-[#9b9aad] text-base p2">
            {`We are Providing Algo Software is one of the most leading software, which helps to automate your 
          trade-in effectively & efficiently. Algo-Software is the term used to describe the use of preset software 
          to execute trades. A set of instructions or an algorithm is added to computers`}
          </div>
        </div>

        <div className="flex flex-row justify-between items-center flex-wrap mt-4 sector-card-container">
          {listOfSector.map((sectorDetails, index) => (
            <SectorCard index={index} key={index} {...sectorDetails} />
          ))}
        </div>

        <p className="text-[#1dc2ef] text-xs font-semibold tracking-widest mt-24">
        How it works
        </p>
        <h2 className="text-3xl font-bold text-white mt-2">
        3 Simple steps to start
        </h2>
        <div className="h-36 pt-8 flex flex-row justify-between items-center w-full flex-wrap brand-card-container">
          <span className="hidden bg-[#29b2fe]/65"></span>
          <span className="hidden bg-[#71cbcc]/65"></span>
          <span className="hidden bg-[#8a49a1]/65"></span>
          {brandCardDetails.map((brandCard, index) => (
            <BrandCard key={index} index={index} {...brandCard} />
          ))}
        </div>
      </section>
    </section>
  );
}

export default IndustryWeServeSection;

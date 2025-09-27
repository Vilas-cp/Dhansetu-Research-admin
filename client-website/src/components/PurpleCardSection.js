"use client";
import React, { useRef } from "react";
import ServiceCard from "./PurpleCardSectionComps/ServiceCard";
import serviceCardDetails from "@/data/PurpleCardSection/ServiceCardDetails";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function PurpleCardSection({ setLoading, indexLoad }) {
  const purpleSectionRef = useRef();
  useGSAP(
    () => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          toggleActions: "restart pause restart pause",
          trigger: ".p1",
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
          trigger: ".service-card",
          start: "-200px bottom",
          end: "0px top",
        },
      });

      t4.from(".service-card", {
        y: 200,
        opacity: 0,
        duration: 1,
      }).to(".service-card", {
        y: 0,
        opacity: 1,
        duration: 1,
      });

      const t5 = gsap.timeline({
        scrollTrigger: {
          toggleActions: "restart pause restart pause",
          trigger: ".p3",
        },
      });

      t5.from(".p3", {
        scale: 0.5,
        opacity: 0,
        duration: 1,
      }).to(".p3", {
        scale: 1,
        opacity: 1,
        ease: "expoScale(0.5, 1, power2.inOut)",
        duration: 1,
      });

      setLoading((prevLoad) => {
        const newLoading = [...prevLoad];
        newLoading[indexLoad] = true;
        return newLoading;
      });
    },
    { scope: purpleSectionRef }
  );
  return (
    <section
      ref={purpleSectionRef}
      className="xl:pt-[8.5vh] pt-[80px] bg-[#181123] !overflow-hidden"
    >
      <section className="bg-[#181123] px-[10%] pt-10 pb-28 flex flex-col justify-between items-center">
        <div className="flex flex-row justify-between items-center flex-wrap">
          <div className="md:w-[40%] w-full">
            <p className="tracking-widest p1 text-xs text-[#1dc2ef]">
              OUR COMPANY
            </p>
            <h2 className="text-white text-2xl font-bold h1">
              Brain Auto Tech provides best Algo Software for you
            </h2>
          </div>
          <div className="md:w-[40%] w-full text-[#9b9aad] text-base p2">
            {`Explore our ALGO software for automated trading with a range of powerful strategies. Trade seamlessly across multiple brokers for maximum convenience and success in your investments.`}
          </div>
        </div>
        <div className="w-full h-20 lg:pt-10 pt-10 lg:space-y-0 space-y-20 flex service-card-container flex-row justify-between items-center flex-wrap">
          {serviceCardDetails.map((serviceCardDetail, index) => (
            <ServiceCard key={index} {...serviceCardDetail} />
          ))}
        </div>
      </section>
      <section className="bg-[#eceff3] w-full lg:h-52 h-[800px] flex items-center justify-center">
        <p className="text-[#627792] text-center lg:mt-20 mt-[660px] p3">
          Stop wasting time and money on manual trading{" "}
          <span className="text-black underline">
            <a
              href="/algo-services/"
              target="_blank"
              title="Brain Auto Tech Docs"
            >
              Explore our automated services.
            </a>
          </span>
        </p>
      </section>
    </section>
  );
}

export default PurpleCardSection;

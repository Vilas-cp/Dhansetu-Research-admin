"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function ContactUsSection({ setLoading, indexLoad }) {
  const contactUsSectionRef = useRef();
  useGSAP(
    () => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          toggleActions: "restart pause restart pause",
          trigger: ".h1",
          scrub: 1,
        },
      });

      const scalePos = window.innerWidth > 768 ? 0.2 : 0.0;
      t1.from(".h1", {
        opacity: 0.6,
        scaleY: 1.1,
        scaleX: 1 + scalePos,
        duration: 1,
      }).to(".h1", {
        opacity: 1,
        scaleX: 1,
        scaleY: 1,
        duration: 1,
      });

      const t2 = gsap.timeline({
        scrollTrigger: {
          toggleActions: "restart pause restart pause",
          trigger: ".p1",
          scrub: 1,
        },
      });

      t2.from(".p1", {
        opacity: 0.6,
        scaleY: 0.9,
        scaleX: 0.8,
        duration: 1,
      }).to(".p1", {
        opacity: 1,
        scaleX: 1,
        scaleY: 1,
        duration: 1,
      });

      const t3 = gsap.timeline({
        scrollTrigger: {
          toggleActions: "restart pause restart pause",
          trigger: ".contact-us-but",
          start: "-100px bottom",
          end: "0px top",
          scrub: 2,
        },
      });

      t3.from(".contact-us-but", {
        opacity: 0.4,
        y: 100,
        duration: 1,
      }).to(".contact-us-but", {
        opacity: 1,
        y: 0,
        duration: 1,
      });
      if (typeof setLoading === "function") {
        setLoading((prevLoad) => {
          const newLoading = [...prevLoad];
          newLoading[indexLoad] = true;
          return newLoading;
        });
      }
    },
    { scope: contactUsSectionRef }
  );
  return (
    <section
      ref={contactUsSectionRef}
      className="w-full py-10 flex flex-col justify-between space-y-5 items-center"
    >
      <p className="text-center text-black text-lg font-semibold">
        {`Let's get started`}
      </p>
      <h2 className="text-center font-bold px-2 lg:px-[30%] text-4xl h1">
        Embrace Brain Auto Tech for emotionless, efficient trading.
      </h2>
      <p className="text-center text-black px-[25%] text-lg tracking-wider p1">
        {`Let our web-based terminal do the heavy lifting.Unlock India's first
        auto robot trading terminal. Maximize profits with Money Machine and
        Eagle trading systems.`}
      </p>
      <a
        href="/contact"
        className="bg-red-400 contact-us-but cursor-pointer transition-colors duration-300 ease-in-out hover:bg-black p-6 text-xl font-bold rounded-lg text-white !mt-10 !mb-0"
      >
        Contact us Now
      </a>
      <img className="w-full md:!-mt-96 -z-10" src="/image/foter.png" alt="" />
    </section>
  );
}

export default ContactUsSection;

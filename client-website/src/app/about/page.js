"use client";
import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import React, { useEffect, useRef, useState } from "react";
import LoadGoogleAdsScript from "@/components/LoadGoogleAdsScript";
import LoadGoogleAdsIframe from "@/components/LoadGoogleAdsIframe";
import Link from "next/link";
import AboutUs from "./components/Aboutus";

const data = [
  {
    imgSrc: `/about/our-mission.jpg`,
    title: `Our`,
    title1: `Mission`,
    desc: `Our mission is simple – to make high-quality research and automation accessible to everyone, not just HNIs and big institutions.`,
    href: `/contact`,
    icon: "🎯",
    bgColor: "bg-blue-50",
  },
  {
    imgSrc: `/about/our-approach.png`,
    title: `We`,
    title1: `believe`,
    desc: [
      `Every trader deserves data-driven insights.`,
      `Every investor should trade with discipline, not emotions.`,
      `Every client should have transparency & control over their portfolio.`,
    ],
    icon: "💡",
    bgColor: "bg-green-50",
  },
  {
    imgSrc: `/about/about-us.png`,
    title: `Our`,
    title1: `Vision`,
    desc: `We aim to empower 1,00,000+ traders in India by 2030 with smart, research-backed, automated trading solutions – bridging the gap between market opportunities and individual traders.`,
    icon: "🚀",
    bgColor: "bg-purple-50",
  },
  {
    imgSrc: `/about/our-mission.png`,
    title: `Our`,
    title1: `Edge`,
    desc: [
      `SEBI-Compliant Research: No false promises, no misleading claims.`,
      `Algo Integration: Automated trade execution for precision & speed.`,
      `Education + Execution: We teach you what we do, not just sell tips.`,
      `Focus on Risk-Management: Protecting capital comes first.`,
    ],
    icon: "⚡",
    bgColor: "bg-orange-50",
  },
];

const Aboutus = () => {
  const [visibleCards, setVisibleCards] = useState({});
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          setVisibleCards((prev) => ({
            ...prev,
            [index]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -100px 0px" }
    );

    cardRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.dataset.index = index;
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <LoadGoogleAdsScript />
      <div>
        <LoadGoogleAdsIframe />
        <Header1 />

        {/* Hero Section */}
        {/* <div className="pt-[80px] flex justify-center items-center bg-[#002366] h-[42vh] xl:h-[47vh] w-full">
          <h1 className="text-white md:text-[8vh] text-[6vh] font-[800] text-center tracking-[1px]">
            About Dhansetu
          </h1>
        </div>

      
        <div className="flex pt-[40px] justify-center pb-[30px]">
          <div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-[5vh] px-[3vh] xl:px-[40vh]">
              <div>
                <img
                  src="https://live.21lab.co/nanosoft/wp-content/uploads/2018/05/283-pai4685-jj-id-392158-jpeg1-1000x852.jpg"
                  className="rounded-md shadow-2xl hover:-translate-y-3 transition-transform duration-300 ease-out"
                  alt="Dhansetu Research Office"
                />
              </div>
              <div className="flex-row">
                <img
                  src="https://live.21lab.co/nanosoft/wp-content/uploads/2018/05/26-jj-t-05282_2-id-140411-jpeg1-1000x400.jpg"
                  className="rounded-md shadow-2xl hover:-translate-y-3 transition-transform duration-300 ease-out"
                  alt="Trading Technology"
                />
                <div className="pt-[45px]">
                  <img
                    src="https://live.21lab.co/nanosoft/wp-content/uploads/2018/05/rawpixel-com-567026-unsplash1-1000x400.jpg"
                    className="rounded-md shadow-2xl hover:-translate-y-3 transition-transform duration-300 ease-out"
                    alt="Team Collaboration"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <AboutUs />
        <ContactUsSection setLoading={null} indexLoad={0} />
        {/* <hr className="pb-[30px]" /> */}
        <Footer />
      </div>
    </>
  );
};

export default Aboutus;

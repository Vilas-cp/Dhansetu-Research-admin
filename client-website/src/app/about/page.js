"use client";
import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import React, { useEffect, useRef, useState } from "react";
import LoadGoogleAdsScript from "@/components/LoadGoogleAdsScript";
import LoadGoogleAdsIframe from "@/components/LoadGoogleAdsIframe";
import Link from "next/link";

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
        <div className="pt-[80px] flex justify-center items-center bg-[#002366] h-[42vh] xl:h-[47vh] w-full">

          <h1 className="text-white md:text-[8vh] text-[6vh] font-[800] text-center tracking-[1px]">
            About Dhansetu
          </h1>

        </div>

        {/* Image Gallery Section */}
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

            {/* Main Description */}
            <h2 className="text-center text-[#0e2b5c] md:text-[4vh] text-[3vh] font-[700] text-wrap pt-[40px]">
              {`Dhansetu Research is not just another market advisory – it is your bridge (“Setu”) to`}
              <br className="hidden md:block" /> financial freedom.
            </h2>
            <div>
              <p className="font-medium text-center pt-[20px] xl:px-[50vh] xl:leading-relaxed text-[#627792]">
                {`We are a SEBI-registered Research Analyst firm based in Indore, Madhya Pradesh, offering a powerful combination of professional equity research, algorithmic trading technology, and disciplined trade execution to help traders and investors grow with confidence.
Founded by Mr. Vivek Singh Rajpoot, a seasoned market expert with over 8 years of experience, Dhansetu is built on trust, transparency, and technology. Our separate client support and technical teams ensure seamless onboarding, trade automation, and query resolution for every client.`}
              </p>
            </div>
          </div>
        </div>

        {/* New Data Section */}
        <div className="bg-gray-50 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-[#0e2b5c] md:text-[6vh] text-[4vh] font-[700] mb-4">
                Why Choose Dhansetu?
              </h2>
              <div className="w-24 h-1 bg-[#aee9e7] mx-auto rounded-full"></div>
              <p className="text-[#627792] text-lg mt-6 max-w-3xl mx-auto font-medium">
                Discover what makes us the leading choice for automated trading
                solutions in India
              </p>
            </div>

            {/* Data Cards Grid */}
            <div className="space-y-20">
              {data.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`transform transition-all duration-700 ${visibleCards[index]
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                    }`}
                >
                  <div className="w-full max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-shadow duration-300">
                      {/* Icon */}
                      <div className="text-6xl mb-8 text-center">
                        {item.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-[#0e2b5c] text-4xl md:text-5xl font-bold mb-8 text-center">
                        <span>{item.title}</span>{" "}
                        <span className="text-[#e32130]">{item.title1}</span>
                      </h3>

                      {/* Description */}
                      {Array.isArray(item.desc) ? (
                        <div className="space-y-6 mb-8">
                          {item.desc.map((point, i) => (
                            <div key={i} className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-3 h-3 bg-[#aee9e7] rounded-full mt-2"></div>
                              <p className="text-[#627792] text-lg leading-relaxed font-medium">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-[#627792] text-lg leading-relaxed font-medium text-center mb-8">
                          {item.desc}
                        </p>
                      )}

                      {/* CTA Button */}
                      {item.href && (
                        <div className="text-center">
                          <Link
                            href={item.href}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0e2b5c] text-white font-semibold rounded-xl hover:bg-[#1a3a6b] transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg hover:shadow-xl"
                          >
                            Get Started Today
                            <svg
                              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Statistics Section */}
            <div className="mt-20 bg-white rounded-2xl shadow-xl p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-5xl font-black text-[#0e2b5c] mb-2">
                    1,00,000+
                  </div>
                  <div className="text-[#627792] font-semibold">
                    Traders to Empower by 2030
                  </div>
                </div>
                <div>
                  <div className="text-5xl font-black text-[#e32130] mb-2">
                    100%
                  </div>
                  <div className="text-[#627792] font-semibold">
                    SEBI Compliant Research
                  </div>
                </div>
                <div>
                  <div className="text-5xl font-black text-[#aee9e7] mb-2">
                    24/7
                  </div>
                  <div className="text-[#627792] font-semibold">
                    Automated Trading
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContactUsSection setLoading={null} indexLoad={0} />
        <hr className="pb-[30px]" />
        <Footer />
      </div>
    </>
  );
};

export default Aboutus;

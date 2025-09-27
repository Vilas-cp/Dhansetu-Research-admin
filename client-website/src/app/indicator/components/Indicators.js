"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Poppins } from "next/font/google";
import BlobComp3 from "./Blobcomp3";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const poppinsFont = Poppins({ subsets: ["latin"], weight: "600" });
const poppinsFont1 = Poppins({ subsets: ["latin"], weight: "700" });
const poppinsFont2 = Poppins({ subsets: ["latin"], weight: "500" });

const Indicators_Data = [
  {
    name: "Cluster",
    ImgSrc: "/indicator/cluster.png",
  },
  {
    name: "Long sma Indicator",
    ImgSrc: "/indicator/long_trend.png",
  },
  {
    name: "Bat Positional Indicator",
    ImgSrc: "/indicator/bat.png",
  },
  {
    name: "Long rma",
    ImgSrc: "/indicator/long_rma.png",
  },
];

const Indicators = ({ indicatorsComp }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const items = containerRef.current.querySelectorAll(".gsap-item");

    items.forEach((item) => {
      gsap.fromTo(
        item,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);
  return (
    <div ref={indicatorsComp} className="px-[15%] py-[50px]">
      <BlobComp3 />
      <div className={poppinsFont1.className}>
        <p className="md:text-6xl text-4xl text-black text-center">
          Our <span className="text-[#00c2e0] ">Indicators!</span>
        </p>
      </div>
      <div className="pt-[50px]">
        <div
          className="md:flex md:flex-wrap md:justify-center md:gap-4"
          ref={containerRef}
        >
          {Indicators_Data.map((item, index) => (
            <a
              href={item.ImgSrc}
              target="_blank"
              key={index}
              className="flex flex-col items-center md:w-[calc(50%-1rem)] pt-5 gsap-item"
            >
              <p className={poppinsFont.className}>
                <span className="">{item.name}</span>
              </p>
              <img
                src={item.ImgSrc}
                alt={item.name}
                className="mt-2 cursor-pointer hover:scale-105 md:w-[400px] md:h-[250px] w-[400px] h-[200px] mx-auto border-[2px] border-[#00c2e0] text-black   transition-all duration-300 shadow-[0_0_10px_#00c2e0]"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col pt-20 items-center gap-5 w-full h-[500px] md:h-[1400px]">
        <p className="md:text-6xl text-2xl ">
          <span className={poppinsFont1.className}>Demo Video</span>
        </p>
        <div className="w-full h-[100%]">
          <iframe
            width={"100%"}
            height={"100%"}
            src="https://www.youtube.com/embed/7jECzktd_5s?si=hgNsFI_BMjGcAdIK"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-full  h-[100%]">
          <iframe
            width={"100%"}
            height={"100%"}
            src="https://www.youtube.com/embed/WnUiATh7Ito?si=n8V3JLRnFjFwGAkS"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Indicators;

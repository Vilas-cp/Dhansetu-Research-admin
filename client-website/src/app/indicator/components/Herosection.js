"use client";

import React, { useEffect } from "react";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import Head from "next/head";
import BlobComp1 from "./Blobcomp1";

const poppinsFont = Poppins({ subsets: ["latin"], weight: "400" });
const poppinsFont1 = Poppins({ subsets: ["latin"], weight: "700" });
const poppinsFont2 = Poppins({ subsets: ["latin"], weight: "500" });

const Herosection = ({ paymentForm, setSelectedStrategy }) => {
  useEffect(() => {
    gsap.fromTo(
      ".image-container img",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.5,
      }
    );
  }, []);

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          as="font"
          type="font/woff2"
          crossorigin="anonymous"
        />
      </Head>

      <div className="pt-[150px] pb-[100px]">
        <BlobComp1 />
        <div className="md:flex justify-between items-center md:px-[15%] gap-0">
          <div className="text text-[7vh] font-[999] md:block hidden">
            <span className="text-[#00c2e0]">
              NOW TAKE <br />
              <span className="">TRADES</span> <br />
              WITHOUT{" "}
            </span>
            <br />
            <span className="text-[#00c2e0]">
              <span className="text-black">CONFUSION</span>
            </span>
            <div className="w-40 flex justify-center items-center ">
              <a href="https://www.tradingview.com/" target="_blank">
                <img src="https://searchvectorlogo.com/wp-content/uploads/2021/07/tradingview-logo-vector.png" />
              </a>
            </div>
          </div>

          <div className="text-center text-[3vh] font-[999] md:hidden">
            <span className="text-[#00c2e0]">TRADE SMARTER WITH </span>
            <br />
            <span className="text-[#00c2e0]">
              <span className="text-black">BRAIN</span>AUTOTECH
            </span>
          </div>

          <div className="flex justify-center">
            <div className="image-container relative">
              <img
                src="https://static.wixstatic.com/media/ad6c04_5286e68f2dd54b9499038c70fb6333c4~mv2.png/v1/fill/w_587,h_440,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/use%20this.png"
                alt="Laptop"
                width={500}
                srcSet="https://static.wixstatic.com/media/ad6c04_5286e68f2dd54b9499038c70fb6333c4~mv2.png/v1/fill/w_587,h_440,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/use%20this.png 1x, https://static.wixstatic.com/media/ad6c04_5286e68f2dd54b9499038c70fb6333c4~mv2.png/v1/fill/w_1174,h_880,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/use%20this.png 2x"
                loading="lazy"
                className="object-cover"
              />
              <div className="absolute top-3 left-[63px] xl:block hidden">
                <img
                  src="https://plus.unsplash.com/premium_photo-1682310075673-b408eb1ca6fd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
                  alt="Background graphic"
                  className="object-cover"
                  width="376"
                  height="323"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center text-[2.5vh] font-normal tracking-tight">
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
            className="border-[2px] border-[#00c2e0] text-black py-2 px-4 rounded-full transition-all duration-300 shadow-[0_0_10px_#00c2e0] hover:bg-[#00c2e0]"
          >
            <span className={poppinsFont2.className}>GET ACCESS</span>
          </button>
        </div>
        <div className="text-center text-[2vh] pt-[20px] leading-snug px-3">
          <span className={poppinsFont2.className}>
            Maximize your trades in stocks, forex, and crypto with this
            analytical trading tool.
          </span>
        </div>
      </div>
    </>
  );
};

export default Herosection;

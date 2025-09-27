"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import MovingComponent from "react-moving-text";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PreloadResources from "@/app/preload-resources";

function SlidingHeroSection({ setLoading, indexLoad }) {
  PreloadResources();
  useEffect(() => {
    // const img1 = new window.Image();
    // img1.src = "";
    setLoading((prevLoad) => {
      const newLoading = [...prevLoad];
      newLoading[indexLoad] = true;
      return newLoading;
    });
  }, []);
  return (
    /*On header1 pt-0 else pt-[120px]*/
    <div className="xl:pt-[80px] pt-[80px]">
      <Swiper
        // spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-[100%] mr-0 pr-0"
      >
        <SwiperSlide>
          <div className="relative xl:h-[680px] sm:h-[60vh]  h-[70vh]">
            <div
              className="absolute inset-0 bg-cover bg-center w-full filter contrast-150 "
              style={{
                backgroundImage: `url('/sls-images/1.jpeg')`,
              }}
            >
              <div className="w-full h-full bg-blue-700/50">
                <div className="flex justify-center xl:pt-[120px] pt-[5vh] mx-[2px]">
                  <div className="gap-[-10px]">
                    <MovingComponent
                      type="fadeInFromTop"
                      duration="600ms"
                      delay="0s"
                      direction="normal"
                      timing="linear"
                      iteration="1"
                      fillMode="forwards"
                    >
                      <h1 className="xl:text-[50px] text-[4vh] font-medium text-white">
                        Best <br className="block xl:hidden"></br>ALGO Software
                      </h1>
                    </MovingComponent>
                    <MovingComponent
                      type="fadeInFromTop"
                      duration="500ms"
                      delay="0s"
                      direction="normal"
                      timing="linear"
                      iteration="1"
                      fillMode="forwards"
                    >
                      <p className="xl:text-[95px] text-[7vh] font-[800] text-white">
                        Best
                      </p>
                    </MovingComponent>
                    <MovingComponent
                      type="fadeInFromTop"
                      duration="400ms"
                      delay="0s"
                      direction="normal"
                      timing="linear"
                      iteration="1"
                      fillMode="forwards"
                    >
                      <p className="xl:text-[95px] text-[7vh] font-[800] text-white">
                        in the Market.
                      </p>
                    </MovingComponent>
                    <CTA />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative xl:h-[680px] sm:h-[60vh] h-[70vh]">
            <div
              className="absolute inset-0 bg-cover bg-center w-full filter contrast-150"
              style={{
                backgroundImage: `url('/sls-images/2.jpeg')`,
              }}
            >
              <div className="w-full h-full bg-blue-700/50">
                <div className="flex justify-center xl:pl-[20px] xl:pt-[120px] xl:justify-start pt-[5vh] pl-[1vh]">
                  <div className="flex-col justify-start">
                    <MovingComponent
                      type="fadeInFromTop"
                      duration="600ms"
                      delay="0s"
                      direction="normal"
                      timing="linear"
                      iteration="1"
                      fillMode="forwards"
                    >
                      <p className="xl:text-[95px] text-[6vh] font-[800] text-white">
                        Multiple Trading
                      </p>
                    </MovingComponent>
                    <MovingComponent
                      type="fadeInFromTop"
                      duration="500ms"
                      delay="0s"
                      direction="normal"
                      timing="linear"
                      iteration="1"
                      fillMode="forwards"
                    >
                      <p className="xl:text-[95px] text-[6vh] font-[800] text-white mt-0">
                        And Investment Strategies
                      </p>
                    </MovingComponent>
                    <MovingComponent
                      type="fadeInFromTop"
                      duration="400ms"
                      delay="0s"
                      direction="normal"
                      timing="linear"
                      iteration="1"
                      fillMode="forwards"
                    >
                      <p className="xl:text-[50px] text-[4vh] font-medium text-white">
                        Fully Automated Strategies
                      </p>
                    </MovingComponent>
                    <CTA type="middle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative xl:h-[680px] sm:h-[60vh] h-[70vh]">
            <div
              className="absolute inset-0 bg-cover bg-center w-full filter contrast-150"
              style={{
                backgroundImage: `url('/sls-images/3.jpeg')`,
              }}
            >
              <div className="w-full h-full bg-blue-700/50">
                <div className="flex xl:justify-end justify-center xl:pt-[120px] xl:pr-[20px]  pt-[5vh] ">
                  <div className="xl:gap-[-10px] flex-col justify-start">
                    <MovingComponent
                      type="fadeInFromTop"
                      duration="600ms"
                      delay="0s"
                      direction="normal"
                      timing="linear"
                      iteration="1"
                      fillMode="forwards"
                    >
                      <p className="xl:text-[50px] text-[4.5vh] font-medium text-white">
                        Easy to <br className="block xl:hidden"></br>Use
                        Software
                      </p>
                    </MovingComponent>
                    <MovingComponent
                      type="fadeInFromTop"
                      duration="500ms"
                      delay="0s"
                      direction="normal"
                      timing="linear"
                      iteration="1"
                      fillMode="forwards"
                    >
                      <p className="xl:text-[95px] text-[7.5vh] font-[800] text-white">
                        Multiple Brokers
                      </p>
                    </MovingComponent>
                    <MovingComponent
                      type="fadeInFromTop"
                      duration="400ms"
                      delay="0s"
                      direction="normal"
                      timing="linear"
                      iteration="1"
                      fillMode="forwards"
                    >
                      <p className="xl:text-[95px] text-[7.5vh] font-[800] text-white">
                        Supported.
                      </p>
                    </MovingComponent>
                    <CTA />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

const CTA = ({ type }) => {
  return (
    <MovingComponent
      type="fadeInFromTop"
      duration="400ms"
      delay="0s"
      direction="normal"
      timing="linear"
      iteration="1"
      fillMode="forwards"
    >
      <div
        className={`mt-10 flex ${
          type === "middle" && "xl:w-[55%]"
        } w-full justify-between`}
      >
        <a
          href="/contact"
          className="bg-[#f4511d]  contact-us-but cursor-pointer transition-colors duration-300 ease-in-out hover:bg-black text-sm p-3 xl:p-6 xl:text-xl font-bold rounded-lg text-white"
        >
          Contact us
        </a>
        {/* <a
          href="/contact"
          target="_blank"
          className="bg-[#f4511d]  contact-us-but cursor-pointer transition-colors duration-300 ease-in-out hover:bg-black text-sm p-3 xl:p-6 xl:text-xl font-bold rounded-lg text-white"
        >
          Book Demo
        </a>
        <a
          href="/contact"
          target="_blank"
          className="bg-[#f4511d]  contact-us-but cursor-pointer transition-colors duration-300 ease-in-out hover:bg-black text-sm p-3 xl:p-6 xl:text-xl font-bold rounded-lg text-white"
        >
          Try Now
        </a> */}
      </div>
    </MovingComponent>
  );
};

export default SlidingHeroSection;

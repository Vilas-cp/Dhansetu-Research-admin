import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import React from "react";
import LoadGoogleAdsScript from "@/components/LoadGoogleAdsScript";
import LoadGoogleAdsIframe from "@/components/LoadGoogleAdsIframe";

const Aboutus = () => {
  return (
    <>
      <LoadGoogleAdsScript />
      <div>
        <LoadGoogleAdsIframe />
        <Header1 />
        <div className="pt-[80px] flex justify-center items-center bg-[#aee9e7]  h-[42vh] xl:h-[60vh] w-full ">
          <div className="">
            <h1 className="text-[#0e2b5c] md:text-[8vh] text-[6vh] font-[800] text-center tracking-[1px]">
              About Brain Auto Tech
            </h1>
            <p className="text-center xl:text-[2vh] text-[1.5vh] text-[#627792] tracking-[1px] text-pretty font-semibold">
              We are Providing Algo Software is one of the most leading software
              which helps to automate your trade-in effectively
            </p>
          </div>
        </div>
        <div className="flex pt-[40px] justify-center pb-[30px]">
          <div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-[5vh] px-[3vh] xl:px-[40vh]">
              <div>
                <img
                  src="https://live.21lab.co/nanosoft/wp-content/uploads/2018/05/283-pai4685-jj-id-392158-jpeg1-1000x852.jpg"
                  className="rounded-md shadow-2xl hover:-translate-y-3 transition-transform duration-300 ease-out"
                />
              </div>
              <div className="flex-row ">
                <img
                  src="https://live.21lab.co/nanosoft/wp-content/uploads/2018/05/26-jj-t-05282_2-id-140411-jpeg1-1000x400.jpg"
                  className="rounded-md shadow-2xl hover:-translate-y-3 transition-transform duration-300 ease-out"
                />
                <div className="pt-[45px]">
                  <img
                    src="https://live.21lab.co/nanosoft/wp-content/uploads/2018/05/rawpixel-com-567026-unsplash1-1000x400.jpg"
                    className="rounded-md shadow-2xl hover:-translate-y-3 transition-transform duration-300 ease-out"
                  />
                </div>
              </div>
            </div>
            <h2 className="text-center text-[#0e2b5c] md:text-[4vh] text-[3vh] font-[700] text-wrap pt-[40px]">
              {`Emotionless, automated trading with India's first web-based`}
              <br className="hidden md:block"></br> platform Brain Auto Tech.
            </h2>
            <div className="">
              <p className="font-medium  text-center pt-[20px] xl:px-[50vh] xl:leading-relaxed text-[#627792]">
                {`Brain Auto Tech is always better than manual trading. Brain
              Auto Tech is fully automatic trading without any manual
              intervention. It is a emotionless trading which is very important
              thing while trading because most of the time we loose money due to
              emotions. Our web-based Brain Auto Tech terminal works with
              the leading brokers of India who those are providing facilities of
              API based trading. It is very simple system which gives your
              relief from watching charts all the time and it saves much time to
              do other tasks. Brain Auto Tech is India's First Auto robot
              trading terminal which is based on a web-browser. It is preloaded
              with the best Brain Auto Tech Such as Money Machine and
              Eagle trading system.`}
              </p>
            </div>
          </div>
        </div>
        <ContactUsSection setLoading={null} indexLoad={0} />
        <hr className="pb-[30px]"></hr>
        <Footer />
      </div>
    </>
  );
};

export default Aboutus;

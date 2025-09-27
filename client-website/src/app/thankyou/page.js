import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import LoadGoogleAdsIframe from "@/components/LoadGoogleAdsIframe";
import LoadGoogleAdsScript from "@/components/LoadGoogleAdsScript";
import React from "react";

const Page = () => {
  return (
    <>
      <LoadGoogleAdsScript />
      <LoadGoogleAdsIframe />
      <Header1 />
      <div className="pt-[80px] pb-[30px]">
        <h1 className="w-full bg-[#aee9e7] flex justify-center items-center h-[35vh] text-[#102b5c] font-[999] text-[4vh] xl:text-[8vh]">
          Thank You
        </h1>
        <div>
          <div className="text-center  text-black text-[3vh] pt-[10px] leading-loose font-medium">
            Thank You for showing Interest. We will get back to you shortly
          </div>
          <div className="text-center  text-black text-[3vh] pt-[10px] leading-loose font-medium">
            Until Then, vist our{" "}
            <a href="/algo-services" className="font-bold text-[#4a52be]">
              algo-services
            </a>{" "}
            or{" "}
            <a href="/it-services" className="font-bold text-[#4a52be]">
              it-services
            </a>{" "}
            pages!
          </div>
        </div>
      </div>
      <hr className="pb-[30px]"></hr>
      <Footer />
    </>
  );
};

export default Page;

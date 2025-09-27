import Header1 from "@/components/Header1";
import React from "react";
import Itservicessection from "./compo/algoservicesection";
import Footer from "@/components/Footer";
import LoadGoogleAdsScript from "@/components/LoadGoogleAdsScript";
import LoadGoogleAdsIframe from "@/components/LoadGoogleAdsIframe";

const Page = () => {
  return (
    <>
    <LoadGoogleAdsScript />
    <LoadGoogleAdsIframe />
      <Header1 />
      <div className='pt-[80px]'>
        <h1 className="w-full bg-[#aee9e7] flex justify-center items-center h-[35vh] text-[#102b5c] font-[999] text-[5vh] xl:text-[8vh] ">
          Algo-services
        </h1>
        </div>
      <Itservicessection />
      <hr className="pb-[20px]"></hr>
      <Footer />
    </>
  );
};

export default Page;

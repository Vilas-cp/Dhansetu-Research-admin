import Header1 from "@/components/Header1";
import React from "react";
import Footer from "@/components/Footer";
import PricingSectionComp from "./compo/PricingSectionComp";
import LoadGoogleAdsScript from "@/components/LoadGoogleAdsScript";
import LoadGoogleAdsIframe from "@/components/LoadGoogleAdsIframe";

const Page = () => {
  return (
    <>
      <LoadGoogleAdsScript />
      <LoadGoogleAdsIframe />
      <Header1 />
      <div className="pt-[80px]">
        <h1 className="w-full bg-[#aee9e7] flex justify-center items-center h-[35vh] text-[#102b5c] font-[999] text-[5vh] xl:text-[8vh] ">
          Pricing
        </h1>
      </div>
      <PricingSectionComp />
      <hr className="pb-[20px]"></hr>
      <Footer />
    </>
  );
};

export default Page;

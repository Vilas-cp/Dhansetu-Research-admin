import Header1 from "@/components/Header1";
import React from "react";
import Footer from "@/components/Footer";
import LoadGoogleAdsScript from "@/components/LoadGoogleAdsScript";
import LoadGoogleAdsIframe from "@/components/LoadGoogleAdsIframe";
import PricingTable from "./compo/PricingSectionComp";
import Script from "next/script";

const Page = () => {
  return (
    <>
      <LoadGoogleAdsScript />
      <LoadGoogleAdsIframe />
      <Header1 />
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      {/* <div className="pt-[80px]">
        <h1 className="w-full bg-[#aee9e7] flex justify-center items-center h-[35vh] text-[#102b5c] font-[999] text-[5vh] xl:text-[8vh] ">
          Pricing
        </h1>
      </div> */}
      <PricingTable/>
      <hr className="pb-[20px]"></hr>
      <Footer />
    </>
  );
};

export default Page;

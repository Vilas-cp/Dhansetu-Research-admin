import Header1 from "@/components/Header1";
import React from "react";
import Footer from "@/components/Footer";
import LoadGoogleAdsScript from "@/components/LoadGoogleAdsScript";
import LoadGoogleAdsIframe from "@/components/LoadGoogleAdsIframe";
import ItServiceData from "@/data/ItServicesData/ItServicesData";
import RightPanelItService from "../compo/Itservicescompos/RightPanelItService";

const dataIndex = 3;
const Page = () => {
  return (
    <>
      <LoadGoogleAdsScript />
      <LoadGoogleAdsIframe />
      <Header1 />
      <div className="pt-[80px] pb-2">
        <h1 className="w-full bg-[#aee9e7] text-center flex justify-center items-center h-[35vh] text-[#102b5c] font-[999] text-[5vh] xl:text-[8vh] ">
          {ItServiceData[dataIndex].title}
        </h1>
        <div className="w-full flex xl:flex-row flex-col-reverse">
          <RightPanelItService />
          <div className="flex xl:flex-row flex-col-reverse justify-between flex-shrink-0 w-full xl:w-3/4">
            <div className="flex justify-center items-center w-full xl:w-1/2 px-6 pt-0 xl:pt-6">
              <p className="font-medium text-left leading-normal text-md xl:text-lg xl:leading-relaxed text-[#627792]">
                {ItServiceData[dataIndex].description
                  .toString()
                  .split("\n\n")
                  .map((ele, index) => (
                    <span key={index}>
                      {ele}
                      <br />
                      <br />
                    </span>
                  ))}
              </p>
            </div>
            <div className="w-full xl:w-1/2 flex-shrink-0 py-10">
              <img
                src={ItServiceData[dataIndex].imgSrc}
                className="h-auto w-3/4 sm:w-1/2 xl:w-3/4 mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="pb-[20px]"></hr>
      <Footer />
    </>
  );
};

export default Page;

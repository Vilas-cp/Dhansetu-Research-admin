import Header1 from "@/components/Header1";
import React from "react";
import Footer from "@/components/Footer";
import LoadGoogleAdsScript from "@/components/LoadGoogleAdsScript";
import LoadGoogleAdsIframe from "@/components/LoadGoogleAdsIframe";
import RaServiceData from "@/data/RaServiceData/RaServiceData";
import RightPanelItService from "../compo/RAservicescompos/RightPanelItService";
import UlLiComp from "../compo/UlLiComp";

const dataIndex = 3;
const Page = () => {
  return (
    <>
      <LoadGoogleAdsScript />
      <LoadGoogleAdsIframe />
      <Header1 />
      <div className="pt-[80px] pb-2">
        <h1 className="w-full bg-[#aee9e7] text-center flex justify-center items-center h-[35vh] text-[#102b5c] font-[999] text-[5vh] xl:text-[8vh] ">
          {RaServiceData[dataIndex].title}
        </h1>
        <div className="w-full flex xl:flex-row flex-col-reverse">
          <RightPanelItService />
          <div className="flex xl:flex-row flex-col-reverse justify-between flex-shrink-0 w-full xl:w-3/4">
            <div>
              <h3 className="pl-2 font-semibold pt-2 text-2xl">
                {`Every trader walks a unique path — different risk, different psychology, different capital. We offer personalized research support, including:`}
              </h3>
              <ul className="px-2 !mt-0">
                {RaServiceData[dataIndex].description
                  .toString()
                  .split("\n\n").map((eleData, index) => (
                    <UlLiComp text={eleData} key={index} />
                  ))}
              </ul>
            </div>
            <div className="w-full xl:w-1/2 flex-shrink-0 py-10">
              <img
                src={RaServiceData[dataIndex].imgSrc}
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

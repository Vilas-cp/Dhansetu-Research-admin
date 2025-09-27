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
        <h1 className="w-full bg-[#aee9e7] flex justify-center items-center h-[35vh] text-[#102b5c] font-[999] text-[5vh] xl:text-[8vh]">
          Refund Policy
        </h1>
        <div className="px-[5%] xl:px-[25%]">
          <h2 className="text-left text-[6vh] font-bold text-black   pt-[30px]">
            Refund Policy
          </h2>
          <li className="text-left text-[#555555] pt-[10px]">
            On certain conditions we may initiate your refund.
          </li>
          <li className="text-left text-[#555555] pt-[10px]">
            Wrong commitment from our executive side.
          </li>
          <li className="text-left text-[#555555] pt-[10px]">
            If we are unable to provide you or activate your service before 72
            hours.
          </li>
          <li className="text-left text-[#555555] pt-[10px]">
            Payment from the customer below 18 or 65+.
          </li>
          <li className="text-left text-[#555555] pt-[10px]">
            {
              "If anyone from our company committed for Demate Handling services. (We do not provide demate handling / investment advisor or such type of services).."
            }
          </li>
        </div>
      </div>
      <hr className="pb-[30px]"></hr>
      <Footer />
    </>
  );
};

export default Page;

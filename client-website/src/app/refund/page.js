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
      <div className="pt-[125px] pb-[30px]">
        <h1 className="w-full bg-[#002366] flex justify-center items-center h-[35vh] text-white font-[999] text-[5vh] xl:text-[8vh]">
          Refund Policy
        </h1>
        <div className="px-[5%] xl:px-[25%]">
          <h2 className="text-left text-[6vh] font-bold text-black   pt-[30px]">
            Refund Policy
          </h2>
          <p className="pt-[20px]">
            {
              "All sales are final, and we do not offer refunds for the paid period of services already availed by the client. Complaints or dissatisfaction regarding the quality of services during the paid period shall not entitle the client to any refund or compensation. It is important to understand that we do not provide a 100% guarantee on our calls."
            }
          </p>
          <p className="pt-[10px]">
            {
              "As per SEBI guidelines, if a client requests to cancel the subscription, a refund shall only be issued for the unused portion of the subscription period. The refund will be calculated on a pro-rata basis, deducting the charges for the services already availed, including applicable taxes and administrative fees."
            }
          </p>
          <p className="pt-[10px]">
            {
              "Refunds will not be provided for the period of services already availed, irrespective of the client's satisfaction with the recommendations or the outcome of trades.Always remember Trading/Investment in Securities Markets are always subjected to Market Risk."
            }
          </p>
          <p className="pt-[20px] font-semibold">
            {
              "We strongly recommend that before making a payment, our visitors, and potential clients, please:"
            }
          </p>
          <li className="text-left pt-[5px]">
            {
              "Read all information about our services and support given to our clients. Read our Terms and Conditions."
            }
          </li>
          <li className="text-left pt-[5px]">
            {"Read our Privacy Policy and Refund Policy."}
          </li>
          <li className="text-left pt-[5px]">
            {"There is no refund possible in any case whatsoever."}
          </li>
          <p className="pt-[40px]">
            {
              "Kindly make the payment after reading all terms and conditions, disclaimers and refund policy."
            }
          </p>
          <p className="pt-[10px]">
            If you still have any query, contact us on:
            <span className="font-semibold"> +91 7697722464 </span>
            or mail us: <span className="font-semibold"> galaxyvivek4@gmail.com </span>
          </p>
        </div>
      </div>
      <hr className="pb-[30px]"></hr>
      <Footer />
    </>
  );
};

export default Page;

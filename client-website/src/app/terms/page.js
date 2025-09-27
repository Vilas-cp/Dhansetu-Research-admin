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
          Terms & Condition
        </h1>
        <div className="px-[5%] xl:px-[25%]">
          <h2 className="text-left text-[6vh] font-bold text-black   pt-[30px]">
            Terms & Condition
          </h2>
          <p className="text-left text-black pt-[10px] leading-loose font-medium">
            {'Dear Client, Welcome to "Brain Auto Tech ".'}
          </p>
          <p className="text-left text-black pt-[10px] leading-loose font-medium">
            {
              "Please go through the terms & conditions of our company's as per SEBI'S guidelines"
            }
          </p>
          <li className="text-left text-[#555555] pt-[10px]">
            {
              "Investment in stock or commodity market is subject to market risk, thus no low risk product is offered, although best attempts are made for predicting market."
            }
          </li>
          <li className="text-left text-[#555555] pt-[10px]">
            {
              " We do not provide any type of guaranteed, surety and fixed profit commitment Plan."
            }
          </li>
          <li className="text-left text-[#555555] pt-[10px]">
            {
              "We do not have services related to any type of profit sharing or portfolio management services."
            }
          </li>
          <li className="text-left text-[#555555] pt-[10px]">
            {
              "We suggest you not to work on personal recommendation given by associates of company."
            }
          </li>
          <li className="text-left text-[#555555] pt-[10px]">
            {
              "You are not supposed to give your De-mat login id, password to any of our employees if you give them neither company nor any of the employees responsible for your losses it will be at your own risk."
            }
          </li>
          <li className="text-left text-[#555555] pt-[10px]">
            {
              "All the products are updated on website of company please read all the features before subscribing to any services."
            }
          </li>
          <li className="text-left text-[#555555] pt-[10px]">
            {
              "KYC & Risk profiling are now mandatory according to govt. regulatory body, so it is mandatory to do the KYC before starting the services. Company shall stop providing the services in case it is found that KYC is incomplete from clients side."
            }
          </li>
          <li className="text-left text-[#555555] pt-[10px]">
            {
              "Investment Research takes all the necessary measures related to risk and rewards involved in markets before delivering any advice to client but we do not take the responsibility of any kind of losses occurred on trades. We also provide free trial to secure and showcase the pattern, technical languages and accuracy of services on free basis."
            }
          </li>
          <li className="text-left text-[#555555] pt-[10px]">
            Once the client has paid for the services there will be{" "}
            {/*<span className="text-black font-medium">*/}NO REFUNDS,
            CANCELLATION or TRANSFERS.{/*</span>*/}
          </li>
          <li className="text-left text-[#555555] pt-[10px]">
            {
              "Kindly ensure yourself by having free trails services prior taking any paid services. Even then we always make sure that we shall provide the most technical tips from our part."
            }
          </li>
          <li className="text-left text-[#555555] pt-[10px]">
            {
              "We do not have any refund policy at any case. We appeal to our visitors not to offer or allow anyone else even your family members, children, friends to use any electronic modes of payments or your personal accounts for taking subscription without your prior permission. "
            }
          </li>
          <li className="text-left text-[#555555] pt-[10px]">
            {
              "We do not recommend a stock broker. If any stock broker is recommended by any of our representative, we do not receive any consideration by way of remuneration or compensation or in any other form whatsoever from stock broker or any other intermediary so recommended to client. "
            }
          </li>
          <li className="text-left text-[#555555] pt-[10px]">
            {
              "We are not associated with any intermediaries and do not recommend services of any specific intermediaries. "
            }
          </li>
          <li className="text-left text-[#555555] pt-[10px]">
            {
              "The management of company reserves all its right related to any services. The decision of the management of the company shall be final & binding on the customers. "
            }
          </li>
          <li className="text-left text-[#555555] pt-[10px]">
            {
              " In case of clients seeking advice on any specific positions already made by the client, we will be able to suggest best possible action considering our view on the security or product. Such suggestion under any circumstances shall be considered as an opinion (not advice) from our organization and we advice client to consider our opinion and not consultancy to make his/her final decision. We are not liable for any losses whatsoever client may incur in accepting this opinion."
            }
          </li>
          <li className="text-left text-[#555555] pt-[10px]">
            {
              " In the event of any dispute or difference related to services, the same shall be resolved amicably by mutual conciliation. If the matter is not settled amicably then same shall be referred to the Court of Indore jurisdiction. The same shall be resolved amicably by mutual conciliation. If the matter is not settled amicably then same shall be referred to the Court of Indore jurisdiction."
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

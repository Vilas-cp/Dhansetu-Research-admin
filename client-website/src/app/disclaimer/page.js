import Footer from "@/components/Footer";
import FormComp from "@/components/FormComp/FormComp";
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
          Disclaimer
        </h1>
        <div className="px-[5%] xl:px-[25%]">
          <h2 className="text-left text-[6vh] font-bold text-black   pt-[30px]">
            Disclaimer
          </h2>
          <div className="text-base">
            <li className="text-left  pt-[30px] ">
              {
                "Vivek Singh Rajpoot Proprietor of Dhansetu Research, is a registered SEBI Research Analyst (Registration No. INH000024550) under the SEBI (Research Analysts) Regulations, 2014."
              }
            </li>
            <li className="text-left pt-[10px]">
              {
                "Investment in securities market are subject to market risks. Read all the related documents carefully before investing."
              }
            </li>
            <li className="text-left pt-[10px]">
              {
                "The securities quoted are for illustration only and are not recommendatory."
              }
            </li>
            <li className="text-left pt-[10px]">
              {
                "Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors."
              }
            </li>
            <li className="text-left pt-[10px]">
              {
                "Vivek Singh Rajpoot Proprietor of Dhansetu Research owns the website _______________(website/ Vivek Singh Rajpoot Proprietor of Dhansetu Research)."
              }
            </li>
            <li className="text-left pt-[10px]">
              {
                "Vivek Singh Rajpoot Proprietor of Dhansetu Research makes research-based recommendations on various opportunities in the Indian equity market for the short and long term."
              }
            </li>
            <li className="text-left pt-[10px]">
              {
                "We have never been suspended or barred from doing business by SEBI or any other authority, nor has SEBI ever cancelled our certificate of registration."
              }
            </li>
            <li className="text-left pt-[10px]">
              {
                "The firm does not provide merchant banking, investment banking, investment adviser, or brokerage services."
              }
            </li>
            <li className="text-left pt-[10px]">
              {
                "We have not partnered with any third-party intermediaries for execution or distribution services. As a result, we receive no compensation for execution or distribution services."
              }
            </li>
            <li className="text-left pt-[10px]">
              {
                "Please see the individual recommendation reports for information on ownership, material conflicts of interest, and compensation received."
              }
            </li>
            <li className="text-left pt-[10px]">
              {
                "The recommendations should not be interpreted as a solicitation of an offer to purchase or sell any security in a jurisdiction were doing so would be against the law."
              }
            </li>
            <li className="text-left pt-[10px]">
              {
                "Regarding the accuracy, timeliness, or completeness of the information (including news, pricing, statistics, analysis, and the like) offered through our website, Vivek Singh Rajpoot Proprietor of Dhansetu Research makes no representation, warranty, or guarantee. Vivek Singh Rajpoot Proprietor of Dhansetu Research and its affiliates are not responsible for any decisions made or actions performed as a result of using the information provided here. Access to the material on this website isn't meant to be and shouldn't be seen as an offer to purchase or sell any security. It also shouldn't be seen as establishing any kind of contractual relationship between Vivek Singh Rajpoot Proprietor of Dhansetu Research and anybody who uses or acts on the information on this website. This website's original writing, including but not limited to the design, text, and images, are protected as intellectual property and may not be used in whole or in part in any way by copying, reproducing, transmitting, displaying, or otherwise. While every effort has been made to ensure the authenticity of this website, Vivek Singh Rajpoot Proprietor of Dhansetu Research its employees, and authorised representatives disclaim all liability for any person or entity who directly or indirectly suffers consequential losses, damages, or claims of any kind as a result of any flaw, error, or inaccuracy that unintentionally crept into this website or uses the information on this website in any other way. Despite all reasonable precautions taken by Vivek Singh Rajpoot Proprietor of Dhansetu Research to prevent hacking and other interference, this website is not immune to these risks. As with any other website, Vivek Singh Rajpoot Proprietor of Dhansetu Research disclaims all responsibility for any loss or damage a user may experience as a result of any alteration or manipulation of any data or information accessed through or downloaded from this website."
              }
            </li>
            <li className="text-left pt-[10px]">
              {
                "The information and data on (Website link)_________, including but not limited to recommendations, past performance, stock ratings, and research rationale, are provided solely for educational and illustrative purposes. The performance figures are calculated using a standard methodology and do not account for transaction fees or other related costs. Vivek Singh Rajpoot Proprietor of Dhansetu Research has not audited or validated the data used to calculate historical returns and other information, which is provided by exchange-approved third-party data vendors."
              }
            </li>
            <li className="text-left pt-[10px]">
              {
                "All information available (Website Link)___________, are intended to assist investors with their decision-making and should not be construed as a recommendation or solicitation for a particular investment or investment plan. Investors are accountable for their investing decisions and for validating any information used to make those decisions. Investors should recognise that their investment decisions are based on their individual financial needs, and that the performance information available on stockproonline.com is just one of many factors that should be considered before making an investment decision. Past performance is not indicative of future results, and the performance of stockproonline.com services is subject to market risk. Before investing, investors should carefully examine all relevant papers, such as research reports, financial statements, etc., as investments in the securities market are susceptible to market risks. Derivatives are sophisticated financial instruments. Before actually trading in derivative contracts, the investor is required to analyse all relevant risk considerations."
              }
            </li>
            <li className="text-left pt-[10px]">
              {
                "In no way does Vivek Singh Rajpoot Proprietor of Dhansetu Research promise or guarantee a favourable outlook for a particular industry, sector, or business group. Before investing, the investor must assess all risk variables, including their financial position."
              }
            </li>
            <li className="text-left pt-[10px]">
              {
                "The analysts/representatives for various Research recommendations certify that all information/material therein accurately reflects their personal opinions about the subject company or companies and their securities, and that no portion of their compensation has been, is being, or will be related in any way to the company(ies) they recommend in their research analyses/reports. No part of this content may be copied or transferred in any way without the company's prior written approval."
              }
            </li>
            <li className="text-left pt-[10px]">
              {
                "Registration granted by SEBI, enlistment as RA with Exchange and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors."
              }
            </li>
          </div>
        </div>
      </div>
      <FormComp />
      <hr className="pb-[20px]"></hr>
      <Footer />
    </>
  );
};

export default Page;

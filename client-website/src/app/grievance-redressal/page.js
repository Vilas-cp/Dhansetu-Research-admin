"use client";

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
          {"Grievance Redressal"}
        </h1>

        <div className="overflow-x-auto px-4 mt-8 ">
          <p className="pb-[10px] w-full flex items-center justify-center font-semibold">
            {
              "If you have a grievance, you can reach out to our Support Team for assistance."
            }
          </p>
          <table className="w-full border-2 border-black text-left border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="border-2 border-black px-4 py-2">
                  {"Details of Designation"}
                </th>
                <th className="border-2 border-black px-4 py-2">
                  {"Contact Person Name"}
                </th>
                <th className="border-2 border-black px-4 py-2">
                  {"Address where the physical address location"}
                </th>
                <th className="border-2 border-black px-4 py-2">
                  {"Contact No."}
                </th>
                <th className="border-2 border-black px-4 py-2">
                  {"Email-ID"}
                </th>
                <th className="border-2 border-black px-4 py-2">
                  {"Working hours when complainant can call"}
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border-2 border-black px-4 py-2">
                  {"Customer Care"}
                </td>
                <td className="border-2 border-black px-4 py-2">
                  {"Vivek Rajpoot"}
                </td>
                <td className="border-2 border-black px-4 py-2">
                  {
                    "Flat No. 601, Block H2 Belmont Park, Niranjanpur, Indore, Madhya Pradesh, 453771"
                  }
                </td>
                <td className="border-2 border-black px-4 py-2">
                  {"+91 7697722464"}
                </td>
                <td className="border-2 border-black px-4 py-2">
                  {"galaxyvivek4@gmail.com"}
                </td>
                <td className="border-2 border-black px-4 py-2">
                  {"Mon-Sat, 09:00 AM - 05:00 PM"}
                </td>
              </tr>
              <tr>
                <td className="border-2 border-black px-4 py-2">
                  {"Head of Customer Care"}
                </td>
                <td className="border-2 border-black px-4 py-2">
                  {"Vivek Rajpoot"}
                </td>
                <td className="border-2 border-black px-4 py-2">
                  {
                    "Flat No. 601, Block H2 Belmont Park, Niranjanpur, Indore, Madhya Pradesh, 453771"
                  }
                </td>
                <td className="border-2 border-black px-4 py-2">
                  {"+91 7697722464"}
                </td>
                <td className="border-2 border-black px-4 py-2">
                  {"galaxyvivek4@gmail.com"}
                </td>
                <td className="border-2 border-black px-4 py-2">
                  {"Mon-Sat, 09AM - 05 PM"}
                </td>
              </tr>
              <tr>
                <td className="border-2 border-black px-4 py-2">
                  {"Compliance Officer"}
                </td>
                <td className="border-2 border-black px-4 py-2">
                  {"Vivek Rajpoot"}
                </td>
                <td className="border-2 border-black px-4 py-2">
                  {
                    "Flat No. 601, Block H2 Belmont Park, Niranjanpur, Indore, Madhya Pradesh, 453771"
                  }
                </td>
                <td className="border-2 border-black px-4 py-2">
                  {"+91 7697722464"}
                </td>
                <td className="border-2 border-black px-4 py-2">
                  {"galaxyvivek4@gmail.com"}
                </td>
                <td className="border-2 border-black px-4 py-2">
                  {"Mon-Sat, 09AM - 05 PM"}
                </td>
              </tr>
              <tr>
                <td className="border-2 border-black px-4 py-2">{"CEO"}</td>
                <td className="border-2 border-black px-4 py-2">{"-"}</td>
                <td className="border-2 border-black px-4 py-2">{"-"}</td>
                <td className="border-2 border-black px-4 py-2">{"-"}</td>
                <td className="border-2 border-black px-4 py-2">{"-"}</td>
                <td className="border-2 border-black px-4 py-2">{"-"}</td>
              </tr>
              <tr>
                <td className="border-2 border-black px-4 py-2">
                  {"Principal Officer"}
                </td>
                <td className="border-2 border-black px-4 py-2">
                  {"Vivek Rajpoot"}
                </td>
                <td className="border-2 border-black px-4 py-2">
                  {
                    "Flat No. 601, Block H2 Belmont Park, Niranjanpur, Indore, Madhya Pradesh, 453771"
                  }
                </td>
                <td className="border-2 border-black px-4 py-2">
                  {"+91 7697722464"}
                </td>
                <td className="border-2 border-black px-4 py-2">
                  {"galaxyvivek4@gmail.com"}
                </td>
                <td className="border-2 border-black px-4 py-2">
                  {"Mon-Sat, 09AM - 05 PM"}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="px-[5%] xl:px-[20%]">
            <p className="pt-[20px]">
              {
                "The above mentioned details would facilitate the complainants to approach the concerned RA before filing complaint to SEBI.For more details go to: -  https://www.bseindia.com/markets/MarketInfo/DispNewNoticesCirculars.aspx?page=20241209-41"
              }
            </p>
            <p className="pt-[10px]">
              {
                "We aim to resolve all grievances within 21 working days from the date of receipt. If your grievance is not resolved within this timeframe, you can escalate it to SEBI's SCORES Platform (SEBI Complaints Redress System)."
              }
            </p>
            <p>
              <span className="font-semibold">SCORES Portal: </span>
              scores.sebi.gov.in.
            </p>
            <p>
              {
                "In case you are unsatisfied with the resolution provided through our support or the SCORES platform, you can access the Online Dispute Resolution (ODR) Portal."
              }
            </p>
            <p>
              <span className="font-semibold">ODR Portal: </span>smartodr.in.
            </p>
          </div>
        </div>
      </div>

      <hr className="pb-[20px]" />
      <Footer />
    </>
  );
};

export default Page;

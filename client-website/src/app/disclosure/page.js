"use client";
import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import React from "react";
import LoadGoogleAdsScript from "@/components/LoadGoogleAdsScript";
import LoadGoogleAdsIframe from "@/components/LoadGoogleAdsIframe";

const Complaint = () => {
  return (
    <>
      <LoadGoogleAdsScript />
      <div>
        <LoadGoogleAdsIframe />
        <Header1 />

        {/* Hero Section */}
        <div className="pt-[130px]">
          <h1 className="w-full bg-[#002366] flex justify-center items-center h-[35vh] text-white font-[999] text-[5vh] xl:text-[8vh] ">
            Disclosure
          </h1>
        </div>

        {/* Image Gallery Section */}
        <div className="pt-[40px] pb-[30px] px-3 lg:px-80 space-y-3">
          <h2 className="text-[#002366] text-3xl font-bold">Disclosure</h2>
          <p>
            {
              "The particulars given in this Disclosure Document have been prepared in accordance with SEBI (Research Analyst) Regulations, 2014. For the purpose of this Disclosure Document, Research Analyst Is Vivek Singh Rajpoot Proprietor of Dhansetu Research, (here in after referred as “Research Entity”)."
            }
          </p>

          <ul className="list-disc pl-6 space-y-4">
            <li>
              <h3 className="text-lg font-semibold text-gray-800">
                {"History, Present business and Background"}
              </h3>
              <p className="text-sm text-gray-600">
                {
                  "Vivek Singh Rajpoot Proprietor of Dhansetu Research is registered with SEBI as Research Analyst with registration no. INH000024550. The Research Analyst got its registration on 1st January, 2026 and is engaged in offering research and recommendation services."
                }
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold text-gray-800">
                {"Terms and conditions of Research Services"}
              </h3>
              <p className="text-sm text-gray-600">
                {
                  "The Research Services will be limited to providing independent research recommendation and shall not be involved in any advisory or portfolio allocation services."
                }
              </p>
              <p className="text-sm text-gray-600">
                {
                  "The Research Analyst never guarantees the returns on the recommendation provided. Investor shall take note that Investment/trading in stocks/Index or other securities is always subject to market risk. Past performance is never a guarantee of same future results. The Research Analyst shall not be responsible for any loss to the Investors."
                }
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold text-gray-800">
                {"Disciplinary history"}
              </h3>
              <p className="text-sm text-gray-600">
                {
                  "There are no pending material litigations or legal proceedings against the Research Analyst."
                }
              </p>
              <p className="text-sm text-gray-600">
                {
                  "As on date, no penalties / directions have been issued by SEBI under the SEBI Act or Regulations made there under against the Research Analyst relating to Research Analyst services."
                }
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold text-gray-800">
                {"Details of its associates"}
              </h3>
              <p className="text-sm text-gray-600">{"No associates."}</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-gray-800">
                {
                  "Disclosures with respect to Research and Recommendations Services"
                }
              </h3>
              <ol className="list-decimal pl-6 space-y-2 pt-4 text-sm">
                <li>
                  {"The Research Analyst or any of its officers/employees does not trade in securities that are the subject matter of recommendation."}
                </li>
                <li>
                  {"There are no actual or potential conflicts of interest arising from any connection to or association with any issuer of products/ securities, including any material information or facts that might compromise its objectivity or independence in the carrying on of Research Analyst services. Such conflict of interest shall be disclosed to the client as and when they arise."}
                </li>
                <li>
                  {"Research Analyst or its employee or its associates have not received any compensation from the company which is subject matter of recommendation."}
                </li>
                <li>
                  {"Research Analyst or its employee or its associates have not managed or co-managed the public offering of any company."}
                </li>
                <li>
                  {"Research Analyst or its employee or its associates have not received any compensation for investment banking or merchant banking of brokerage services from the subject company."}
                </li>
                <li>
                  {"Research Analyst or its employee or its associates have not received any compensation for products or services other than above from the subject company."}
                </li>
                 <li>
                  {"Research Analyst or its employee or its associates have not received any compensation or other benefits from the Subject Company or 3rd party in connection with the research report/ recommendation."}
                </li>
                 <li>
                  {"The subject company was not a client of Research Analyst or its employee or its associates during twelve months preceding the date of recommendation services provided."}
                </li>
                 <li>
                  {"Research Analysts or its employee or its associates has not served as an officer, director or employee of the subject company."}
                </li>
                <li>
                  {"Research Analysts has not been engaged in market making activity of the subject company."}
                </li>
              </ol>
            </li>
          </ul>
        </div>
        <hr className="pb-[30px]" />
        <Footer />
      </div>
    </>
  );
};

function Th2({ children }) {
  return (
    <th className="border border-gray-400 px-2 py-1 lg:px-4 lg:py-2">
      {children}
    </th>
  );
}

function Td2({ children }) {
  return (
    <td className="border border-gray-400 px-2 py-1 lg:px-4 lg:py-2">
      {children}
    </td>
  );
}

export default Complaint;

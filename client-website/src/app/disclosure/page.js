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
        <div className="pt-[80px] flex justify-center items-center bg-[#002366] h-[42vh] xl:h-[47vh] w-full">

            <h1 className="text-white md:text-[8vh] text-[6vh] font-[800] text-center tracking-[1px]">
              Disclosure
            </h1>
        
        </div>

        {/* Image Gallery Section */}
        <div className="pt-[40px] pb-[30px] px-3 lg:px-80 space-y-3">
          <h2 className="text-[#002366] text-3xl font-bold">
            Disclosure
          </h2>
          <p>
            The purpose of the document is to provide essential information about the Research Services in a manner to assist and enable the 
            prospective client/client in making an informed decision for engaging in Research services before onboarding.
          </p>
          <p>
            History, Present business and Background
            Narendra Singh Rajput Proprietor Finest Capital Research is registered with SEBI as Research Analyst with registration no. 
            INH000012652. The Research Analyst got its registration on 10th August, 2023 and is engaged in offering research and 
            recommendation services.
          </p>
          <p>
            Terms and conditions of Research Services
            The Research Services will be limited to providing independent research recommendation and shall not be involved in any 
            advisory or portfolio allocation services.
          </p>
          <p>
            The Research Analyst never guarantees the returns on the recommendation provided. Investor shall take note that 
            Investment/trading in stocks/Index or other securities is always subject to market risk. Past performance is never a 
            guarantee of same future results.
          </p>
          <p>
            The Research Analyst shall not be responsible for any loss to the Investors.
            <br/><br/>
            Disciplinary history
            There are no pending material litigations or legal proceedings against the Research Analyst.
            <br/><br/>
            As on date, no penalties / directions have been issued by SEBI under the SEBI Act or Regulations made there under 
            against the Research Analyst relating to Research Analyst services.
            <br/><br/>
            Details of its associates
            No associates
          </p>
          <p>
            Disclosures with respect to Research and Recommendations Services
            The Research Analyst or any of its officer/employee does not trade in securities which are subject matter of recommendation.
            <br/><br/>
            There are no actual or potential conflicts of interest arising from any connection to or association with any issuer of products/ securities, 
            including any material information or facts that might compromise its objectivity or independence in the carrying on of Research Analyst 
            services. Such conflict of interest shall be disclosed to the client as and when they arise.
            <br/><br/>
            Research Analyst or its employee or its associates have not received any compensation from the company which is subject matter of recommendation.
            <br/><br/>
            Research Analyst or its employee or its associates have not managed or co-managed the public offering of any company.
            <br/><br/>
            Research Analyst or its employee or its associates have not received any compensation for investment banking or merchant banking of 
            brokerage services from the subject company.
            <br/><br/>
            Research Analyst or its employee or its associates have not received any compensation for products or services other than above from the 
            subject company.
            <br/><br/>
            Research Analyst or its employee or its associates have not received any compensation or other benefits from the Subject Company or 3rd party in 
            connection with the research report/ recommendation.
            <br/><br/>
            The subject company was not a client of Research Analyst or its employee or its associates during twelve months preceding the date of 
            recommendation services provided.
            <br/><br/>
            Research Analysts or its employee or its associates has not served as an officer, director or employee of the subject company.
            <br/><br/>
            Research Analysts has not been engaged in market making activity of the subject company.
            <br/><br/>
            Standard Warning
            “Investment in securities market are subject to market risks. Read all the related documents carefully before investing.”
          </p>
          <p>
            {`Disclaimer
            “Registration granted by SEBI, Enlistment as RA with Exchange and certification from NISM in no way guarantee performance of the Intermediary or provide any assurance of returns to investors.

            ”The securities quoted, if any are for illustration only and are not recommendatory.”`}
          </p>
          <p>
            {`expect name, registration no and starting date, leave these 3, or use 123**456, name:- Vivek Singh Rajpoot, date: 00/00/00`}
          </p>
          {/* <h3 className="text-[#002366] text-2xl font-bold">Data for the month ending - September 2025</h3> */}
        </div>
        <hr className="pb-[30px]" />
        <Footer />
      </div>
    </>
  );
};

function Th2({children}) {
  return (
    <th className="border border-gray-400 px-2 py-1 lg:px-4 lg:py-2">{children}</th>
  );
}

function Td2({ children }) {
  return (
    <td className="border border-gray-400 px-2 py-1 lg:px-4 lg:py-2">{children}</td>
  );
}

export default Complaint;

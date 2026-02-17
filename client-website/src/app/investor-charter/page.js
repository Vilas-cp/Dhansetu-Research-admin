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
          Investor Charter
        </h1>
        <div className="px-[5%] xl:px-[25%]">
          <h2 className="text-left text-[6vh] font-bold text-black   pt-[30px]">
            Investor Charter
          </h2>
          <div className="space-y-6  leading-relaxed">
            <h3 className="pt-[20px] underline font-semibold">
              {"A. Vision and Mission Statements for investors."}
            </h3>
            <ul className="list-disc">
              <li>
                <strong>{"Vision"}</strong>
              </li>
              <p>{"Invest with knowledge & safety."}</p>

              <li>
                <strong>{"Mission"}</strong>
              </li>
              <p>
                {
                  "Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness."
                }
              </p>
            </ul>

            <h3 className="pt-[20px] underline font-semibold">
              {
                "B. Details of business transacted by the Research Analyst with respect to the investors."
              }
            </h3>
            <ul className="list-disc">
              <li>
                {
                  "To publish research report based on the research activities of the RA"
                }
              </li>
              <li>
                {"To provide an independent unbiased view on securities."}
              </li>
              <li>
                {
                  "To offer unbiased recommendation, disclosing the financial interests in recommended securities."
                }
              </li>
              <li>
                {
                  "To provide research recommendation, based on analysis of publicly available"
                }
              </li>
              <li>{"information and known observations."} </li>
              <li>{"To conduct audit annually"} </li>
              <li>
                {
                  "To ensure that all advertisements are in adherence to the provisions of the Advertisement Code for Research Analysts."
                }
              </li>
              <li>
                {
                  "To maintain records of interactions, with all clients including prospective clients (prior to onboarding), where any conversation related to the research services has taken place."
                }
              </li>
            </ul>
            <h3 className="pt-[20px] underline font-semibold">
              {
                "C. Details of services provided to investors (No Indicative Timelines)"
              }
            </h3>
            <ol className="list-decimal">
              <li>
                <strong>{"Onboarding of Clients"}</strong>
              </li>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  {"Sharing of terms and conditions of research services"}
                </li>
                <li>{"Completing KYC of fee-paying clients"}</li>
              </ul>

              <li>
                <strong>{"Disclosure to Clients:"}</strong>
              </li>

              <ul className="list-disc pl-6 space-y-1">
                <li>
                  {
                    "To disclose, information that is material for the client to make an informed decision, including details of its business activity, disciplinary history, the terms and conditions of research services, details of associates, risks and conflicts of interest, if any"
                  }
                </li>
                <li>
                  {
                    "To disclose the extent of use of Artificial Intelligence tools in providing research services"
                  }
                </li>
                <li>
                  {
                    "To disclose, while distributing a third-party research report, any material conflict of interest of such third-party research provider or provide web address that directs a recipient to the relevant disclosures"
                  }
                </li>
                <li>
                  {
                    "To disclose any conflict of interest of the activities of providing research services with other activities of the research analyst."
                  }
                </li>
              </ul>

              <li>
                {
                  "To distribute research reports and recommendations to the clients without discrimination."
                }
              </li>
              <li>
                {
                  "To maintain confidentiality w.r.t publication of the research report until made available in the public domain."
                }
              </li>
              <li>
                {
                  "To respect data privacy rights of clients and take measures to protect unauthorized use of their confidential information"
                }
              </li>
              <li>
                {
                  "To disclose the timelines for the services provided by the research analyst to clients and ensure adherence to the said timelines"
                }
              </li>
              <li>
                {
                  "To provide clear guidance and adequate caution notice to clients when providing recommendations for dealing in complex and high-risk financial products/services"
                }
              </li>
              <li>{"To treat all clients with honesty and integrity"}</li>
              <li>
                {
                  "To ensure confidentiality of information shared by clients unless such information is required to be provided in furtherance of discharging legal obligations or a client has provided specific consent to share such information."
                }
              </li>
            </ol>
            <h3 className="pt-[20px] underline font-semibold">
              {
                "D. Details of grievance redressal mechanism and how to access it"
              }
            </h3>
            <ol className="list-decimal space-y-2">
              <li>
                {
                  "Investor can lodge complaint/grievance against Research Analyst in the following ways:"
                }
              </li>

              <p className="underline">
                {"Mode of filing the complaint with research analyst"}
              </p>

              <p>
                {
                  "In case of any grievance / complaint, an investor may approach the concerned Research Analyst who shall strive to redress the grievance immediately, but not later than 21 days of the receipt of the grievance."
                }
              </p>

              <p className="underline">
                {
                  "Mode of filing the complaint on SCORES or with Research Analyst Administration and Supervisory Body (RAASB)"
                }
              </p>

              <ol className="list-[upper-roman] space-y-2 pl-6">
                <li>
                  {
                    "SCORES 2.0 (a web based centralized grievance redressal system of SEBI for facilitating effective grievance redressal in time-bound manner) (https://scores.sebi.gov.in)"
                  }
                </li>

                <p>
                  {
                    "Two level review for complaint/grievance against Research Analyst:"
                  }
                </p>
                  <ul className="list-disc pl-6">
                <li>{"First review done by designated body (RAASB)"}</li>
                <li>{"Second review done by SEBI"}</li>
                </ul>

                <li>{"Email to designated email ID of RAASB"}</li>
              </ol>

              <li className="pt-[20px]">
                {
                  "If the Investor is not satisfied with the resolution provided by the Market Participants, then the Investor has the option to file the complaint/ grievance on SMARTODR platform for its resolution through online conciliation or arbitration."
                }
              </li>

              <p>
                {
                  "With regard to physical complaints, investors may send their complaints to:"
                }
              </p>

              <p className="font-semibold pl-10">
                {"Office of Investor Assistance and Education,"}
                <br />
                {"Securities and Exchange Board of India,"}
                <br />
                {"SEBI Bhavan, Plot No. C4-A, ‘G’ Block,"}
                <br />
                {"Bandra-Kurla Complex, Bandra (E),"}
                <br />
                {"Mumbai - 400 051"}
              </p>
            </ol>
            <h3 className="pt-[20px] underline font-semibold">
              {"E. Rights of investors"}
            </h3>

            <ul className="list-disc pl-6 space-y-1">
              <li>{"Right to Privacy and Confidentiality"}</li>
              <li>{"Right to Transparent Practices"}</li>
              <li>{"Right to fair and Equitable Treatment"}</li>
              <li>{"Right to Adequate Information"}</li>
              <li>{"Right to Initial and Continuing Disclosure"}</li>
              <li>
                {
                  "Right to receive information about all the statutory and regulatory disclosures"
                }
              </li>
              <li>{"Right to Fair & True Advertisement"}</li>
              <li>
                {
                  "Right to Awareness about Service Parameters and Turnaround Times"
                }
              </li>
              <li>
                {"Right to be informed of the timelines for each service"}
              </li>
              <li>
                {"Right to be Heard and Satisfactory Grievance Redressal"}
              </li>
              <li>{"Right to have timely redressal"}</li>
              <li>
                {
                  "Right to Exit from Financial product or service in accordance with the terms and conditions agreed with the research analyst"
                }
              </li>
              <li>
                {
                  "Right to receive clear guidance and caution notice when dealing in Complex and High-Risk Financial Products and Services"
                }
              </li>
              <li>{"Additional Rights to vulnerable consumers"}</li>
              <li>
                {
                  "Right to get access to services in a suitable manner even if differently abled"
                }
              </li>
              <li>
                {
                  "Right to provide feedback on the financial products and services used"
                }
              </li>
              <li>
                {
                  "Right against coercive, unfair, and one-sided clauses in financial agreements"
                }
              </li>
            </ul>

            <h3 className="pt-[20px] underline font-semibold">
              {
                "F. Expectations from the investors (Responsibilities of investors)"
              }
            </h3>
            <ol className="list-disc">
              <li className="pt-[10px]">
                <strong>{"Do's"}</strong>
              </li>

              <ol className="list-[upper-roman] pl-6 space-y-2">
                <li>{"Always deal with SEBI registered Research Analyst."}</li>
                <li>
                  {
                    "Ensure that the Research Analyst has a valid registration certificate."
                  }
                </li>
                <li>{"Check for SEBI registration number."}</li>
                <li>
                  {
                    "Please refer to the list of all SEBI registered Research Analyst which is available on SEBI website in the following link: https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14)"
                  }
                </li>
                <li>
                  {
                    "Always pay attention towards disclosures made in the research reports before investing."
                  }
                </li>
                <li>
                  {
                    "Pay your Research Analyst through banking channels only and maintain duly signed receipts mentioning the details of your payments. You may make payment of fees through Centralized Fee Collection Mechanism (CeFCoM) of RAASB if research analyst has opted for the mechanism. (Applicable for fee paying clients only)"
                  }
                </li>
                <li>
                  {
                    "Before buying/ selling securities or applying in public offer, check for the research recommendation provided by your Research Analyst."
                  }
                </li>
                <li>
                  {
                    "Ask all relevant questions and clear your doubts with your Research Analyst before acting on recommendation."
                  }
                </li>
                <li>
                  {
                    "Seek clarifications and guidance on research recommendations from your Research Analyst, especially if it involves complex and high-risk financial products and services."
                  }
                </li>
                <li>
                  {
                    "Always be aware that you have the right to stop availing the service of a Research Analyst as per the terms of service agreed between you and your Research Analyst."
                  }
                </li>
                <li>
                  {
                    "Always be aware that you have the right to provide feedback to your Research Analyst in respect of the services received."
                  }
                </li>
                <li>
                  {
                    "Always be aware that you will not be bound by any clause, prescribed by the research analyst, which is contravening any regulatory provisions."
                  }
                </li>
                <li>
                  {
                    "Inform SEBI about Research Analyst offering assured or guaranteed returns."
                  }
                </li>
              </ol>

              <li className="pt-[20px]">
                <strong>{"Don'ts"}</strong>
              </li>
              <ol className="list-[upper-roman] pl-6 space-y-2">
                <li>
                  {
                    "Do not provide funds for investment to the Research Analyst."
                  }
                </li>
                <li>
                  {"Don't fall prey to luring advertisements or market rumors."}
                </li>
                <li>
                  {
                    "Do not get attracted to limited period discount or other incentive, gifts, etc. offered by Research Analyst."
                  }
                </li>
                <li>
                  {
                    "Do not share login credential and password of your trading, demat or bank accounts with the Research Analyst."
                  }
                </li>
              </ol>
            </ol>
          </div>
        </div>
      </div>
      <hr className="pb-[20px]"></hr>
      <Footer />
    </>
  );
};

export default Page;

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
        <h1 className="w-full bg-[#002366] flex justify-center items-center h-[35vh] text-white font-[999] text-[4vh] xl:text-[8vh]">
          Terms & Condition
        </h1>
        <div className="px-[5%] xl:px-[25%]">
          <p className="font-bold pt-[5%] text-center underline">
            {"TERMS AND CONDITIONS OF RESEARCH SERVICES"}
          </p>
          <p className="font-bold pt-[5%]">
            {"Parties to these Terms and Conditions:"}
          </p>
          <ul className="list-[lower-roman] space-y-2 ">
            <li className="pt-[10px]">
              {
                "Research Analyst: Vivek Singh Rajpoot Proprietor of Dhansetu Research is a SEBI Registered Research Analyst having its registered office address at Flat No. 601, Block H2 Belmont Park, Niranjanpur, Indore, Madhya Pradesh, 453771"
              }
            </li>
            <li>
              {" Hereinafter referred to as the Research Analyst or “RA”;"}
            </li>
            <li>
              {
                "Client: The individual or entity subscribing to or availing research services provided by the Research Analyst, hereinafter referred to as the “Client.” "
              }
            </li>
          </ul>
          <ol className="list-decimal pt-[5%] ">
            <li className="underline font-semibold">
              {"Availing The Services:"}
            </li>
            <p className="pt-[10px]">
              {
                "The Client hereby accepts the research services and confirms to avail the research services on its own discretion provided by the Research Analyst (“RA”), and the Research Analyst agrees to provide such services in accordance with the terms and conditions set forth underneath."
              }
            </p>
            <li className="underline font-semibold pt-[10px]">
              {"Obligations on RA and Client:"}
            </li>
            <p className="pt-[10px]">
              {
                "The client and the Research Analyst shall be bound by all applicable regulations, rules, circulars, and amendments issued by SEBI, including the SEBI (Research Analysts) Regulations, 2014 and all the other notifications of the Government, if any from time to time."
              }
            </p>
            <li className="underline font-semibold pt-[10px]">
              {"Client Information and KYC:"}
            </li>
            <p className="pt-[10px]">
              {
                "The client is bound, upon acceptance of services, to submit all requisite documents as requested by the research analyst and help the RA to complete the KYC process.“The client hereby gives consent to the research analyst to fetch his KYC documents from the KYC Registration Agency (KRA).”"
              }
            </p>
            <li className="underline font-semibold pt-[10px]">
              {"Standard Terms of Service:"}
            </li>
            <p className="pt-[10px]">
              {
                "The Client acknowledges and gives his consent to be bound by the terms set forth herewith, as well as any applicable amendments or updates provided by the Research Analyst."
              }
            </p>
            <p className="font-semibold pt-[10px]">
              {"The client hereby agrees:"}
            </p>
            <ol className="list-decimal pl-10">
              <li>
                {
                  "I have read and understood the terms and conditions applicable to a research analyst as defined under regulation 2(1)(u) of the SEBI (Research Analyst) Regulations, 2014, including the fee structure."
                }
              </li>
              <li>
                {
                  "I am subscribing to the research services for my own benefit and consumption, and any reliance placed on the research report provided by the Research Analyst shall be based on my own judgment and assessment of the conclusions contained in the research report."
                }
              </li>
            </ol>
            <p className="py-4">{"I understand that:"}</p>
            <ol className="list-[lower-roman] pl-10">
              <li>
                {
                  "Any investment made based on the recommendations in the research report is subject to market risk."
                }
              </li>
              <li>
                {
                  "Recommendations in the research report do not provide any assurance of returns."
                }
              </li>
              <li>
                {
                  "There is no recourse to claim any losses incurred on investments made based on the recommendations in the research report."
                }
              </li>
            </ol>
            <ol className="list-disc font-semibold pt-[10px]">
              <li>{"Declaration by Research Analyst:"}</li>
            </ol>
            <ol className="list-decimal py-2">
              <li>
                {
                  "It is duly registered with SEBI as an RA having Registration No.: INH000024550, Date of Registration: 1st January, 2026."
                }
              </li>
              <li>
                {
                  "It has registration and qualifications required to render the services contemplated under the RA Regulations, and the same are valid and subsisting."
                }
              </li>
              <li>
                {
                  "The services provided by the RA do not conflict with or violate any provision of law, rule, regulation, contract, or other instrument to which it is a party or to which any of its property is or may be subject."
                }
              </li>
              <li>
                {
                  "The maximum fee that may be charged by the RA is ₹1.51 lakhs per annum per family of clients."
                }
              </li>
              <li>
                {
                  "The recommendations provided by the RA do not provide any assurance of returns."
                }
              </li>
            </ol>
            <li className="underline font-semibold pt-[10px]">
              {"Consideration And Mode of Payment:"}
            </li>
            <ol className="list-decimal py-3">
              <li>
                {
                  "The client shall duly pay the fees to the RA of the invoice raised or for any agreed amount either written/oral within 2 days."
                }
              </li>
              <li>
                {
                  "The Client agrees to make all payments via: UPI/Net banking/Payment Gateway or any other verified banking channel. Client shall not pay any fees in cash."
                }
              </li>
              <li>
                {
                  "The Client hereby agrees to pay the fees in the Bank account of Research Analyst only. The RA shall not be liable for any payment made to third party account."
                }
              </li>
            </ol>
            <li className="underline font-semibold pt-[10px]">
              {"Risk Factors:"}
            </li>
            <p className="pt-[10px]">
              {
                "The Client understands that the services provided by the Research Analyst involve inherent risks, and the Client agrees to bear full responsibility for any financial or other consequences arising from the use of these services.Investment in the market is subject to market risk, and is also subject to the following:"
              }
            </p>
            <ol className="pt-[10px] list-decimal pl-10">
              <li>
                {
                  "Trading in equities, derivatives, and other securities are subject to market risks and there is no assurance or guarantee of returns."
                }
              </li>
              <li>
                {"Past performance does not indicate future performance."}
              </li>
              <li>
                {
                  "Research recommendations may not always be profitable, as actual market movements may differ from anticipated trends."
                }
              </li>
              <li>
                {
                  "The Research Analyst is not responsible or liable for any losses resulting from research recommendations."
                }
              </li>
              <li>
                {
                  "Investment in securities market are subject to market risks. Read all the related documents carefully before investing."
                }
              </li>
              <li>
                {
                  "Registration granted by SEBI, Enlistment as RA with Exchange, and certification from NISM do not guarantees the performance of the intermediary or provide any assurance of returns to investors."
                }
              </li>
            </ol>
            <li className="underline font-semibold pt-[10px]">
              {"Conflict of Interest:"}
            </li>
            <p className="pt-[10px]">
              {
                "The RA shall adhere to the applicable regulations/circulars/directions specified by SEBI from time to time in relation to disclosure and mitigation of any actual or potential conflict of interest. Some of disclosures are as follows:"
              }
            </p>
            <ol className="list-decimal pl-10">
              <li>
                {
                  "​The Research Analyst or any of its officer/employee does not trade in securities which are subject matter of recommendation."
                }
              </li>
              <li>
                {
                  "There are no actual or potential conflicts of interest arising from any connection to or association with any issuer of products/ securities, including any material information or facts that might compromise its objectivity or independence in the carrying on of Research Analyst services. Such conflict of interest shall be disclosed to the client as and when they arise."
                }
              </li>
              <li>
                {
                  "Research Analyst or its employee or its associates have not received any compensation from the company which is subject matter of recommendation."
                }
              </li>
            </ol>

            <p className="pt-[10px]">
              {
                "Client is advised to refer the detailed disclosure provided on our website."
              }
            </p>
            <li className="underline font-semibold pt-[10px]">
              {"Termination of Service and Refund of Fees:"}
            </li>
            <p className="pt-[10px]">
              {
                "The Agreement may be terminated by the client, if the Research Analyst fails to provide the research recommendations. However, the client cannot terminate the agreement solely based on not achieving the desired returns or incurring the losses from trading on the recommendations or the client discontinues the services without a valid reason, or in case of force majeure."
              }
            </p>
            <p className="pt-[10px]">
              {
                "The RA may suspend or terminate rendering of research services to client on account of suspension/cancellation of registration of RA by SEBI and shall refund the residual amount to the client."
              }
            </p>
            <p className="pt-[10px]">
              {
                "In case of suspension of certificate of registration of the RA for more than 60 (sixty) days or cancellation of the RA registration, RA shall refund the fees, on a pro rata basis for the period from the effective date of cancellation/ suspension to end of the subscription period."
              }
            </p>
            <li className="underline font-semibold pt-[10px]">
              {"Grievance Redressal:"}
            </li>
            <ol className="list-decimal pl-5 space-y-3 pt-[10px]">
              <p>
                {
                  "In the event of grievances related to non-receipt of the research report, missing content, or deficiencies in services, the Client may raise a grievance. The Research Analyst will ensure redressal within 7 days of such complaint."
                }
              </p>

              <div>
                {
                  "The client is required to follow the following procedure for any grievance:"
                }
                <ol className="list-decimal pl-6 mt-2 space-y-2">
                  <li>
                    {
                      "Step 1: The client should first contact the Research Analyst (RA) at the contact details mentioned below:"
                    }
                    <div className="mt-2 space-y-1 pl-4">
                      <p>{"Contact No.: +91 ___________________________"}</p>
                      <p>{"Mail ID: _________________________________"}</p>
                    </div>
                  </li>

                  <li>
                    {
                      "Step 2: In case the client is unsatisfied, he/she may lodge a complaint with SEBI through SEBI’s SCORES platform at www.scores.sebi.gov.in."
                    }
                  </li>

                  <li>
                    {
                      "Step 3: The client may also consider seeking resolution through the Online Dispute Resolution (ODR) mechanism via the SMART ODR Portal at https://smartodr.in."
                    }
                  </li>
                </ol>
              </div>

              <li className="font-medium ">
                {
                  "DISCLAIMER: The client is strictly required to follow the procedure as mentioned above. Failing to do so, the RA shall not be liable for any delay in resolution of the grievance."
                }
              </li>

              <li>
                {
                  "NOTE: Clients are advised to read the Do’s and Don’ts for dealing with the Research Analyst, as mentioned in SEBI Master Circular No. SEBI/HO/MIRSD-POD-1/P/CIR/2024/49 dated May 21, 2024, or any updates issued by SEBI from time to time.Clients are requested to go through all the Disclaimers, Disclosures, Refund Policy, and related information as mentioned on the Research Analyst’s website."
                }
              </li>
            </ol>

            <li className="underline font-semibold pt-[10px]">
              {"Most Important Terms and Conditions:"}
            </li>
            <ol className="list-decimal pl-5 space-y-3  ">
              <li className="pt-[10px]">
                {
                  "These terms and conditions, and consent thereon are for the research services provided by the Research Analyst (RA) and RA cannot execute/carry out any trade (purchase/sell transaction) on behalf of the client. Thus, the clients are advised not to permit RA to execute any trade on their behalf."
                }
              </li>

              <li>
                {
                  "The fee charged by RA to the client will be subject to the maximum amount prescribed by SEBI / Research Analyst Administration and Supervisory Body (RAASB) from time to time (applicable only for Individual and HUF Clients)."
                }
                <ol className="list-decimal pl-6 mt-2 space-y-2">
                  <li>
                    {
                      "The current fee limit is Rs 1,51,000/- per annum per family of client for all research services of the RA."
                    }
                  </li>
                  <li>{"The fee limit does not include statutory charges."}</li>
                  <li>
                    {
                      "The fee limits do not apply to a non-individual client / accredited investor."
                    }
                  </li>
                </ol>
              </li>

              <li>
                {
                  "RA may charge fees in advance if agreed by the client. Such advance shall not exceed the period stipulated by SEBI; presently it is one year. In case of pre-mature termination of the RA services by either the client or the RA, the client shall be entitled to seek refund of proportionate fees only for unexpired period."
                }
              </li>

              <li>
                {
                  "Fees to RA may be paid by the client through any of the specified modes like cheque, online bank transfer, UPI, etc. Cash payment is not allowed. Optionally the client can make payments through Centralized Fee Collection Mechanism (CeFCoM) managed by BSE Limited (i.e. currently recognized RAASB)."
                }
              </li>

              <li>
                {
                  "The RA is required to abide by the applicable regulations, circulars, and directions specified by SEBI and RAASB from time to time in relation to disclosure and mitigation of any actual or potential conflict of interest. The RA will endeavor to promptly inform the client of any conflict of interest that may affect the services being rendered to the client."
                }
              </li>

              <li>
                {
                  "Any assured, guaranteed, or fixed returns schemes or any other schemes of similar nature are prohibited by law. No scheme of this nature shall be offered to the client by the RA."
                }
              </li>

              <li>
                {
                  "The RA cannot guarantee returns, profits, accuracy, or risk-free investments from the use of the RA’s research services. All opinions, projections, and estimates of the RA are based on the analysis of available data under certain assumptions as of the date of preparation/publication of research report."
                }
              </li>

              <li>
                {
                  "Any investment made based on recommendations in research reports are subject to market risks, and recommendations do not provide any assurance of returns. There is no recourse to claim any losses incurred on the investments made based on the recommendations in the research report. Any reliance placed on the research report provided by the RA shall be as per the client’s own judgement and assessment of the conclusions contained in the research report."
                }
              </li>

              <li>
                {
                  "Registration granted by SEBI, enlistment as RA with Exchange, and certification from NISM do not guarantee the performance of the intermediary or provide any assurance of returns to investors."
                }
              </li>

              <li>
                {"For any grievances:"}
                <ol className="list-decimal pl-6 mt-2 space-y-2">
                  <li>
                    {
                      "Step 1: The client should first contact the RA using the details mentioned herewith."
                    }
                  </li>
                  <li>
                    {
                      "Step 2: If the resolution is unsatisfactory, the client can also lodge grievances through SEBI’s SCORES platform at www.scores.sebi.gov.in."
                    }
                  </li>
                  <li>
                    {
                      "Step 3: The client may also consider the Online Dispute Resolution (ODR) through the Smart ODR portal at https://smartodr.in."
                    }
                  </li>
                </ol>
              </li>

              <li>
                {
                  "Clients are required to keep contact details, including email id and mobile number/s updated with the RA at all times."
                }
              </li>

              <li className="font-medium">
                {
                  "The RA shall never ask for the client’s login credentials and OTPs for the client’s Trading Account, Demat Account, and Bank Account. Never share such information with anyone including the RA."
                }
              </li>
            </ol>
            <li className="underline font-semibold pt-[10px]">
              {"Optional Centralised Fee Collection Mechanism:"}
            </li>
            <p className="pt-[10px]">
              {
                "There is an optional ‘Centralized Fee Collection Mechanism for Investment Advisors and Research Analysts’ (CeFCoM) for fee payments. The Research Analyst has presently not opted for the same and once the Research Analyst gets registered for it, then thereafter said mechanism will be available for the client."
              }
            </p>
            <li className="underline font-semibold pt-[10px]">
              {"Confidentiality:"}
            </li>
            <p className="pt-[10px]">
              {"Client shall not share any confidential information with third party without prior consent from the RA which has come to its knowledge."}
            </p>
            <li className="underline font-semibold pt-[10px]">
              {"Dispute:"}
            </li>
            <p className="pt-[10px]">
              {"No suit, prosecution or other legal proceeding shall lie against the Research Analyst for any damage caused or likely to be caused by anything which is done in good faith or intended to be done under the provisions of the Securities and Exchange Board of India (Research Analyst) Regulations, 2014.Any Disputes between the parties shall be resolved through arbitration or other methods mutually agreed upon, in accordance with applicable legal and regulatory guidelines."}
            </p>
            <li className="underline font-semibold pt-[10px]">
              {"Severability:"}
            </li>
            <p className="pt-[10px]">
              {"If any provision of this Terms and Conditions is found to be invalid, illegal, or unenforceable, the remaining provisions will remain in full effect, provided the essential purpose of the Terms and Conditions is not undermined."}
            </p>
            <li className="underline font-semibold pt-[10px]">
              {"Force majeure:"}
            </li>
            <p className="pt-[10px]">
              {"Neither party shall be held liable for failure or delay in performance under this Terms and Conditions due to circumstances beyond their reasonable control, including but not limited to natural disasters, government actions, or other unforeseen events."}
            </p>
          </ol>
          <p className="pt-[10px]">{"The client hereby agrees to abide with the terms and conditions of the research services."}</p>
        </div>
      </div>
      <hr className="pb-[30px]"></hr>
      <Footer />
    </>
  );
};

export default Page;

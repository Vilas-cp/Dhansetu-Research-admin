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
        <h1 className="w-full bg-[#002366] flex justify-center items-center h-[35vh] text-white font-[999] text-[5vh] xl:text-[8vh]">
          Policies
        </h1>
        <div className=" xl:px-[25%] px-[5%]">
          <h2 className="text-left text-[4vh] font-bold text-black pt-[30px]">
            Our Policies – Transparency, Trust & Compliance First
          </h2>
          <p className="text-left text-[#555555] pt-[10px] leading-loose">
            {`At Dhansetu Research, we believe that long-term success in the market starts with integrity and transparency.
              As a SEBI-Registered Research Analyst (RA) and Algo Trading Solution Provider, we follow a strict set of 
              policies to ensure that every client, trade, and service adheres to the highest standards of compliance, ethics, 
              and investor protection.`}
          </p>
          <p className="text-left text-[#555555] pt-[10px] leading-loose">
            {`Our policies are designed not just to meet regulatory requirements — but to protect your interests and 
            promote responsible, data-driven investing.`}
          </p>
          <h2 className="text-left text-[4vh] font-bold text-black pt-[30px]">
            1. SEBI Compliance & Ethical Conduct Policy
          </h2>
          <p className="text-left text-[#555555] pt-[10px] leading-loose">
            {`Being a SEBI-Registered Research Analyst, Dhansetu operates under the official regulatory framework laid down by 
            the Securities and Exchange Board of India (SEBI).
            This means all our research, communication, and client interactions are governed by SEBI (Research Analyst) 
            Regulations, 2014.`}
          </p>
          <p className="text-left text-[#555555] pt-[10px] font-bold leading-loose">{`Key Highlights:`}</p>
          <ul className="list-disc pl-4">
            <li className="text-left text-[#555555]  pt-[10px]">
              All research recommendations are supported by data and analysis.
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              No misleading performance claims or guaranteed return promises.
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Complete record-keeping of all research reports and recommendations.
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Full transparency in pricing, service structure, and client agreements.
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              All analysts follow the Code of Conduct and Conflict of Interest norms.
            </li>
          </ul>
          <p className="text-left text-[#555555] pt-[10px] font-bold leading-loose">{`How It Helps You:`}</p>
          <ul className="list-disc pl-4">
            <li className="text-left text-[#555555]  pt-[10px]">
              Ensures you receive unbiased, compliant research
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Protects you from unethical market practices
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Builds trust through regulated transparency
            </li>
          </ul>
          <h2 className="text-left text-[4vh] font-bold text-black pt-[30px]">
            2. Data Privacy & Confidentiality Policy
          </h2>
          <p className="text-left text-[#555555] pt-[10px] leading-loose">
            {`Your privacy and data security are our top priorities.
Dhansetu Research follows strict data protection standards to ensure that your personal, trading, and financial 
information remains fully confidential at all times.`}
          </p>
          <p className="text-left text-[#555555] pt-[10px] font-bold leading-loose">{`We Commit To:`}</p>
          <ul className="list-disc pl-4">
            <li className="text-left text-[#555555]  pt-[10px]">
              Never sharing client data with third parties without written consent
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Using end-to-end encryption for sensitive information
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Keeping all client trading credentials private and secure
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Following IT & Cybersecurity best practices for all automation platforms
            </li>
          </ul>
          <p className="text-left text-[#555555] pt-[10px] font-bold leading-loose">{`How It Helps You:`}</p>
          <ul className="list-disc pl-4">
            <li className="text-left text-[#555555]  pt-[10px]">
              Keeps your personal and financial data safe
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Eliminates risks of misuse or unauthorized access
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Lets you trade confidently with complete peace of mind
            </li>
          </ul>
          <h2 className="text-left text-[4vh] font-bold text-black pt-[30px]">
            3. Algo Trading Transparency & Risk Policy
          </h2>
          <p className="text-left text-[#555555] pt-[10px] leading-loose">
            {`Our Algo Platform is designed for disciplined, risk-managed, and transparent trading automation.
We strictly follow regulatory and technical guidelines to ensure that all algo executions are client-controlled, secure, and fully auditable.`}
          </p>
          <p className="text-left text-[#555555] pt-[10px] font-bold leading-loose">{`Policy Framework:`}</p>
          <ul className="list-disc pl-4">
            <li className="text-left text-[#555555]  pt-[10px]">
              Client-controlled trading: We never access or trade on your funds.
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Research-based signals: Only verified, SEBI-compliant logic is used.
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Backtesting before deployment: Every strategy is tested before live execution.
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Stop-loss, target, and position limits are pre-defined.
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              No pooled accounts, shared profits, or fixed-return promises.
            </li>
          </ul>
          <p className="text-left text-[#555555] pt-[10px] font-bold leading-loose">{`How It Helps You:`}</p>
          <ul className="list-disc pl-4">
            <li className="text-left text-[#555555]  pt-[10px]">
              You remain the full owner of your trading account
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              You can monitor every trade in real-time
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              You stay compliant with SEBI and exchange norms
            </li>
          </ul>
          <h2 className="text-left text-[4vh] font-bold text-black pt-[30px]">
            3. Algo Trading Transparency & Risk Policy
          </h2>
          <p className="text-left text-[#555555] pt-[10px] leading-loose">
            {`Our Algo Platform is designed for disciplined, risk-managed, and transparent trading automation.
We strictly follow regulatory and technical guidelines to ensure that all algo executions are client-controlled, secure, and fully auditable.`}
          </p>
          <p className="text-left text-[#555555] pt-[10px] font-bold leading-loose">{`Policy Framework:`}</p>
          <ul className="list-disc pl-4">
            <li className="text-left text-[#555555]  pt-[10px]">
              Client-controlled trading: We never access or trade on your funds.
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Research-based signals: Only verified, SEBI-compliant logic is used.
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Backtesting before deployment: Every strategy is tested before live execution.
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Stop-loss, target, and position limits are pre-defined.
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              No pooled accounts, shared profits, or fixed-return promises.
            </li>
          </ul>
          <p className="text-left text-[#555555] pt-[10px] font-bold leading-loose">{`How It Helps You:`}</p>
          <ul className="list-disc pl-4">
            <li className="text-left text-[#555555]  pt-[10px]">
              You remain the full owner of your trading account
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              You can monitor every trade in real-time
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              You stay compliant with SEBI and exchange norms
            </li>
          </ul>
          <h2 className="text-left text-[4vh] font-bold text-black pt-[30px]">
            4. Risk Disclosure & Investor Awareness Policy
          </h2>
          <p className="text-left text-[#555555] pt-[10px] leading-loose">
            {`Trading and investing in financial markets involve risks — and we make sure our clients are fully aware of those risks before starting.
Our Risk Disclosure Policy is designed to educate and protect traders from unrealistic expectations and financial mistakes.`}
          </p>
          <p className="text-left text-[#555555] pt-[10px] font-bold leading-loose">{`We Clearly Inform:`}</p>
          <ul className="list-disc pl-4">
            <li className="text-left text-[#555555]  pt-[10px]">
              Market investments are subject to volatility and losses
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Past performance is not an indicator of future results
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              All trades are based on probability, not certainty
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Traders should use proper position sizing and risk controls
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Clients must read and understand disclaimers before subscribing
            </li>
          </ul>
          <p className="text-left text-[#555555] pt-[10px] font-bold leading-loose">{`How It Helps You:`}</p>
          <ul className="list-disc pl-4">
            <li className="text-left text-[#555555]  pt-[10px]">
              Promotes informed and disciplined trading
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Prevents overexposure and emotional decisions
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Helps you align expectations with real market dynamics
            </li>
          </ul>
          <h2 className="text-left text-[4vh] font-bold text-black pt-[30px]">
            5. Pricing & Refund Policy
          </h2>
          <p className="text-left text-[#555555] pt-[10px] leading-loose">
            {`Transparency in pricing is a part of our core values.
We clearly communicate all service charges and subscription costs before onboarding any client.`}
          </p>
          <p className="text-left text-[#555555] pt-[10px] font-bold leading-loose">{`Our Approach:`}</p>
          <ul className="list-disc pl-4">
            <li className="text-left text-[#555555]  pt-[10px]">
              No hidden charges or surprise deductions
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Pricing displayed openly on our website and invoices
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Refunds handled as per defined terms in the client agreement
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              All transactions done through authorized, traceable channels
            </li>
          </ul>
          <p className="text-left text-[#555555] pt-[10px] font-bold leading-loose">{`How It Helps You:`}</p>
          <ul className="list-disc pl-4">
            <li className="text-left text-[#555555]  pt-[10px]">
              You know exactly what you're paying for
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              No confusion or hidden terms
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Transparent and professional service relationship
            </li>
          </ul>
          <h2 className="text-left text-[4vh] font-bold text-black pt-[30px]">
            6. Conflict of Interest & Research Integrity Policy
          </h2>
          <p className="text-left text-[#555555] pt-[10px] leading-loose">
            {`To ensure unbiased and objective research, Dhansetu maintains a strict internal control system separating research 
            and execution teams. We do not engage in any activities that could compromise client trust or research integrity.`}
          </p>
          <p className="text-left text-[#555555] pt-[10px] font-bold leading-loose">{`Policy Includes:`}</p>
          <ul className="list-disc pl-4">
            <li className="text-left text-[#555555]  pt-[10px]">
              Analysts cannot trade in stocks they recommend
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Independent research process for every report
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              No third-party incentives to promote specific instruments
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Regular internal audits for compliance
            </li>
          </ul>
          <p className="text-left text-[#555555] pt-[10px] font-bold leading-loose">{`How It Helps You:`}</p>
          <ul className="list-disc pl-4">
            <li className="text-left text-[#555555]  pt-[10px]">
              Guarantees impartial recommendations
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Keeps research pure and trustworthy
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Builds long-term reliability and client confidence
            </li>
          </ul>
          <h2 className="text-left text-[4vh] font-bold text-black pt-[30px]">
            7. Client Support & Grievance Redressal Policy
          </h2>
          <p className="text-left text-[#555555] pt-[10px] leading-loose">
            {`Your satisfaction and trust matter the most.
If you ever face an issue, we have a transparent and structured grievance redressal mechanism to ensure timely resolution.`}
          </p>
          <p className="text-left text-[#555555] pt-[10px] font-bold leading-loose">{`Support Process:`}</p>
          <ul className="list-disc pl-4">
            <li className="text-left text-[#555555]  pt-[10px]">
              Raise your concern via WhatsApp, Email, or Call
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Issue recorded and forwarded to Compliance Officer
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              {`Resolution within 3-5 business days (depending on complexity)`}
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              {`Escalation to SEBI SCORES platform (if required)`}
            </li>
          </ul>
          <p className="text-left text-[#555555] pt-[10px] font-bold leading-loose">{`How It Helps You:`}</p>
          <ul className="list-disc pl-4">
            <li className="text-left text-[#555555]  pt-[10px]">
              Ensures accountability at every level
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Keeps communication open and transparent
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Protects your consumer rights and interests
            </li>
          </ul>
          <h2 className="text-left text-[4vh] font-bold text-black pt-[30px]">
            8. Compliance with Anti-Fraud & Cybersecurity Standards
          </h2>
          <p className="text-left text-[#555555] pt-[10px] leading-loose">
            {`As a financial research and technology firm, Dhansetu Research actively monitors and protects 
            its digital systems against fraud, scams, or unauthorized use.`}
          </p>
          <p className="text-left text-[#555555] pt-[10px] font-bold leading-loose">{`Measures We Take:`}</p>
          <ul className="list-disc pl-4">
            <li className="text-left text-[#555555]  pt-[10px]">
              Regular system audits and penetration testing
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Two-factor authentication for user logins
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              {`Secure data storage and cloud encryption`}
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              {`Employee training for data protection and compliance`}
            </li>
          </ul>
          <p className="text-left text-[#555555] pt-[10px] font-bold leading-loose">{`How It Helps You:`}</p>
          <ul className="list-disc pl-4">
            <li className="text-left text-[#555555]  pt-[10px]">
              Keeps your algo trading safe from technical misuse
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Ensures stable and secure platform performance
            </li>
            <li className="text-left text-[#555555]  pt-[10px]">
              Maintains system reliability even during high market activity
            </li>
          </ul>
          <h2 className="text-left text-[4vh] font-bold text-black pt-[30px]">
            Our Promise: Fair, Compliant & Transparent Operations
          </h2>
          <p className="text-left text-[#555555] pt-[10px] leading-loose">
            {`At Dhansetu, policies are not paperwork — they are principles we live by.
Every client interaction, every recommendation, and every trade execution happens under the light of compliance, ethics, and full transparency.`}
          </p>
          <p className="text-left text-[#555555] pt-[10px] leading-loose">{`We want every trader and investor to 
          know — with Dhansetu, your capital, data, and trust are always respected and protected.`}</p>
          <h2 className="text-left text-[4vh] font-bold text-black pt-[30px]">
            Summary of Our Policy Pillars
          </h2>
          <p className="text-left text-[#555555] pt-[10px] leading-loose">
            {`Policy Area	Objective	Benefit to Client
SEBI Compliance	Ethical & regulated operations	Legally protected research
Data Privacy	Protect client info	Secure personal and trading data
Algo Transparency	Fair, client-side automation	100% account control
Risk Disclosure	Educated trading decisions	Awareness of volatility
Refund & Pricing	Transparent billing	No hidden terms
Conflict of Interest	Neutral research	Trustworthy insights
Grievance Redressal	Quick issue resolution	Accountability & satisfaction
Cybersecurity	Technical protection	Safe & stable automation
`}
          </p>
        </div>
      </div>
      <hr className="pb-[30px]"></hr>
      <Footer />
    </>
  );
};

export default Page;

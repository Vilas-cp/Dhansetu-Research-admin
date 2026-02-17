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
          Privacy policy
        </h1>
        <div className=" xl:px-[25%] px-[5%]">
          <h2 className="text-left text-[4vh] font-bold text-black pt-[30px]">
            Website Privacy Policy
          </h2>
          <ul className="list-disc">
          <li className="text-left text-[#555555] pt-[10px] leading-loose">
            {`We understand and respect your privacy, and we are committed to protecting it. In order to provide transparency and clarity on how we collect and use your information, we have created this notice which outlines our online information practices and your options for providing and managing that information.`}
          </li>
           <li className="text-left text-[#555555] pt-[10px] leading-loose">
            {`Protecting your privacy and data is extremely important to us. We take measures to ensure the security and confidentiality of any information shared with us. We will only use personally identifiable information for the purposes to which you have consented. However, we cannot guarantee the security of your information 100%, despite our efforts to protect it. Any information you transmit to us through our online services is done at your own risk.`}
          </li>
           <li className="text-left text-[#555555] pt-[10px] leading-loose">
            {`Please note that you may receive calls related to service promotions, contests, and pools organized by us. Your information, whether public or private, will be held with us only. However, it may be transferred or given to our regulatory authorities and their related organizations, as well as any organizations or individuals with whom we have an interest for any reason, without your consent.`}
          </li>
          <li className="text-left text-[#555555] pt-[10px] leading-loose">
            {`In addition of the services we provide to you, we may also use your personal information such as your mobile number and email address to send you newsletters, surveys, contest information, or updates on any new services that we believe may be beneficial to you. By subscribing to our services, you agree to allow Vivek Singh Rajpoot Proprietor of Dhansetu Research to use your personal information for these purposes.`}
          </li>
           <li className="text-left text-[#555555] pt-[10px] leading-loose">
            {`By submitting the 'Inquiry form' on this website or through any other means, including social media, you are providing your consent to allow us to contact you via phone call, SMS, or WhatsApp on the number provided by you. Even if your mobile number is registered on the National 'Do Not Disturb' registry, you agree to receive communication from us. We appreciate your trust in us and assure you that we will always respect your privacy.`}
          </li>
          </ul>
        </div>
      </div>
      <hr className="pb-[30px]"></hr>
      <Footer />
    </>
  );
};

export default Page;

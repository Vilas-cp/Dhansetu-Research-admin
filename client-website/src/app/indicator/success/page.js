import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import LoadGoogleAdsIframe from "@/components/LoadGoogleAdsIframe";
import LoadGoogleAdsScript from "@/components/LoadGoogleAdsScript";
import React from "react";
import Wrapper from "./Wrapper";

function Home() {
  return (
    <div>
      <LoadGoogleAdsScript />
      <LoadGoogleAdsIframe />
      <Header1 />
      <div className="mt-[120px]"></div>
      <Wrapper
      />
      <Footer />
    </div>
  );
}

export default Home;

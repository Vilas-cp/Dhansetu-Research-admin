import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import LoadGoogleAdsIframe from "@/components/LoadGoogleAdsIframe";
import LoadGoogleAdsScript from "@/components/LoadGoogleAdsScript";
import React, { Suspense } from "react";
import Wrapper from "./Wrapper";

function Page() {
  return (
    <div>
      <LoadGoogleAdsScript />
      <LoadGoogleAdsIframe />
      <Header1 />
      <div className="mt-[120px]" />
      <Suspense fallback={<Loading />}>
        <Wrapper />
      </Suspense>

      <Footer />
    </div>
  );
}

function Loading() {
  return (
    <div className="min-h-[300px] flex items-center justify-center">
      Loading payment details...
    </div>
  );
}

export default Page;
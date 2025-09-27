"use client";
import React, { useRef, useState } from "react";
import Herosection from "./components/Herosection";
import Header1 from "@/components/Header1";
import Footer from "@/components/Footer";
import Economic from "./components/Economic";
import PaymentCard from "./components/PaymentCard";
import Winning from "./components/Winning";
import Lifetime from "./components/Lifetime";
import Script from "next/script";
import Indicators from "./components/Indicators";
import LoadGoogleAdsScript from "@/components/LoadGoogleAdsScript";
import LoadGoogleAdsIframe from "@/components/LoadGoogleAdsIframe";

const Home = () => {
  const paymentForm = useRef();
  const indicatorsComp = useRef();
  const [selectedStrategy, setSelectedStrategy] = useState(null);
  const [selectedStrategyBronze, setSelectedStrategyBronze] = useState(null);
  return (
    <div>
      <LoadGoogleAdsScript />
      <LoadGoogleAdsIframe />
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <Header1 />
      <Herosection
        paymentForm={paymentForm}
        setSelectedStrategy={setSelectedStrategy}
      />
      <Winning />
      <Economic
        indicatorsComp={indicatorsComp}
        paymentForm={paymentForm}
        setSelectedStrategy={setSelectedStrategy}
      />
      <PaymentCard
        paymentForm={paymentForm}
        selectedStrategy={selectedStrategy}
        setSelectedStrategy={setSelectedStrategy}
        selectedStrategyBronze={selectedStrategyBronze}
        setSelectedStrategyBronze={setSelectedStrategyBronze}
      />
      <Lifetime
        paymentForm={paymentForm}
        setSelectedStrategy={setSelectedStrategy}
      />
      <Indicators indicatorsComp={indicatorsComp} />
      <Footer />
    </div>
  );
};

export default Home;

"use client";
import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import IndustryWeServeSection from "@/components/IndustryWeServeSection";
import LoadingScreen from "@/components/LoadingScreen";
import OurServicesSection from "@/components/OurServicesSection";
import OurValuesSection from "@/components/OurValuesSection";
import PurpleCardSection from "@/components/PurpleCardSection";
import SidePopup from "@/components/SidePopup";
import SidePopupR from "@/components/SidePopupR";
import SlidingHeroSection from "@/components/SlidingHeroSection";
import Testimonials from "@/components/Testimonials";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import LoadGoogleAdsScript from "@/components/LoadGoogleAdsScript";
import LoadGoogleAdsIframe from "@/components/LoadGoogleAdsIframe";
import AppFormComp from "@/components/FormComp/AppFormComp";

export default function Home() {
  const [loading, setLoading] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  let isLoaded = true;
  for (let index = 0; index < loading.length; index++) {
    isLoaded = isLoaded && loading[index];
  }
  useEffect(() => {
    async function loadImg() {
      const img1 = window.document.createElement("img");
      img1.onload = function () {
        // console.log("hi");
        setLoading((prevLoad) => {
          const newLoad = [...prevLoad];
          newLoad[7] = true;
          return newLoad;
        });
      };
      img1.src = "/sls-images/1.jpeg";
    }
    loadImg();
  }, []);
  return (
    <>
    <LoadGoogleAdsScript />
      <main>
        <LoadGoogleAdsIframe />

        <SidePopup />
        <SidePopupR />
        <Header1 />

        <AnimatePresence mode="wait">
          {!isLoaded && <LoadingScreen />}
        </AnimatePresence>

        <SlidingHeroSection setLoading={setLoading} indexLoad={0} />
        <PurpleCardSection setLoading={setLoading} indexLoad={1} />

        <OurServicesSection setLoading={setLoading} indexLoad={2} />
        <IndustryWeServeSection setLoading={setLoading} indexLoad={3} />
        <OurValuesSection setLoading={setLoading} indexLoad={4} />
        <AppFormComp />
        <Testimonials setLoading={setLoading} indexLoad={5} />
        <ContactUsSection setLoading={setLoading} indexLoad={6} />
        <Footer />
      </main>
    </>
  );
}

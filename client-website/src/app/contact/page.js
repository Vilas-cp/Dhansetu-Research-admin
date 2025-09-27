"use client";
import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import React from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;

import dynamic from "next/dynamic";
import BlobComp from "@/components/FormComp/BlobComp";
import FormComp from "@/components/FormComp/FormComp";
import LoadGoogleAdsScript from "@/components/LoadGoogleAdsScript";
import LoadGoogleAdsIframe from "@/components/LoadGoogleAdsIframe";

const SimpleMap = dynamic(() => import("./components/SimpleMap"), {
  ssr: false,
});

const Page = () => {
  return (
    <>
      <LoadGoogleAdsScript />
      <LoadGoogleAdsIframe />
      <Header1 />

      <div className="pt-[80px] ">
        <h1 className="w-full flex justify-center items-center h-[35vh] text-[#102b5c] font-[999] text-[5vh] xl:text-[8vh]">
          Contact Us
        </h1>
        <div className="lg:flex pt-[80px] xl:px-[5%] relative">
          <BlobComp />
          <FormComp />
          <div className="px-[5%]">
            <h2 className="text-left text-[6vh] font-bold text-black  pt-[30px]">
              Contact Us
            </h2>
            <h3 className="text-left text-[3vh] font-bold text-black  pt-[30px]">
              Contact Information
            </h3>
            <div className="text-lg list-none">
              <li className="text-left text-[#555555]  p1 pt-[30px] font-medium ">
                <span className="text-red-500 font-bold fa">
                  <FontAwesomeIcon icon={faPhone} />
                </span>{" "}
                <a href="tel:9179042673"> : +91 9179042673</a>
              </li>
              <li className="text-left text-[#555555]  p1 pt-[30px] font-medium ">
                <a href="mailto:Braintechintelligence@gmail.com">
                  <span className="text-red-500 font-bold">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>{" "}
                  : brainautotech1902@gmail.com
                </a>
              </li>
              <li className="text-left text-[#555555]  p1 pt-[30px] font-medium ">
                <span className="text-red-500 font-bold">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                </span>
                <a href="#map">
                  : Sai kripa colony, Radisson square, Indore,<br></br> Madhya
                  Pradesh 452010
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full" id="mapcont">
        <SimpleMap />
      </div>
      <hr className="pb-[20px]"></hr>

      <Footer />
    </>
  );
};

export default Page;

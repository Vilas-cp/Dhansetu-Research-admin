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
import BlobComp from "@/components/FormComp/BlobComp";
import FormComp from "@/components/FormComp/FormComp";
import { Toaster } from "react-hot-toast";

function AppFormComp() {
  return (
    <>
      <div className="pt-[20px] ">
        <div className="w-full flex justify-center items-center h-[35vh] text-[#102b5c] font-[999] text-[5vh] xl:text-[8vh]">
          Contact Us
        </div>
        <div className="lg:flex pt-[40px] xl:px-[5%] relative">
          <BlobComp />
          <FormComp />
          <div className="px-[5%]">
            <h2 className="text-left text-[6vh] font-bold text-black  pt-[30px]">
              Contact Us
            </h2>
            <h2 className="text-left text-[3vh] font-bold text-black  pt-[30px]">
              Contact Information
            </h2>
            <div className="text-lg list-none">
              <li className="text-left text-[#555555]  p1 pt-[30px] font-medium ">
                <span className="text-red-500 font-bold fa">
                  <FontAwesomeIcon icon={faPhone} />
                </span>{" "}
                <a href="tel:9179042673"> : +91 9179042673</a>
              </li>
              <li className="text-left text-[#555555]  p1 pt-[30px] font-medium ">
                <a href="mailto:support@dhansetu.in">
                  <span className="text-red-500 font-bold">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>{" "}
                  : support@dhanseturesearch.com
                </a>
              </li>
              <li className="text-left text-[#555555]  p1 pt-[30px] font-medium ">
                <span className="text-red-500 font-bold">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                </span>
                <a href="/contact/#mapcont">
                  : 601, 6th Floor, H2, Belmont park, Niranjanpur, 
                  Indore, Madhya Pradesh, 452010
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default AppFormComp;

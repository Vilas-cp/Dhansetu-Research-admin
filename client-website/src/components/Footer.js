import React from "react";
import { Phone, Mail, Clock, MapPin, ExternalLink } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
const poppinsFont = Poppins({ subsets: ["latin"], weight: "300" });
const poppinsFont1 = Poppins({ subsets: ["latin"], weight: "700" });
const poppinsFont2 = Poppins({ subsets: ["latin"], weight: "500" });

export default function Footer() {
  return (
    <div className={poppinsFont2.className}>
      <div className=" flex items-center justify-center ">
        <footer className="w-full   bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-800  shadow-2xl p-12 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              {/* About Company */}
              <div>
                <h3 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-amber-400 inline-block">
                  About Company
                </h3>
                <p className="text-gray-200 leading-relaxed mt-6 text-sm">
                  We are SEBI registered as Research Analyst. Providing research
                  recommendations to traders and investors of Indian equity
                  market.
                </p>
                <div className="mt-8 space-y-2 text-sm text-gray-200">
                  <p>BSE Enlistment No. - 0000</p>
                  <p>SEBI Registration No. - INH000024550</p>
                  <p>Validity:- Jan 01, 2026 - Dec 31, 2030</p>
                </div>
              </div>

              {/* Vertical Divider */}
              {/* <div className="hidden lg:block absolute left-1/4 top-0 bottom-0 w-px bg-amber-400" ></div> */}

              {/* Our Services */}
              <div>
                <h3 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-amber-400 inline-block">
                  Our Services
                </h3>
                <ul className="mt-6 space-y-3 text-sm text-gray-200">
                  <li>
                    <Link
                      href="/services/equity-options-research/"
                      className="hover:text-amber-300 transition-colors cursor-pointer"
                    >
                      Equity & Options Research
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/commodity-research/"
                      className="hover:text-amber-300 transition-colors cursor-pointer"
                    >
                      {"Commodity(MCX) Research"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/algo-trading-support/"
                      className="hover:text-amber-300 transition-colors cursor-pointer"
                    >
                      Algo Trading Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/premium-ra-algo-support/"
                      className="hover:text-amber-300 transition-colors cursor-pointer"
                    >
                      Premium RA + Algo Combo
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Quick Link */}
              <div>
                <h3 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-amber-400 inline-block">
                  Quick Link
                </h3>
                <ul className="mt-6 space-y-3 text-sm text-gray-200">
                  <li className="hover:text-amber-300 transition-colors cursor-pointer">
                    Terms and Condition
                  </li>
                  <li className="hover:text-amber-300 transition-colors cursor-pointer">
                    Disclosure
                  </li>
                  <li className="hover:text-amber-300 transition-colors cursor-pointer">
                    Investor Charter
                  </li>
                  <li className="hover:text-amber-300 transition-colors cursor-pointer">
                    Grievance Redressal Process
                  </li>
                  <li className="hover:text-amber-300 transition-colors cursor-pointer">
                    Refund Policy
                  </li>
                </ul>
              </div>

              {/* Get In Touch */}
              <div>
                <h3 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-amber-400 inline-block">
                  Get In Touch
                </h3>

                <div className="mt-6 space-y-4 text-sm text-gray-200">
                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <a
                      href="tel:+919993898621"
                      className="hover:text-amber-300 transition-colors"
                    >
                      (+91) 9993898621
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-1">
                      <a
                        href="mailto:info@dhanseturesearch.com"
                        className="hover:text-amber-300 transition-colors"
                      >
                        info@dhanseturesearch.com
                      </a>
                      <a
                        href="mailto:dhanseturesearch@gmail.com"
                        className="hover:text-amber-300 transition-colors"
                      >
                        dhanseturesearch@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-start gap-3">
                    <ExternalLink className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <a
                      href="https://dhanseturesearch.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-amber-300 transition-colors break-all"
                    >
                      https://dhanseturesearch.com/
                    </a>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span>
                      Office Hour:{" "}
                      <span className="text-amber-400 font-semibold">
                        9AM - 6PM
                      </span>
                    </span>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <a
                      href="https://www.google.com/maps/search/?api=1&query= +H2,+Belmont park,+Niranjanpur,+Indore,+Madhya+Pradesh+452010"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-amber-300 transition-colors"
                    >
                       601, 6th Floor, H2, Belmont park, Niranjanpur, Indore,
                      Madhya Pradesh, 452010
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="pt-8 border-t border-[#2a5d6c] text-center text-sm text-gray-200">
              <p><span className="text-red-500 font-bold">Disclaimer:</span> Investment are subject to market risk, read all related documents carefully before investing.</p>
              <p>© 2026 Dhansetu Research. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

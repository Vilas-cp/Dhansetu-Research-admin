"use client";
import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import React from "react";
import LoadGoogleAdsScript from "@/components/LoadGoogleAdsScript";
import LoadGoogleAdsIframe from "@/components/LoadGoogleAdsIframe";

const table1 = [
  {
    srNo: "1.",
    rF: "Directly from Investors",
    pend: "0",
    rec: "1",
    totPend: "0",
    pend3: "0",
    avg: "10"
  },
  {
    srNo: "2.",
    rF: "SEBI (SCORE S)",
    pend: "0",
    rec: "0",
    totPend: "0",
    pend3: "1",
    avg: "N.A."
  },
  {
    srNo: "3.",
    rF: "Other Sources (if any)",
    pend: "0",
    rec: "0",
    totPend: "0",
    pend3: "0",
    avg: "N.A."
  },
  {
    srNo: "",
    rF: "Grand Total",
    pend: "0",
    rec: "0",
    totPend: "0",
    pend3: "0",
    avg: "N.A."
  },
];

const table2 = [
  {
    srNo: "1.",
    mon: "October 2024",
    car: "00",
    rec: "00",
    res: "00",
    pend: "00",
  },
  {
    srNo: "2.",
    mon: "November 2024",
    car: "00",
    rec: "00",
    res: "00",
    pend: "00",
  },
  {
    srNo: "3.",
    mon: "December 2024",
    car: "00",
    rec: "00",
    res: "00",
    pend: "00",
  },
  {
    srNo: "4.",
    mon: "January 2025",
    car: "00",
    rec: "00",
    res: "00",
    pend: "00",
  },
  {
    srNo: "5.",
    mon: "February 2025",
    car: "00",
    rec: "01",
    res: "01",
    pend: "00",
  },
  {
    srNo: "6.",
    mon: "March 2025",
    car: "00",
    rec: "00",
    res: "00",
    pend: "00",
  },
  {
    srNo: "7.",
    mon: "April 2025",
    car: "00",
    rec: "00",
    res: "00",
    pend: "00",
  },
  {
    srNo: "8.",
    mon: "May 2025",
    car: "00",
    rec: "01",
    res: "01",
    pend: "00",
  },
  {
    srNo: "9.",
    mon: "June  2025",
    car: "00",
    rec: "01",
    res: "01",
    pend: "00",
  },
  {
    srNo: "10.",
    mon: "July  2025",
    car: "00",
    rec: "01",
    res: "00",
    pend: "01",
  },
  {
    srNo: "11.",
    mon: "August 2025",
    car: "00",
    rec: "00",
    res: "00",
    pend: "00",
  },
  {
    srNo: "12.",
    mon: "September 2025",
    car: "00",
    rec: "01",
    res: "01",
    pend: "00",
  },
  {
    srNo: "",
    mon: "Grand Total",
    car: "00",
    rec: "05",
    res: "04",
    pend: "01",
  },
];

const table3 = [
  {
    srNo: "1.",
    yr: "2023-2024",
    car: "00",
    rec: "00",
    res: "00",
    pend: "00",
  },
  {
    srNo: "2.",
    yr: "2024-2025",
    car: "00",
    rec: "04",
    res: "04",
    pend: "00",
  },
  {
    srNo: "3.",
    yr: "2025-2026",
    car: "00",
    rec: "04",
    res: "03",
    pend: "01",
  },
  {
    srNo: "",
    yr: "Grand Total",
    car: "00",
    rec: "08",
    res: "07",
    pend: "01",
  },
];

const Complaint = () => {

  return (
    <>
      <LoadGoogleAdsScript />
      <div>
        <LoadGoogleAdsIframe />
        <Header1 />

       <div className='pt-[130px]'>
        <h1 className="w-full bg-[#002366] flex justify-center items-center h-[35vh] text-white font-[999] text-[5vh] xl:text-[8vh] ">
          Complaint Status
        </h1>
        </div>

        {/* Image Gallery Section */}
        <div className="pt-[40px] pb-[30px] px-3 lg:px-80 space-y-3">
          <h2 className="text-[#002366] text-3xl font-bold">
            Complaint Status
          </h2>
          <p>Formats for investors complaints data to be disclosed monthly by RAs on their website/mobile application:</p>
          <h3 className="text-[#002366] text-2xl font-bold">Data for the month ending - September 2025</h3>
          <div className="w-full overflow-x-auto">
            <table className="border-collapse w-full">
              <thead>
                <tr>
                  <Th2>{`Sr.No.`}</Th2>
                  <Th2>{`Received from`}</Th2>
                  <Th2>{`Pending at the end of last month`}</Th2>
                  <Th2>{`Received`}</Th2>
                  <Th2>{`Total Pending#`}</Th2>
                  <Th2>{`Pending complaints > 3months`}</Th2>
                  <Th2>{`Average Resolution time^ (in days)`}</Th2>
                </tr>
              </thead>
              <tbody>
                {table1.map((ele, index) => (
                  <tr key={index}>
                    <Td2>{ele.srNo}</Td2>
                    <Td2>{ele.rF}</Td2>
                    <Td2>{ele.pend}</Td2>
                    <Td2>{ele.rec}</Td2>
                    <Td2>{ele.totPend}</Td2>
                    <Td2>{ele.pend3}</Td2>
                    <Td2>{ele.avg}</Td2>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Average Resolution time is the sum total of time taken to resolve each complaint in days, in the current 
            month divided by total number of complaints resolved in the current month.</p>
          <h3 className="text-[#002366] text-2xl font-bold">Trend of monthly disposal of complaints</h3>
          <div className="w-full overflow-x-auto">
            <table className="border-collapse w-full">
              <thead>
                <tr>
                  <Th2>{`Sr.No.`}</Th2>
                  <Th2>{`Month`}</Th2>
                  <Th2>{`Carried forward from previous month`}</Th2>
                  <Th2>{`Received`}</Th2>
                  <Th2>{`Resolved*`}</Th2>
                  <Th2>{`Pending#`}</Th2>
                </tr>
              </thead>
              <tbody>
                {table2.map((ele, index) => (
                  <tr key={index}>
                    <Td2>{ele.srNo}</Td2>
                    <Td2>{ele.mon}</Td2>
                    <Td2>{ele.car}</Td2>
                    <Td2>{ele.rec}</Td2>
                    <Td2>{ele.res}</Td2>
                    <Td2>{ele.pend}</Td2>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            *Inclusive of complaints of previous months resolved in the current month.
            <br/>
            #Inclusive of complaints pending as on the last day of the month.
            <br/><br/>
            *Multiple complaints done by a single client count as one.
          </p>
          <h3 className="text-[#002366] text-2xl font-bold">Trend of annual disposal of complaints</h3>
          <div className="w-full overflow-x-auto">
            <table className="border-collapse w-full">
              <thead>
                <tr>
                  <Th2>{`Sr.No.`}</Th2>
                  <Th2>{`Year`}</Th2>
                  <Th2>{`Carried forward from previous year`}</Th2>
                  <Th2>{`Received`}</Th2>
                  <Th2>{`Resolved*`}</Th2>
                  <Th2>{`Pending#`}</Th2>
                </tr>
              </thead>
              <tbody>
                {table3.map((ele, index) => (
                  <tr key={index}>
                    <Td2>{ele.srNo}</Td2>
                    <Td2>{ele.yr}</Td2>
                    <Td2>{ele.car}</Td2>
                    <Td2>{ele.rec}</Td2>
                    <Td2>{ele.res}</Td2>
                    <Td2>{ele.pend}</Td2>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            *Inclusive of complaints of previous years resolved in the current year.
            <br />
            #Inclusive of complaints pending as on the last day of the year.
          </p>
        </div>
        <hr className="pb-[30px]" />
        <Footer />
      </div>
    </>
  );
};

function Th2({children}) {
  return (
    <th className="border border-gray-400 px-2 py-1 lg:px-4 lg:py-2">{children}</th>
  );
}

function Td2({ children }) {
  return (
    <td className="border border-gray-400 px-2 py-1 lg:px-4 lg:py-2">{children}</td>
  );
}

export default Complaint;

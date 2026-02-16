"use client";
import React, { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";

function Wrapper() {
  const [newRow, setNewRow] = useState(null);
  const mainRef = useRef(null);
  const downloadRef = useRef(null);

  useEffect(() => {
    const stored = window.localStorage.getItem("newRow");
    if (!stored) {
      window.location.href = "/";
      return;
    }
    setNewRow(JSON.parse(stored));
  }, []);

  function downloadPageHandle() {
    if (!mainRef.current || !downloadRef.current) return;

    html2canvas(mainRef.current).then((canvas) => {
      const dataString = canvas.toDataURL("image/png");
      downloadRef.current.href = dataString;
      downloadRef.current.click();
    });
  }

  if (!newRow) return null;

  return (
    <div ref={mainRef} className="pb-[30px] bg-white">
      {/* Header */}
      <h1 className="w-full bg-[#aee9e7] flex justify-center items-center h-[35vh] text-[#102b5c] font-extrabold text-[4vh] xl:text-[8vh]">
        Payment Successful
      </h1>

      <div className="flex flex-col items-center px-2 lg:px-20">
        {/* Message */}
        <div className="text-center text-black text-[3vh] pt-[10px] leading-loose font-medium">
          Thank you for purchasing. You can{" "}
          <span
            onClick={downloadPageHandle}
            className="text-red-500 cursor-pointer underline"
          >
            download this page
          </span>{" "}
          or{" "}
          <span
            onClick={() => window.print()}
            className="text-red-500 cursor-pointer underline"
          >
            print it
          </span>{" "}
          for future reference. We will contact you shortly.
        </div>

        {/* Download Button */}
        <div
          className="cursor-pointer bg-orange-400 text-white px-8 py-4 my-7 rounded-xl font-semibold"
          onClick={downloadPageHandle}
        >
          Download Page
        </div>

        <a ref={downloadRef} className="hidden" download="payment.png">
          download
        </a>

        {/* Order Details */}
        <div className="w-full max-w-4xl mx-auto p-8 bg-slate-50 rounded-lg border-[12px] border-white shadow-2xl">
          <h2 className="text-2xl text-center font-bold mb-7 text-[#1f3a68]">
            Your Order Details
          </h2>

          <div className="flex flex-row flex-wrap gap-x-6">
            <LabelComp label="Name" value={newRow.yourName} />
            <LabelComp label="Email" value={newRow.email} />
            <LabelComp label="Mobile" value={newRow.mobile} />
            <LabelComp label="Plan" value={newRow.plan} />
            <LabelComp label="Billing Cycle" value={newRow.billingCycle} />
            <LabelComp label="Status" value="Paid" />
            <LabelComp label="Razorpay Order ID" value={newRow.rzorderid} />
            <LabelComp label="Razorpay Payment ID" value={newRow.rzpaymentid} />
            <LabelComp label="Razorpay Signature" value={newRow.rzsign} />
          </div>
        </div>
      </div>
    </div>
  );
}

function LabelComp({ label, value = "" }) {
  return (
    <div className="mb-4 min-w-[260px]">
      <label className="block text-sm font-semibold mb-2 text-[#1f3a68]">
        {label}
      </label>
      <div className="w-full px-3 py-3 border rounded-lg bg-slate-100 text-sm break-all">
        {value}
      </div>
    </div>
  );
}

export default Wrapper;

"use client";

import React, { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import { useRouter, useSearchParams } from "next/navigation";
import { BASE_URL } from "@/components/api/url";

function Wrapper() {
  const search = useSearchParams();
  const id=search.get('id')
  const router = useRouter();

  const [newRow, setNewRow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const mainRef = useRef(null);
  const downloadRef = useRef(null);

  const fetchOrderDetails = async () => {
    try {
      const res = await fetch(`${BASE_URL}web/v1/buy/details/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await res.json();
      const order = result?.data?.orderDetails;

      if (order === -1) {
        setError("Invalid Order ID");
        setLoading(false);
        return;
      }

      setNewRow({
        yourName: order.userName,
        email: order.userEmail,
        mobile: order.userNo,
        plan: order.optId,
        billingCycle: order.timeId,
        rzorderid: order.rzOrderId,
        rzpaymentid: order.rzPayId,
        rzsign: "N/A",
        amount: order.amount,
        paymentTime: order.paymentTime,
      });

      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Something went wrong while fetching order details");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchOrderDetails();
    }
  }, [id]);

  function downloadPageHandle() {
    if (!mainRef.current || !downloadRef.current) return;

    html2canvas(mainRef.current).then((canvas) => {
      const dataString = canvas.toDataURL("image/png");
      downloadRef.current.href = dataString;
      downloadRef.current.click();
    });
  }

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Loading order details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-red-600 text-xl">
        <p>{error}</p>
        <button
          className="mt-4 underline"
          onClick={() => router.push("/")}
        >
          Go Home
        </button>
      </div>
    );
  }

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
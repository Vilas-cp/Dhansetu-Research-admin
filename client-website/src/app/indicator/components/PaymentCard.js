"use client";
import React, { useRef, useState } from "react";
import { Poppins } from "next/font/google";
import BlobComp1 from "./Blobcomp1";
import Select from "react-select";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import BlobComp2 from "./Blobcomp2";
import links from "@/configs/links";

const poppinsFont = Poppins({ subsets: ["latin"], weight: "300" });
const poppinsFont1 = Poppins({ subsets: ["latin"], weight: "700" });
const poppinsFont2 = Poppins({ subsets: ["latin"], weight: "500" });

const payment_info = [
  {
    plan: "Bronze",
    value: "bronze",
    price: 1000,
    time: "Every month",
    features: [
      "Buy/Sell Signals",
      "Updates",
      "Any one of the indicators below",
      "Bat positional indicator",
      "Long trend indicator",
      "Cluster Indicator",
    ],
  },
  {
    plan: "Premium",
    value: "premium",
    price: 6000,
    time: "Every 6 months",
    features: [
      "Buy/Sell Signals",
      "Updates",
      "All 3 indicators below",
      "Bat positional indicator",
      "Long trend indicator",
      "Cluster Indicator",
    ],
  },
  {
    plan: "HNI",
    value: "hni",
    price: 10000,
    time: "Every Year",
    features: [
      "Buy/Sell Signals",
      "Updates",
      "All 4 indicators below",
      "Bat positional indicator",
      "Long trend indicator",
      "Cluster Indicator",
      "Long RMA Indicator",
    ],
  },
];
const Ticks = [
  {
    point: "Clean and stylish interface.",
  },
  {
    point: "Fast and reliable services.",
  },
  {
    point: "Complimentary updates included.",
  },
  {
    point: "Instant notifications in real-time.",
  },
];
const PaymentCard = ({
  paymentForm,
  selectedStrategy,
  setSelectedStrategy,
  selectedStrategyBronze,
  setSelectedStrategyBronze,
}) => {
  return (
    <div className="md:px-[15%] px-[5%]">
      <Toaster position="top-right" reverseOrder={false} />
      <BlobComp2 />
      <div className="md:flex md:items-start md:justify-center py-7">
        <div className="md:w-[50%]">
          <div>
            <div className={poppinsFont1.className}>
              <p className="text-5xl">
                Choose your <br></br>Plan Today
              </p>
            </div>
            <div className="flex items-center justify-center gap-12">
              <div className={poppinsFont1.className}>
                <p>
                  All you need is a free TradingView<br></br> account to get
                  started!
                </p>
              </div>
              <svg
                preserveAspectRatio="xMidYMid meet"
                data-bbox="47.999 62.5 104 74.999"
                viewBox="47.999 62.5 104 74.999"
                height="150"
                width="150"
                xmlns="http://www.w3.org/2000/svg"
                data-type="color"
                role="presentation"
                aria-hidden="true"
              >
                <defs>
                  <style>
                    {`
          #comp-li4h3tzl svg [data-color="1"] { fill: #F66600; }
          #comp-li4h3tzl svg [data-color="2"] { fill: #CCCCCC; }
        `}
                  </style>
                </defs>
                <g>
                  <path
                    fill="#E98866"
                    d="M96.43 94.141c0 5.558-10.616 10.064-23.712 10.064s-23.712-4.506-23.712-10.064 10.616-10.064 23.712-10.064S96.43 88.583 96.43 94.141z"
                    data-color="1"
                  ></path>
                  <path
                    fill="#E98866"
                    d="M151.576 72.564c0 5.558-10.616 10.064-23.712 10.064s-23.712-4.506-23.712-10.064S114.768 62.5 127.864 62.5s23.712 4.506 23.712 10.064z"
                    data-color="1"
                  ></path>
                  <path
                    d="M93.711 107.041c-4.424 2.983-12.458 4.836-20.964 4.836-8.982 0-17.227-2.004-21.519-5.232a2.018 2.018 0 0 0-2.825.405 2.026 2.026 0 0 0 .404 2.832c5.03 3.782 13.979 6.04 23.94 6.04 9.406 0 18.085-2.066 23.215-5.525a2.025 2.025 0 0 0 .548-2.807 2.013 2.013 0 0 0-2.799-.549z"
                    fill="#0E4828"
                    data-color="2"
                  ></path>
                  <path
                    d="M93.711 117.829c-4.424 2.983-12.458 4.836-20.964 4.836-8.982 0-17.227-2.004-21.519-5.232a2.017 2.017 0 0 0-2.825.405 2.026 2.026 0 0 0 .404 2.832c5.03 3.782 13.979 6.04 23.94 6.04 9.406 0 18.085-2.066 23.215-5.525a2.025 2.025 0 0 0 .548-2.807 2.013 2.013 0 0 0-2.799-.549z"
                    fill="#0E4828"
                    data-color="2"
                  ></path>
                  <path
                    d="M93.711 128.618c-4.424 2.983-12.458 4.836-20.964 4.836-8.982 0-17.227-2.004-21.519-5.232a2.017 2.017 0 0 0-2.825.405 2.026 2.026 0 0 0 .404 2.832c5.03 3.782 13.979 6.04 23.94 6.04 9.406 0 18.085-2.066 23.215-5.525a2.025 2.025 0 0 0 .548-2.807 2.014 2.014 0 0 0-2.799-.549z"
                    fill="#0E4828"
                    data-color="2"
                  ></path>
                  <path
                    d="M103.953 88.306c5.03 3.782 13.979 6.04 23.94 6.04 9.406 0 18.085-2.066 23.215-5.525a2.025 2.025 0 0 0 .548-2.807 2.013 2.013 0 0 0-2.8-.55c-4.424 2.983-12.458 4.836-20.964 4.836-8.982 0-17.227-2.004-21.519-5.232a2.016 2.016 0 0 0-2.825.405 2.03 2.03 0 0 0 .405 2.833z"
                    fill="#0E4828"
                    data-color="2"
                  ></path>
                  <path
                    d="M148.857 96.253c-4.424 2.983-12.458 4.836-20.964 4.836-8.982 0-17.227-2.004-21.519-5.232a2.016 2.016 0 0 0-2.825.405 2.026 2.026 0 0 0 .404 2.832c5.03 3.782 13.979 6.04 23.94 6.04 9.406 0 18.085-2.066 23.215-5.525a2.025 2.025 0 0 0 .548-2.807 2.013 2.013 0 0 0-2.799-.549z"
                    fill="#0E4828"
                    data-color="2"
                  ></path>
                  <path
                    d="M148.857 107.041c-4.424 2.983-12.458 4.836-20.964 4.836-8.982 0-17.227-2.004-21.519-5.232a2.018 2.018 0 0 0-2.825.405 2.026 2.026 0 0 0 .404 2.832c5.03 3.782 13.979 6.04 23.94 6.04 9.406 0 18.085-2.066 23.215-5.525a2.025 2.025 0 0 0 .548-2.807 2.013 2.013 0 0 0-2.799-.549z"
                    fill="#0E4828"
                    data-color="2"
                  ></path>
                  <path
                    d="M148.857 117.829c-4.424 2.983-12.458 4.836-20.964 4.836-8.982 0-17.227-2.004-21.519-5.232a2.017 2.017 0 0 0-2.825.405 2.026 2.026 0 0 0 .404 2.832c5.03 3.782 13.979 6.04 23.94 6.04 9.406 0 18.085-2.066 23.215-5.525a2.025 2.025 0 0 0 .548-2.807 2.013 2.013 0 0 0-2.799-.549z"
                    fill="#0E4828"
                    data-color="2"
                  ></path>
                  <path
                    d="M148.857 128.618c-4.424 2.983-12.458 4.836-20.964 4.836-8.982 0-17.227-2.004-21.519-5.232a2.017 2.017 0 0 0-2.825.405 2.026 2.026 0 0 0 .404 2.832c5.03 3.782 13.979 6.04 23.94 6.04 9.406 0 18.085-2.066 23.215-5.525a2.025 2.025 0 0 0 .548-2.807 2.014 2.014 0 0 0-2.799-.549z"
                    fill="#0E4828"
                    data-color="2"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] md:px-[10%] ">
          <div>
            {Ticks.map((eleData, index) => (
              <div
                key={index}
                className="flex md:space-x-2 py-2 items-center  text-[#6a67f9] "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-8"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <p className="text-black text-xl">
                  <span className={poppinsFont2.className}>
                    {eleData.point}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-3xl py-4">
        <span className={poppinsFont.className}>
          GET ALL INDICATORS WITH SILVER AND GOLD SUBSCRIPTIONS
        </span>
      </div>
      <div className="md:flex md:justify-between md:items-start">
        {payment_info.map((eleData, index) => (
          <PayCard
            key={index}
            {...eleData}
            handleClick={() => {
              if (paymentForm.current) {
                paymentForm.current.scrollIntoView();
                const newOption = {
                  value: eleData.value,
                  label: eleData.plan,
                };
                setSelectedStrategy(newOption);
              }
            }}
          />
        ))}
      </div>
      <div ref={paymentForm} className="py-4">
        <div>
          <PaymentForm
            selectedStrategy={selectedStrategy}
            setSelectedStrategy={setSelectedStrategy}
            selectedStrategyBronze={selectedStrategyBronze}
            setSelectedStrategyBronze={setSelectedStrategyBronze}
          />
        </div>
      </div>
      <div className="text-center text-lg text-gray-600 py-4">
        <span className={poppinsFont.className}>Cancel anytime.</span>
      </div>
      <div>
        <div className="text-center text-lg text-gray-600 pt-2">
          <span className={poppinsFont2.className}>
            CHECKOUT SECURELY WITH:
          </span>
        </div>
        <div className="flex justify-center items-center mt-[-20px]">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/razorpay-icon.png"
            alt="Razorpay Icon"
            style={{
              width: "100px",
              display: "block",
            }}
          />
        </div>
      </div>
    </div>
  );
};

function PaymentForm({
  selectedStrategy,
  setSelectedStrategy,
  selectedStrategyBronze,
  setSelectedStrategyBronze,
}) {
  const [yourName, setYourName] = useState("");
  const [tradingViewName, setTradingViewName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [note, setNote] = useState("");
  const isLoading = useRef(false);
  const options = [
    { value: "bronze", label: "Bronze" },
    { value: "premium", label: "Premium" },
    { value: "hni", label: "HNI" },
    { value: "lifetime", label: "Lifetime Access" },
  ];
  const optionsBronze = [
    { value: "bat-positional-indicator", label: "Bat positional indicator" },
    { value: "long-trend-indicator", label: "Long trend indicator" },
    { value: "cluster-indicator", label: "Cluster Indicator" },
  ];
  function openNewPage(link) {
    if (window) {
      const isOpen = window.open(link);
      if (isOpen === null) {
        window.location.href = link;
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading.current === false) {
      isLoading.current = true;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!yourName) {
        toast.error("Please enter your name.", {
          duration: 4000,
        });
        isLoading.current = false;
        return;
      }
      if (!tradingViewName) {
        toast.error("Please enter your TradingView username.", {
          duration: 4000,
        });
        isLoading.current = false;
        return;
      }

      if (!emailRegex.test(email)) {
        toast.error("Please enter a valid email address.", {
          duration: 4000,
        });
        isLoading.current = false;
        return;
      }

      const mobileRegex = /^\+?\d{2}?\s?\d{6,10}$/;

      if (!mobileRegex.test(mobileNumber)) {
        toast.error("Please enter a valid mobile number.", {
          duration: 4000,
        });
        isLoading.current = false;
        return;
      }

      if (!selectedStrategy) {
        toast.error("Please select a Plan", {
          duration: 4000,
        });
        isLoading.current = false;
        return;
      }
      if (selectedStrategy.value === "bronze" && !selectedStrategyBronze) {
        toast.error("Please select a Indicator for Bronze", {
          duration: 4000,
        });
        isLoading.current = false;
        return;
      }
      toast.loading("Your request is sending, please wait!!", {
        duration: 4000,
      });
      const type1 = selectedStrategy.value;
      const type2 =
        selectedStrategy.value === "bronze" ? selectedStrategyBronze.value : "";
      const newOrder = {
        notes: {
          name: yourName,
          tradingViewName: tradingViewName,
          email: email,
          phone: mobileNumber,
          note: note,
          type: type1,
        },
        type: type1,
      };

      try {
        const response1 = await fetch(`${links.server}/create-order`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newOrder),
        });
        const order = await response1.json();
        // console.log(order);
        const options = {
          key: "rzp_live_vegmCeNoQ1JTfU",
          amount: order.amount,
          currency: order.currency,
          name: "Brain Auto Tech",
          description: "Strategy Transaction",
          order_id: order.id,
          prefill: {
            name: yourName,
            email: email,
            contact: mobileNumber,
          },
          theme: {
            color: "#F37254",
          },
          handler: async function (response) {
            try {
              toast.loading(`Verifying your payment!`, {
                duration: 4000,
              });
              // console.log(response);
              const res2 = await fetch(`${links.server}/verify-payment`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                  name: yourName,
                  tradingViewName: tradingViewName,
                  email: email,
                  phone: mobileNumber,
                  note: note,
                  type: type1,
                  typeBronze: type2,
                }),
              });
              const resOut2 = await res2.json();

              console.log(resOut2);
              if (resOut2.status === "ok") {
                toast.success(
                  `Thank you for purchasing ${selectedStrategy.label} strategy, we'll be in touch with you shortly.`,
                  {
                    duration: 4000,
                  }
                );
                const newRow = {
                  yourName: yourName,
                  tradingViewName: tradingViewName,
                  email: email,
                  mobile: mobileNumber,
                  strType: type1,
                  typeBronze: type2,
                  rzorderid: response.razorpay_order_id,
                  rzpaymentid: response.razorpay_payment_id,
                  rzsign: response.razorpay_signature,
                  note: note,
                };
                window.localStorage.setItem("newRow", JSON.stringify(newRow));
                openNewPage(`/indicator/success`);
              } else {
                toast.error("Internal Server Error, 404!!", {
                  duration: 4000,
                });
              }
            } catch (error) {
              console.error("Error:", error);
              toast.error("Error verifying payment!!", {
                duration: 4000,
              });
            }
          },
        };

        const rzp = new Razorpay(options);
        rzp.open();
      } catch (error) {
        console.log(error);
        toast.error("Internal Server Error, 404!!", {
          duration: 4000,
        });
      }
      isLoading.current = false;
    } else {
      toast.loading(
        "Your Payment is being process!! Please wait until you can submit the next one!",
        {
          duration: 4000,
        }
      );
    }
  };
  return (
    <>
      <div className="w-full mx-auto p-8 bg-slate-50 rounded-lg relative border-[12px] border-white shadow-2xl ">
        <div className="flex justify-center mb-[20px]">
          <img src="/braintechlogo.PNG" width={150} />
        </div>
        <h2 className="text-2xl text-center font-bold mb-7 text-[#1f3a68]">
          Fill the form for payment
        </h2>
        {/* <div
          onClick={() =>
            openNewPage(
              `/indicator/success?name=Manoja%20D&email=manojad2004%40gmail.com&mobile=%2B919902798895&type=bronze&rzorderid=order_Pf5X3BhW3Gbk1Q&rzpaymentid=pay_Pf5XKdgeDSdpIj&rzsign=a4a188d09e8bfee2e051650feb48c3daf6655e9fec7f25c39af69e5aa63aae95&note=Hi`
            )
          }
        >
          Test
        </div> */}
        <form className="">
          <div className="flex flex-row flex-wrap gap-x-4">
            <div className="mb-4 lg:w-56">
              <label
                className="block text-sm font-semibold mb-2 text-[#1f3a68]"
                htmlFor="yourName"
              >
                Name
              </label>
              <input
                name="yourName"
                id="yourName"
                placeholder="Your Name"
                className="w-full px-3 py-3 border rounded-lg  text-sm"
                required
                value={yourName}
                onChange={(e) => setYourName(e.target.value)}
                type="text"
              />
            </div>
            <div className="mb-4 lg:w-56">
              <label
                className="block text-sm font-semibold mb-2 text-[#1f3a68]"
                htmlFor="userName"
              >
                TradingView Username
              </label>
              <input
                name="userName"
                id="userName"
                placeholder="TradingView Username"
                className="w-full px-3 py-3 border rounded-lg  text-sm"
                required
                value={tradingViewName}
                onChange={(e) => setTradingViewName(e.target.value)}
                type="text"
              />
            </div>
            <div className="mb-4 lg:w-56">
              <label
                className="block text-[#1f3a68] text-sm font-semibold mb-2"
                htmlFor="Email"
              >
                Email
              </label>
              <input
                id="Email"
                name="Email"
                value={email}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="yourname@example.com"
                className="w-full px-3 py-3 border rounded-lg   text-sm"
                required
                type="email"
              />
            </div>
            <div className="mb-4 lg:w-56">
              <label
                className="block text-[#1f3a68] text-sm font-semibold mb-2"
                htmlFor="Mobile"
              >
                Mobile
              </label>
              <input
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                name="Mobile"
                id="Mobile"
                placeholder="+91 123456789"
                className="w-full px-3 py-3 border rounded-lg  text-sm"
                required
                type="text"
              />
            </div>
            <div className="mb-4 lg:w-56">
              <label
                htmlFor="note"
                className="block text-[#1f3a68] text-sm font-semibold mb-2"
              >
                {"Note (Optional)"}
              </label>
              <textarea
                name="note"
                id="note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows="4"
                placeholder="Note"
                className="w-full px-3 py-3 border rounded-lg  text-sm"
                type="text"
              />
            </div>
            <div className="mb-4 lg:w-56">
              <label className="block text-sm font-semibold mb-2 text-[#1f3a68]">
                Plan
              </label>
              <Select
                className="w-full rounded-lg text-sm"
                options={options}
                defaultValue={selectedStrategy}
                value={selectedStrategy}
                onChange={setSelectedStrategy}
              />
            </div>
            {selectedStrategy !== null &&
              selectedStrategy.value === "bronze" && (
                <div className="mb-4 lg:w-56">
                  <label className="block text-sm font-semibold mb-2 text-[#1f3a68]">
                    Indicator
                  </label>
                  <Select
                    className="w-full rounded-lg text-sm"
                    options={optionsBronze}
                    defaultValue={selectedStrategyBronze}
                    value={selectedStrategyBronze}
                    onChange={setSelectedStrategyBronze}
                  />
                </div>
              )}
          </div>
          <div className="flex justify-center">
            <input
              type="submit"
              onClick={(e) => handleSubmit(e)}
              value="Purchase Now 🚀"
              className="bg-[#4f55c1] cursor-pointer text-white font-semibold px-4 py-2 rounded-lg w-full text-sm"
            />
          </div>
          <p className="text-[12px] font-medium pt-2 text-[#1f3a68]">
            {`Your payment will be stores in the database for safety purpose. Contact us for more details.`}
          </p>
        </form>
      </div>
    </>
  );
}

function PayCard({ plan, price, time, features, handleClick }) {
  return (
    <div className=" md:w-[300px] bg-[#b9eef6] min-h-[420px] border-[2px] border-[#00c2e0] text-black pb-2  rounded-[1.7rem] transition-all duration-300 shadow-[0_0_10px_#00c2e0] mx-4 mt-7">
      <div className="h-[50%] flex flex-col justify-center items-center bg-[#00c2e0] rounded-t-3xl">
        <p className="text-2xl font-semibold">
          <span className={poppinsFont2.className}>{plan}</span>
        </p>
        <p className="text-3xl font-semibold mt-3">
          <span className={poppinsFont1.className}>₹{price}</span>
        </p>
        <p className="text-xs">
          <span className={poppinsFont.className}>{time}</span>
        </p>
        <button
          className="bg-[#f5511d] py-3 px-5 rounded-3xl text-sm mt-8 text-white hover:bg-[#e04819] focus:ring-2 focus:ring-[#f5511d] focus:outline-none"
          onClick={handleClick}
        >
          <span className={poppinsFont2.className}>Purchase</span>
        </button>
      </div>

      <hr className="border-t-2 border-[#00c2e0] transition-all duration-300 shadow-[0_0_10px_#00c2e0]"></hr>
      <div className={poppinsFont2.className}>
        <ul className="mt-4 flex items-start flex-col gap-2 text-start justify-center px-[15%]">
          {features.map((feature, index) => (
            <li
              key={index}
              className="text-[#566a8d] flex items-center justify-between mt-[2px] gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-green-400  flex-shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="leading-none">{feature}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PaymentCard;

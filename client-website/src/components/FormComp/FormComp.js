"use client";
import links from "@/configs/links";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";

function FormComp() {
  const [checkboxes, setCheckboxes] = useState({
    algo_software: false,
    option_strategy: false,
    equality_strategy: false,
    future_strategy: false,
    other_services: false,
  });
  const [yourName, setYourName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [brokerName, setBrokerName] = useState("");
  const [message, setMessage] = useState("");
  const thankYouPageRedirect = useRef(null);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({
      ...checkboxes,
      [name]: checked,
    });
  };
  const isLoading = useRef(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading.current === false) {
      isLoading.current = true;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast.error("Please enter a valid email address.", {
          duration: 4000,
        });
        isLoading.current = false;
        return;
      }

      const mobileRegex = /^\+?\d{2}?\s?\d{6,10}$/;

      if (!mobileRegex.test(mobile)) {
        toast.error("Please enter a valid mobile number.", {
          duration: 4000,
        });
        isLoading.current = false;
        return;
      }

      toast.loading("Your request is sending, please wait!!", {
        duration: 4000,
      });
      const newRow = {
        Name: yourName,
        Mobile: mobile,
        Email: email,
        Message: message,
        Broker: brokerName,
      };
      let serviceString = "";
      for (let key in checkboxes) {
        if (checkboxes[key] === true) {
          serviceString = serviceString + key + ", ";
        }
      }
      newRow.Services = serviceString;

      try {
        const response1 = await window.fetch(
          `${links.server}/pushrow`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newRow),
          }
        );
        const result = await response1.json();
        console.log(result);
        if (result.message === "success") {
          toast.success(
            "We appreciate you providing your information. Rest assured, we'll be in touch with you shortly.",
            {
              duration: 4000,
            }
          );
          setTimeout(() => {
            thankYouPageRedirect.current.click();
          }, 500);
        } else {
          toast.error("Internal Server Error, 404!!", {
            duration: 4000,
          });
        }
      } catch (error) {
        console.log(error);
        toast.error("Internal Server Error, 404!!", {
          duration: 4000,
        });
      }
      isLoading.current = false;
    } else {
      toast.loading(
        "Your Message is being sent!! Please wait until you can send the next one!",
        {
          duration: 4000,
        }
      );
    }
  };

  return (
    <>
      <a className="hidden" href="/thankyou" ref={thankYouPageRedirect}>
        thankyou page redirect hidden
      </a>
      <div className="xl:w-2/6 lg:w-2/4 w-full mx-auto p-8 bg-slate-50 rounded-lg relative border-[12px] border-white shadow-2xl ">
        <div className="flex justify-center mb-[20px]">
          <img src="/braintechlogo.PNG" width={150} />
        </div>
        <h2 className="text-2xl text-center font-bold mb-7 text-[#1f3a68]">
          Fill the form for personal assistance
        </h2>
        <form>
          <div className="mb-4">
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
          <div className="mb-4">
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
          <div className="mb-4">
            <label
              className="block text-[#1f3a68] text-sm font-semibold mb-2"
              htmlFor="Mobile"
            >
              Mobile
            </label>
            <input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              name="Mobile"
              id="Mobile"
              placeholder="+91 123456789"
              className="w-full px-3 py-3 border rounded-lg  text-sm"
              required
              type="text"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-[#1f3a68] text-sm font-semibold mb-2"
              htmlFor="Broker"
            >
              Broker
            </label>
            <input
              value={brokerName}
              onChange={(e) => setBrokerName(e.target.value)}
              name="Broker"
              id="Broker"
              placeholder="Broker Name"
              className="w-full px-3 py-3 border rounded-lg  text-sm"
              required
              type="text"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-[#1f3a68] text-sm font-semibold mb-2"
            >
              {"Message (Optional)"}
            </label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              placeholder="Your Message"
              className="w-full px-3 py-3 border rounded-lg  text-sm"
              type="text"
            />
          </div>

          <div className="flex justify-center">
            <input
              type="submit"
              onClick={(e) => handleSubmit(e)}
              className="bg-[#4f55c1] cursor-pointer text-white font-semibold px-4 py-2 rounded-lg w-full text-sm"
            />
          </div>
          <p className="text-[12px] font-medium pt-2 text-[#1f3a68]">
            {`We will not save any of your information, it’s end to end encrypted
            and will be auto deleted after we call you back.`}
          </p>
        </form>
      </div>
    </>
  );
}

export default FormComp;

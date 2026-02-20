"use client";
import React, { useState } from "react";
import {
  Check,
  X,
  Loader2,
  AlertCircle,
  CreditCard,
  ShieldCheck,
  User,
  Mail,
  Phone,
} from "lucide-react";
import pricingData from "./data";
import { BASE_URL } from "@/components/api/url";
import toast from "react-hot-toast";

const PricingTable = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [loading, setLoading] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogLoading, setDialogLoading] = useState(false);
  const [dialogData, setDialogData] = useState(null);
  const [dialogError, setDialogError] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [id, setId] = useState(null);
  const [showFormView, setShowFormView] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const plans = [
    "basicIndex",
    "moderateIndex",
    "advanceIndex",
    "stockOption",
    "stockFuture",
    "equityResearch",
    "longTermEquity",
    "mcx",
  ];

  const planNames = {
    basicIndex: "Basic Index Option",
    moderateIndex: "Moderate Index Options",
    advanceIndex: "Advance Index Options",
    stockOption: "Stock Option",
    stockFuture: "Stock Future",
    equityResearch: "Equity Research",
    longTermEquity: "Long Term Equity Research",
    mcx: "MCX",
  };

  const billingCycleLabels = {
    monthly: "Monthly",
    quarterly: "Quarterly",
    halfYearly: "Half-Yearly",
  };
  function openNewPage(link) {
    if (window) {
      const isOpen = window.open(link);
      if (isOpen === null) {
        window.location.href = link;
      }
    }
  }

  const handlePurchase = async (planType) => {
    setLoading(planType);
    setSelectedPlan(planType);
    const planData = pricingData[billingCycle][planType];

    // Open dialog and start loading
    setDialogOpen(true);
    setDialogLoading(true);
    setDialogError(null);
    setDialogData(planData);
    setId(planData.subscriptionId);
    setShowFormView(false);

    setDialogLoading(false);
    setLoading(null);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setDialogData(null);
    setDialogError(null);
    setSelectedPlan(null);
    setDialogLoading(false);
    setShowFormView(false);
    setFormData({ name: "", email: "", phone: "" });
    setFormErrors({});
  };

  const showForm = () => {
    setShowFormView(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      errors.phone = "Phone number must be 10 digits";
    }

    return errors;
  };

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();

  //   const errors = validateForm();
  //   if (Object.keys(errors).length > 0) {
  //     setFormErrors(errors);
  //     return;
  //   }

  //   // console.log("Form Submitted:", {
  //   //   ...formData,
  //   //   plan: planNames[selectedPlan],
  //   //   billingCycle: billingCycleLabels[billingCycle],
  //   //   amount: pricingData[billingCycle][selectedPlan].price,
  //   //   subscriptionId: id,
  //   // });
  //   setDialogLoading(true);
  //   try {
  //     const userData = {
  //       name: formData.name,
  //       email: formData.email,
  //       contact: formData.phone,
  //     };

  //     console.log(userData);
  //     const response1 = await fetch(
  //       `${BASE_URL}web/v1/buy/order/rzpay/${billingCycle}/${selectedPlan}`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body:JSON.stringify(userData)
  //       },
  //     );

  //     const res = await response1.json();
  //     if (res.status !== "success") {
  //       toast.error("Order creation failed");
  //       return;
  //     }

  //     const options = {
  //       key: "rzp_test_SGug2wijgN296J",
  //       amount: res.data.order.amount,
  //       currency: res.data.order.currency,
  //       name: "Dhansetu Research",
  //       description: "Strategy Transaction",
  //       order_id: res.data.order.id,
  //       prefill: {
  //         name: formData.name,
  //         email: formData.email,
  //         contact: formData.phone,
  //       },
  //       theme: {
  //         color: "#F37254",
  //       },
  //       handler: async function (response) {
  //         try {
  //           const res2 = await fetch(`${BASE_URL}web/v1/buy/verify/rzpay`, {
  //             method: "POST",
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //             body: JSON.stringify(response),
  //           });
  //           const resOut2 = await res2.json();

  //           console.log(resOut2);
  //           if (resOut2.data.successIsValid) {
  //             toast.success(
  //               `Thank you for purchasing the strategy, we'll be in touch with you shortly.`,
  //               {
  //                 duration: 4000,
  //               },
  //             );
  //             const newRow = {
  //               yourName: formData.name,
  //               email: formData.email,
  //               mobile: formData.phone,
  //               plan: planNames[selectedPlan],
  //               billingCycle: billingCycleLabels[billingCycle],
  //               rzorderid: response.razorpay_order_id,
  //               rzpaymentid: response.razorpay_payment_id,
  //               rzsign: response.razorpay_signature,
  //             };
  //             closeDialog();
  //             window.localStorage.setItem("newRow", JSON.stringify(newRow));
  //             setDialogLoading(false);
  //             openNewPage(`/pricing/success`);
  //           } else {
  //             toast.error("Internal Server Error, 404!!", {
  //               duration: 4000,
  //             });
  //           }
  //         } catch (error) {
  //           console.log(error);

  //           toast.error("Error verifying payment!!", {
  //             duration: 4000,
  //           });
  //         }
  //       },
  //     };

  //     const rzp = new Razorpay(options);
  //     rzp.open();
  //   } catch (error) {
  //     toast.error("Backend server is down or unreachable.");
  //   } finally {
  //     setDialogLoading(false);
  //   }
  // };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setDialogLoading(true);
    const userData = {
      name: formData.name,
      email: formData.email,
      contact: formData.phone,
    };
    try {
      const response1 = await fetch(
        `${BASE_URL}web/v1/buy/order/rzpay/${billingCycle}/${selectedPlan}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        },
      );

      const res = await response1.json();
      if (res.status !== "success") {
        toast.error("Order creation failed");
        setDialogLoading(false);
        return;
      }

      const options = {
        key: "rzp_test_SGug2wijgN296J",
        amount: res.data.order.amount,
        currency: res.data.order.currency,
        name: "Dhansetu Research",
        order_id: res.data.order.id,
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#F37254",
        },
        handler: async function (response) {
          try {
            const verifyRes = await fetch(
              `${BASE_URL}web/v1/buy/verify/rzpay`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  ...response, 
                  email: formData.email,
                  name: formData.name, 
                  contact:formData.phone
                }),
              },
            );

            const verifyData = await verifyRes.json();

            if (verifyData.data.successIsValid) {
              toast.success("Payment successful!");
              localStorage.setItem(
                "newRow",
                JSON.stringify({ ...formData, plan: planNames[selectedPlan] }),
              );
              closeDialog();
              setTimeout(() => openNewPage("/pricing/success"), 100);
            } else {
              toast.error("Payment verification failed");
            }
          } catch {
            toast.error("Verification error");
          } finally {
            setDialogLoading(false);
          }
        },
      };

      const rzp = new Razorpay(options);

      rzp.on("payment.failed", () => {
        toast.error("Payment cancelled");
        setDialogLoading(false);
      });

      rzp.open();
    } catch {
      toast.error("Backend server is unreachable");
      setDialogLoading(false);
    }
  };

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);

  const getButtonText = (planType) => {
    return "Buy";
  };

  const getButtonStyle = (planType) => {
    if (planType === "basic")
      return "bg-gray-800 border border-gray-600 text-gray-300 hover:bg-gray-700";
    if (planType === "premium")
      return "bg-white text-gray-900 hover:bg-gray-100";
    return "bg-white text-gray-900 hover:bg-gray-100";
  };

  return (
    <div className="pt-[125px]">
      <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-800 p-4 sm:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 sm:mb-6">
              Plans for every level
              <br className="hidden sm:block" />
              of ambition
            </h1>

            {/* Billing Toggle */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-3 py-2 rounded-full transition-all text-sm sm:text-base ${
                  billingCycle === "monthly"
                    ? "bg-white text-gray-900"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("quarterly")}
                className={`px-3 py-2 rounded-full transition-all text-sm sm:text-base ${
                  billingCycle === "quarterly"
                    ? "bg-white text-gray-900"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Quarterly
              </button>
              <button
                onClick={() => setBillingCycle("halfYearly")}
                className={`px-3 py-2 rounded-full transition-all text-sm sm:text-base ${
                  billingCycle === "halfYearly"
                    ? "bg-white text-gray-900"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Half-Yearly
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 "
            style={{
              gridAutoRows: "auto",
              gridTemplateRows: "repeat(2, auto)",
            }}
          >
            {plans.map((planType) => {
              const plan = pricingData[billingCycle][planType];
              const isPopular = planType === "premium";

              return (
                <div
                  key={planType}
                  className={`relative bg-gray-900/50 backdrop-blur-sm border rounded-2xl p-6 ${
                    isPopular
                      ? "border-blue-400 ring-1 ring-blue-400/20"
                      : "border-gray-700"
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                        Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                      {planNames[planType]}
                    </h3>

                    <div className="mb-4 sm:mb-6">
                      <span className="text-2xl sm:text-3xl font-bold text-white">
                        {formatPrice(plan.price)}/- + gst
                      </span>
                      <div className="text-xs sm:text-sm text-gray-400 mt-1">
                        billed {billingCycleLabels[billingCycle]}
                      </div>
                    </div>

                    <button
                      onClick={() => handlePurchase(planType)}
                      disabled={loading === planType}
                      className={`w-full py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-medium transition-all text-sm sm:text-base ${getButtonStyle(
                        planType,
                      )} ${
                        loading === planType
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                    >
                      {loading === planType ? (
                        <div className="flex items-center justify-center">
                          <Loader2 className="w-4 h-4 animate-spin mr-2" />
                          Processing...
                        </div>
                      ) : (
                        getButtonText(planType)
                      )}
                    </button>
                  </div>

                  {/* Features */}
                  <div className="mt-5 sm:mt-6 space-y-2 sm:space-y-3">
                    {Object.values(plan.features).map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center text-xs sm:text-sm text-gray-300"
                      >
                        <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="text-center text-gray-400 text-xs sm:text-sm">
            <p>Learn more about plans for professionals</p>
          </div>
        </div>

        {/* Enhanced Dialog/Modal */}
        {dialogOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-600/50 rounded-3xl max-w-lg w-full relative overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
              {/* Decorative background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>

              {/* Close button */}
              <button
                onClick={closeDialog}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 hover:text-white transition-all duration-200 border border-gray-600/50 hover:border-gray-500/50"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Dialog Content */}
              <div className="relative p-8 pt-12">
                {/* Header with icon */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedPlan && `${planNames[selectedPlan]} Plan`}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {showFormView
                      ? "Enter your details"
                      : "Complete your subscription"}
                  </p>
                </div>

                {/* Loading State */}
                {dialogLoading && !dialogError && !dialogData && (
                  <div className="py-12 text-center">
                    <div className="relative inline-flex items-center justify-center">
                      <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
                    </div>
                    <p className="text-gray-300 mt-6 text-lg">
                      Preparing your subscription...
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      This will only take a moment
                    </p>
                  </div>
                )}

                {/* Error State */}
                {dialogError && (
                  <div className="py-12 text-center">
                    <div className="mx-auto w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
                      <AlertCircle className="w-8 h-8 text-red-400" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3">
                      Oops! Something went wrong
                    </h4>
                    <p className="text-red-400 mb-8 text-sm leading-relaxed">
                      {dialogError}
                    </p>
                    <button
                      onClick={closeDialog}
                      className="px-6 py-3 bg-gray-800 border border-gray-600 text-gray-300 rounded-xl hover:bg-gray-700 hover:border-gray-500 transition-all duration-200"
                    >
                      Try Again Later
                    </button>
                  </div>
                )}

                {/* Form View */}
                {dialogData && !dialogError && showFormView && (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className={`w-full pl-11 pr-4 py-3 bg-gray-800/50 border ${
                            formErrors.name
                              ? "border-red-500"
                              : "border-gray-600/50"
                          } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all`}
                        />
                      </div>
                      {formErrors.name && (
                        <p className="mt-1 text-sm text-red-400">
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          className={`w-full pl-11 pr-4 py-3 bg-gray-800/50 border ${
                            formErrors.email
                              ? "border-red-500"
                              : "border-gray-600/50"
                          } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all`}
                        />
                      </div>
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-red-400">
                          {formErrors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter 10-digit phone number"
                          className={`w-full pl-11 pr-4 py-3 bg-gray-800/50 border ${
                            formErrors.phone
                              ? "border-red-500"
                              : "border-gray-600/50"
                          } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all`}
                        />
                      </div>
                      {formErrors.phone && (
                        <p className="mt-1 text-sm text-red-400">
                          {formErrors.phone}
                        </p>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <button
                        type="button"
                        onClick={() => setShowFormView(false)}
                        className="order-2 sm:order-1 flex-1 py-3 px-6 bg-gray-800/50 border border-gray-600/50 text-gray-300 rounded-xl hover:bg-gray-700/50 hover:border-gray-500/50 transition-all duration-200"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={dialogLoading}
                        className="order-1 sm:order-2 flex-1 py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all duration-200 font-medium shadow-lg shadow-blue-500/25"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                )}

                {/* Success State with Subscription Details */}
                {dialogData && !dialogError && !showFormView && (
                  <div>
                    {/* Subscription Summary Card */}
                    <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/40 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-600/30">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <ShieldCheck className="w-5 h-5 text-green-400 mr-2" />
                        Subscription Summary
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-2 border-b border-gray-600/30">
                          <span className="text-gray-400">Plan</span>
                          <span className="text-white font-medium">
                            {planNames[selectedPlan]}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-600/30">
                          <span className="text-gray-400">Billing Cycle</span>
                          <span className="text-white font-medium capitalize">
                            {billingCycleLabels[billingCycle]}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-600/30">
                          <span className="text-gray-400">Amount</span>
                          <span className="text-2xl font-bold text-white">
                            {formatPrice(
                              pricingData[billingCycle][selectedPlan].price,
                            )}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Security Notice */}
                    <div className="hidden md:block bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mb-8">
                      <div className="flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-blue-300 text-sm font-medium">
                            Secure Payment
                          </p>
                          <p className="text-blue-400/80 text-xs mt-1">
                            Your payment is protected by bank-grade encryption
                            and security measures.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={closeDialog}
                        disabled={dialogLoading}
                        className="order-2 sm:order-1 flex-1 py-3 px-6 bg-gray-800/50 border border-gray-600/50 text-gray-300 rounded-xl hover:bg-gray-700/50 hover:border-gray-500/50 transition-all duration-200 disabled:opacity-50"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={showForm}
                        disabled={dialogLoading}
                        className="order-1 sm:order-2 flex-1 py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all duration-200 font-medium shadow-lg shadow-blue-500/25"
                      >
                        Continue to Form
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingTable;

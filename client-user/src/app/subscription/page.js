"use client";
import React, { useState, useEffect } from "react";
import {
  Check,
  X,
  Loader2,
  AlertCircle,
  CreditCard,
  ShieldCheck,
  Clock,
  Star,
  Crown,
} from "lucide-react";
import pricingData from "./data";
import Header from "@/components/Header";
import { apiPost, apiGet } from "@/lib/api";
import Script from "next/script";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const PricingTable = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [loading, setLoading] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogLoading, setDialogLoading] = useState(false);
  const [dialogData, setDialogData] = useState(null);
  const [dialogError, setDialogError] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [userInfoLoading, setUserInfoLoading] = useState(true);
  const [id, setId] = useState(null);
  const router= useRouter();


  const plans = ["essential", "plus", "premium", "expert", "ultimate"];
  const planNames = {
    essential: "Essential",
    plus: "Plus",
    premium: "Premium",
    expert: "Expert",
    ultimate: "Ultimate",
  };

  // Fetch user info on component mount
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        setUserInfoLoading(true);
        const data = await apiGet("user/v1/info");
        if (data.status === "success") {
          setUserInfo(data.data.userInfo);
        }
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      } finally {
        setUserInfoLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    // 🔓 Force-enable scrolling when this page loads
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  const handlePurchase = (planType) => {
  if (userInfo?.sub?.type !== "free") {
    setSelectedPlan(planType);
    setDialogOpen(true);
    return;
  }

  const planData = pricingData[billingCycle][planType];
  setSelectedPlan(planType);
  setId(planData.subscriptionId);
  setDialogData({
    subscriptionId: planData.subscriptionId,
    price: planData.price,
    planType
  });
  setDialogOpen(true);
};

  const handleBuyClick = async () => {
    if (!id) {
      toast.error("Invalid subscription");
      return;
    }
    try {
      setLoading(selectedPlan);

      const response = await apiPost(`user/v1/buy/order/rzpay/${id}`);

      if (response.status !== "success") {
        throw new Error("Order creation failed");
      }

      const order = response.data.order;

      const options = {
        key: "rzp_live_vegmCeNoQ1JTfU",
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,
        name: "Dhansetu Research",
        description: "Subscription Payment",

        prefill: {
          name: `${userInfo?.firstName ?? ""} ${
            userInfo?.lastName ?? ""
          }`.trim(),
          email: userInfo?.emailId ?? "",
          contact: null,
        },

        notes: {
          clerkId: userInfo?.clerkId,
          uuid: userInfo?.uuid,
          plan: selectedPlan,
        },

        handler: async (paymentResponse) => {
          try {
            const verifyRes = await apiPost(
              "user/v1/buy/verify/rzpay",
              paymentResponse,
            );

            if (verifyRes.data.successIsValid) {
              toast.success("Payment successful 🎉");
              router.push("/dashboard");
              closeDialog();
            } else {
              toast.error("Payment verification failed");
            }
          } catch {
            toast.error("Verification error");
          }
        },

        theme: {
          color: "#4F46E5",
        },
      };

      // 3️⃣ Open Razorpay
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      toast.error("Payment failed");
    } finally {
      setLoading(null)
    }
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setDialogData(null);
    setDialogError(null);
    setSelectedPlan(null);
    setDialogLoading(false);
  };

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getButtonText = (planType) => {
    if (userInfo?.sub?.type !== "free") {
      return "Already Premium";
    }
    return "Buy";
  };

  const getButtonStyle = (planType) => {
    if (userInfo?.sub?.type !== "free") {
      return "bg-gray-600 border border-gray-500 text-gray-300 cursor-not-allowed";
    }
    if (planType === "essential" || planType === "plus")
      return "bg-gray-800 border border-gray-600 text-gray-300 hover:bg-gray-700";
    if (planType === "premium")
      return "bg-white text-gray-900 hover:bg-gray-100";
    return "bg-white text-gray-900 hover:bg-gray-100";
  };

  const numericFeatures = [
    { key: "charts", label: "Charts per tab" },
    { key: "indicators", label: "Indicators per chart" },
    { key: "connections", label: "Parallel connections" },
    { key: "priceAlerts", label: "Price alerts" },
    { key: "technicalAlerts", label: "Technical alerts" },
    { key: "watchlistAlerts", label: "Watchlist alerts" },
  ];

  const textFeatures = [{ key: "historicalBars", label: "Historical bars" }];

  const booleanFeatures = [
    { key: "ads", label: "No ads" },
    { key: "volumeProfile", label: "Volume profile" },
    { key: "customTimeframes", label: "Custom timeframes" },
    { key: "customRangeBars", label: "Custom range bars" },
    { key: "multipleWatchlists", label: "Multiple watchlists" },
    { key: "barReplay", label: "Bar replay" },
    { key: "indicatorsOnIndicators", label: "Indicators on indicators" },
    { key: "chartDataExport", label: "Chart data export" },
    { key: "intradayCharts", label: "Intraday charts" },
    { key: "customFormulas", label: "Custom formulas" },
    { key: "timePriceOpportunity", label: "Time price opportunity" },
    { key: "volumeFootprint", label: "Volume footprint" },
    { key: "volumeCandles", label: "Volume candles" },
    { key: "autoChartPatterns", label: "Auto chart patterns" },
    { key: "nonExpiringAlerts", label: "Non-expiring alerts" },
    { key: "publishingScripts", label: "Publishing scripts" },
    { key: "secondBasedIntervals", label: "Second-based intervals" },
    { key: "tickBasedIntervals", label: "Tick-based intervals" },
    { key: "professionalMarketData", label: "Professional market data" },
    { key: "prioritySupport", label: "Priority support" },
  ];

  if (userInfoLoading) {
    return (
      <div>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto text-white mb-4" />
            <p className="text-white text-lg">
              Loading your account information...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
  
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 sm:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            {/* Premium Status Banner */}
            {userInfo?.sub?.type !== "free" && (
              <div className="mb-6 mx-auto max-w-md">
                <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 rounded-2xl p-6">
                  <div className="flex items-center justify-center mb-3">
                    <Crown className="w-6 h-6 text-amber-400 mr-2" />
                    <span className="text-amber-400 font-semibold text-lg">
                      Premium Active
                    </span>
                  </div>
                  <p className="text-white text-sm mb-2">
                    You currently have a{" "}
                    <span className="font-semibold capitalize">
                      {userInfo.sub.type}
                    </span>{" "}
                    subscription
                  </p>
                  {userInfo.sub.expire && (
                    <p className="text-amber-300 text-xs">
                      Expires on {formatDate(userInfo.sub.expire)}
                    </p>
                  )}
                </div>
              </div>
            )}

            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 sm:mb-6">
              Plans for every level
              <br className="hidden sm:block" />
              of ambition
            </h1>

            {/* Billing Toggle */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-3 py-2 rounded-full transition-all text-sm sm:text-base ${billingCycle === "monthly"
                    ? "bg-white text-gray-900"
                    : "text-gray-300 hover:text-white"
                  }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annually")}
                className={`px-3 py-2 rounded-full transition-all text-sm sm:text-base ${billingCycle === "annually"
                    ? "bg-white text-gray-900"
                    : "text-gray-300 hover:text-white"
                  }`}
              >
                Annually
              </button>
              <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs sm:text-sm">
                Save up to 17% 🔥
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
            {plans.map((planType) => {
              const plan = pricingData[billingCycle][planType];
              const isPopular = planType === "premium";
              const isPremiumUser = userInfo?.sub?.type !== "free";

              return (
                <div
                  key={planType}
                  className={`relative bg-gray-900/50 backdrop-blur-sm border rounded-2xl p-6 ${isPopular
                      ? "border-blue-400 ring-1 ring-blue-400/20"
                      : "border-gray-700"
                  } ${isPremiumUser ? "opacity-75" : ""}`}
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
                        {formatPrice(plan.price)}
                      </span>
                      <span className="text-gray-400 text-sm sm:text-base">
                        /{billingCycle === "monthly" ? "mo" : "yr"}
                      </span>
                      <div className="text-xs sm:text-sm text-gray-400 mt-1">
                        billed {billingCycle}
                      </div>
                    </div>

                    <button
                      onClick={() => handlePurchase(planType)}
                      disabled={loading === planType || isPremiumUser}
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
                    {numericFeatures.map((feature) => (
                      <div
                        key={feature.key}
                        className="flex items-center text-xs sm:text-sm text-gray-300"
                      >
                        <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {plan.features[feature.key]}{" "}
                        {feature.label.toLowerCase()}
                      </div>
                    ))}

                    {textFeatures.map((feature) => (
                      <div
                        key={feature.key}
                        className="flex items-center text-xs sm:text-sm text-gray-300"
                      >
                        <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {plan.features[feature.key]}{" "}
                        {feature.label.toLowerCase()}
                      </div>
                    ))}

                    {booleanFeatures.map((feature) => (
                      <div
                        key={feature.key}
                        className="flex items-center text-xs sm:text-sm text-gray-300"
                      >
                        {plan.features[feature.key] ? (
                          <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        ) : (
                          <X className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                        )}
                        {feature.label}
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
            <div
              className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
border border-gray-600/50 rounded-3xl max-w-lg w-full
relative max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Decorative background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>

              {/* Close button */}
              <button
                onClick={closeDialog}
                className="absolute top-6 right-6 z-10 p-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Dialog Content */}
              <div className="relative p-8">
                {/* Already Premium State */}
                {userInfo?.sub?.type !== "free" &&
                  !dialogData &&
                  !dialogError &&
                  !dialogLoading && (
                    <div className="py-12 text-center">
                      <div className="mx-auto w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                        <Crown className="w-8 h-8 text-amber-400" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-3">
                        You Already Have Premium!
                      </h4>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        You currently have a{" "}
                        <span className="font-semibold capitalize text-amber-400">
                          {userInfo.sub.type}
                        </span>{" "}
                        subscription.
                      </p>
                      {userInfo.sub.expire && (
                        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mb-6">
                          <div className="flex items-center justify-center gap-2">
                            <Clock className="w-4 h-4 text-amber-400" />
                            <span className="text-amber-300 text-sm">
                              Expires on {formatDate(userInfo.sub.expire)}
                            </span>
                          </div>
                        </div>
                      )}
                      <button
                        onClick={closeDialog}
                        className="px-6 py-3 bg-gray-800 border border-gray-600 text-gray-300 rounded-xl hover:bg-gray-700 hover:border-gray-500 transition-all duration-200"
                      >
                        Got it!
                      </button>
                    </div>
                  )}

                {/* Header with icon - Only show if not premium user */}
                {userInfo?.sub?.type === "free" && (
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {selectedPlan && `${planNames[selectedPlan]} Plan`}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Complete your subscription
                    </p>
                  </div>
                )}

                {/* Loading State */}
                {dialogLoading &&
                  !dialogError &&
                  !dialogData &&
                  userInfo?.sub?.type === "free" && (
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
                {dialogError && userInfo?.sub?.type === "free" && (
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

                {/* Success State with Subscription Details */}
                {dialogData &&
                  !dialogError &&
                  userInfo?.sub?.type === "free" && (
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
                              {billingCycle}
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
                          className="order-2 sm:order-1 flex-1 py-3 px-6 bg-gray-800/50 border border-gray-600/50 text-gray-300 rounded-xl hover:bg-gray-700/50 hover:border-gray-500/50 transition-all duration-200 disabled:opacity-50"
                          onClick={handleBuyClick}
                        >
                          Buy
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

"use client";

import Header from "@/components/Header";
import { apiGet, apiPost } from "@/lib/api";
import React, { useState } from "react";
import toast from "react-hot-toast";

const subscriptionPlans = [
  {
    id: "pre-monthly",
    name: "Premium Monthly",
    duration: "1 month",
    amount: 1,
  },
  {
    id: "pre-quarterly",
    name: "Premium Quarterly",
    duration: "4 months",
    amount: 4,
  },
  {
    id: "pre-half-yearly",
    name: "Premium Half Yearly",
    duration: "6 months",
    amount: 6,
  },
  {
    id: "pre-yearly",
    name: "Premium Yearly",
    duration: "12 months",
    amount: 12,
  },
];

const Page = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [assigningPremium, setAssigningPremium] = useState(false);

  const fetchUserInfo = async () => {
    if (!email) return;

    setLoading(true);
    setResult(null);
    setSelectedPlan("");

    try {
      const res = await apiGet(`admin/v1/userinfo/${email}`);
      console.log(res);
      
      setResult(res);
    } catch (error) {
      toast.error("API Error:", error);
      setResult({ error: "Failed to fetch data" });
    } finally {
      setLoading(false);
    }
  };

  const assignPremium = async () => {
    if (!selectedPlan) return;

    setAssigningPremium(true);

    try {
      const res = await apiPost(`admin/v1/givesub`, {
        emailId: email,
        subId: selectedPlan,
      });

      

      if (res.status === "success") {
        toast.success("Premium assigned successfully!");
        fetchUserInfo();
      } else {
        toast.error("Failed to assign premium");
      }
    } catch (error) {
      toast.error("Error assigning premium:", error);
      toast.error("Error assigning premium");
    } finally {
      setAssigningPremium(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchUserInfo();
    }
  };

  const userExists = result?.status === "success" && result?.data?.userInfo;
  const userNotFound = result?.status === "success" && !result?.data?.userInfo;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <div className="flex justify-center items-center py-16 px-4">
        <div className="w-full max-w-2xl">
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-200">
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-8 py-6">
              <h2 className="text-3xl font-bold text-white tracking-tight">
                User Management Portal
              </h2>
              <p className="text-slate-300 mt-1 text-sm">
                Search and manage user subscriptions
              </p>
            </div>

            {/* Search Form */}
            <div className="p-8 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="user@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition text-slate-800 placeholder-slate-400"
                />
              </div>

              <button
                onClick={fetchUserInfo}
                disabled={loading || !email}
                className="w-full bg-slate-800 text-white py-3.5 rounded-lg font-semibold hover:bg-slate-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Searching...
                  </span>
                ) : (
                  "Search User"
                )}
              </button>
            </div>

            {/* Results Section */}
            {result && (
              <div className="px-8 pb-8">
                <div className="border-t border-slate-200 pt-6">
                  {userNotFound && (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-center">
                      <div className="text-amber-600 text-5xl mb-3">⚠️</div>
                      <h3 className="text-lg font-semibold text-amber-900 mb-2">
                        User Not Found
                      </h3>
                      <p className="text-amber-700 text-sm">
                        This user doesn't exist in the system. Please ask them
                        to login first.
                      </p>
                    </div>
                  )}

                  {result.error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                      <div className="text-red-600 text-5xl mb-3">❌</div>
                      <h3 className="text-lg font-semibold text-red-900 mb-2">
                        Error Occurred
                      </h3>
                      <p className="text-red-700 text-sm">{result.error}</p>
                    </div>
                  )}

                  {userExists && (
                    <div className="space-y-6">
                      {/* User Info Card */}
                      <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                        <div className="flex items-start gap-4">
                          <img
                            src={result.data.userInfo.imgURL}
                            alt="User avatar"
                            className="w-16 h-16 rounded-full border-2 border-slate-300"
                          />
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-slate-800 mb-1">
                              {result.data.userInfo.firstName}{" "}
                              {result.data.userInfo.lastName}
                            </h3>
                            <p className="text-slate-600 text-sm mb-3">
                              {result.data.userInfo.emailId}
                            </p>

                            <div className="grid grid-cols-2 gap-3 text-sm">
                              <div>
                                <span className="text-slate-500 font-medium">
                                  User ID:
                                </span>
                                <p className="text-slate-800 font-mono">
                                  {result.data.userInfo.id}
                                </p>
                              </div>
                              <div>
                                <span className="text-slate-500 font-medium">
                                  Status:
                                </span>
                                <p className="text-slate-800 capitalize">
                                  {result.data.userInfo.sub?.type || "Free"}
                                </p>
                              </div>
                              {result.data.userInfo.sub?.expire && (
                                <div className="col-span-2">
                                  <span className="text-slate-500 font-medium">
                                    Expires:
                                  </span>
                                  <p className="text-slate-800">
                                    {new Date(
                                      result.data.userInfo.sub.expire
                                    ).toLocaleDateString("en-US", {
                                      year: "numeric",
                                      month: "long",
                                      day: "numeric",
                                    })}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Premium Assignment Section */}
                      <div className="bg-white rounded-lg border border-slate-200 p-6">
                        <h4 className="text-lg font-semibold text-slate-800 mb-4">
                          Assign Premium Subscription
                        </h4>

                        <div className="space-y-3 mb-5">
                          {subscriptionPlans.map((plan) => (
                            <label
                              key={plan.id}
                              className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                selectedPlan === plan.id
                                  ? "border-slate-700 bg-slate-50"
                                  : "border-slate-200 hover:border-slate-400"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <input
                                  type="radio"
                                  name="subscription"
                                  value={plan.id}
                                  checked={selectedPlan === plan.id}
                                  onChange={(e) =>
                                    setSelectedPlan(e.target.value)
                                  }
                                  className="w-4 h-4 text-slate-800"
                                />
                                <div>
                                  <p className="font-semibold text-slate-800">
                                    {plan.name}
                                  </p>
                                  <p className="text-sm text-slate-600">
                                    {plan.duration}
                                  </p>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="font-bold text-slate-800">
                                  ${plan.amount}
                                </p>
                              </div>
                            </label>
                          ))}
                        </div>

                        <button
                          onClick={assignPremium}
                          disabled={!selectedPlan || assigningPremium}
                          className="w-full bg-slate-800 text-white py-3.5 rounded-lg font-semibold hover:bg-slate-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                        >
                          {assigningPremium ? "Assigning..." : "Assign Premium"}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

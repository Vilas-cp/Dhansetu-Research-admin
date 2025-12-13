"use client";
import React, { useState, useEffect } from "react";
import { User, Mail, Calendar, Shield, Crown } from "lucide-react";
import { apiGet } from "@/lib/api";
import Header from "@/components/Header";

const UserProfilePage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        setLoading(true);
        const data = await apiGet("user/v1/info");
        console.log(data);
        
        if (data.status === "success") {
          setUserInfo(data.data.userInfo);
        } else {
          throw new Error("Failed to fetch user information");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const isPremium = userInfo?.sub?.type === "premium";
  const hasExpiry = userInfo?.sub?.expire && userInfo?.sub?.expire !== "none";

  if (loading) {
    return (
      <div>
        <Header/>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-gray-900 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-gray-900 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-3 h-3 bg-gray-900 rounded-full animate-bounce [animation-delay:-0.6s]"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Header />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-sm border border-red-200 p-8 max-w-md w-full mx-4">
            <div className="text-center">
              <div className="text-red-500 text-lg font-medium mb-2">
                Error Loading Profile
                <br></br>
                PLease logout and login again
              </div>
              <p className="text-gray-600">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!userInfo) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">No user information available</div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">User Profile</h1>
            <p className="text-gray-600 mt-2">
              Manage your account information and subscription
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 sm:p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <img
                        className="h-20 w-20 rounded-full object-cover ring-4 ring-gray-100"
                        src={userInfo.imgURL}
                        alt={`${userInfo.firstName} ${userInfo.lastName}`}
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div className="h-20 w-20 rounded-full bg-gray-200 hidden items-center justify-center ring-4 ring-gray-100">
                        <User className="h-8 w-8 text-gray-500" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900 truncate">
                          {userInfo.firstName} {userInfo.lastName}
                        </h2>
                        {isPremium && (
                          <div className="flex items-center space-x-1 bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                            <Crown className="h-4 w-4" />
                            <span>Premium</span>
                          </div>
                        )}
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center text-gray-600">
                          <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                          <span className="truncate">{userInfo.emailId}</span>
                        </div>

                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-5 w-5 mr-3 flex-shrink-0" />
                          <span>Joined {formatDate(userInfo.createdAt)}</span>
                        </div>

                        {/* <div className="flex items-center text-gray-600">
                          <User className="h-5 w-5 mr-3 flex-shrink-0" />
                          <span className="font-mono text-sm">
                            ID: {userInfo.id}
                          </span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subscription Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="h-6 w-6 text-gray-700" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Subscription
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">
                        Plan Type
                      </div>
                      <div
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          isPremium
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-gray-50 text-gray-700 border border-gray-200"
                        }`}
                      >
                        {isPremium ? (
                          <>
                            <Crown className="h-4 w-4 mr-1" />
                            Premium
                          </>
                        ) : (
                          "Free"
                        )}
                      </div>
                    </div>

                    {hasExpiry && (
                      <div>
                        <div className="text-sm text-gray-500 mb-1">
                          {isPremium ? "Expires On" : "Valid Until"}
                        </div>
                        <div className="text-gray-900 font-medium">
                          {formatDate(userInfo.sub.expire)}
                        </div>
                      </div>
                    )}

                    {!hasExpiry && !isPremium && (
                      <div className="text-sm text-gray-500">No expiration</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Account Details */}
          {/* <div className="mt-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Account Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <dt className="text-sm text-gray-500 mb-1">User UUID</dt>
                    <dd className="text-sm font-mono text-gray-900 bg-gray-50 p-2 rounded break-all">
                      {userInfo.uuid}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-sm text-gray-500 mb-1">Clerk ID</dt>
                    <dd className="text-sm font-mono text-gray-900 bg-gray-50 p-2 rounded break-all">
                      {userInfo.clerkId}
                    </dd>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;

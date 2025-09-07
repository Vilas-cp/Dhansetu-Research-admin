"use client";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { BarLoader } from "react-spinners";
import { apiGet, apiPost } from "@/lib/api";

export default function Page() {
  const { user } = useUser();
  const router = useRouter();
  const userId = user?.id;
  const emailId=user?.primaryEmailAddress?.emailAddress;
  const firstName=user?.firstName;
  const lastName=user?.lastName;
  const imgURL=user?.imageUrl;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    const verifyUser = async () => {
      try {
   
        
        const verifyRes = await apiPost("user/v1/login",{clerkId:userId,emailId,firstName,lastName,imgURL});
        console.log(verifyRes);
        
        if (verifyRes?.status === "success") {
          router.push(`/`);
        } else {
          const loginRes = await apiPost("user/v1/verify");

          if (loginRes?.status === "success") {
            window.location.reload();
          } else {
            toast.error("Error logging in user!");
          }
        }
      } catch (err) {
        console.error("Verification failed:", err);
        toast.error("Error verifying user");
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, [userId, router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {loading && <BarLoader color="#85B6FF" />}
    </div>
  );
}

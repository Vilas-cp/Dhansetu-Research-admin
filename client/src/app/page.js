"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { apiPost } from "@/lib/api";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const verifySession = async () => {
      try {
        const res = await apiPost("/verify"); 
    
        if (res.valid) {
          router.replace("/dashboard");
        } else {
          router.replace("/login");
        }
      } catch (err) {
        console.log("Verification failed", err);
        router.replace("/login");
      }
    };

    verifySession();
  }, [router]);

  return <p>Checking session...</p>;
}

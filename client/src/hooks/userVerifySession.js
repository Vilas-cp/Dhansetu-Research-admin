import { useEffect } from "react";
import { useRouter } from "next/navigation"; 
import {apiPost} from "@/lib/api"; 

export function useVerifySession() {
  const router = useRouter();

  useEffect(() => {
    const verifySession = async () => {
      try {
        const res = await apiPost("admin/v1/verify");
        console.log(res);
        
        if (res.status === "success") {
          router.replace("/dashboard");
        } else {
          router.replace("/login");
        }
      } catch (err) {
        console.error("Verification failed", err);
        router.replace("/login");
      }
    };

    verifySession();
  }, [router]);
}

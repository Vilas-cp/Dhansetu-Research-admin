"use client";

import { useVerifySession } from "@/hooks/userVerifySession";

export default function Home() {
useVerifySession();
  return <p></p>;
}

"use client";
import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

export default function SignUpSSOCallback() {
  return (
    <AuthenticateWithRedirectCallback
      signInForceRedirectUrl="/verify"
      signUpForceRedirectUrl="/verify"
    />
  );
}
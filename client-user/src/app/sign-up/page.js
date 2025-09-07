"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";

import { Loader2 } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <SignUp.Root>
        <Card className="w-[400px] max-w-md p-6 shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle className="text-3xl font-extrabold text-center text-[#13289F]">
              Sign up
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col items-center gap-6">
            <Clerk.Connection name="google" asChild>
              <Button
                size="lg"
                className="w-full bg-black text-white font-medium shadow-md"
              >
                <Clerk.Loading scope="provider:google">
                  {(isLoading) =>
                    isLoading ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <>
                        <FcGoogle className="mr-2 size-5" />
                        Continue with Google
                      </>
                    )
                  }
                </Clerk.Loading>
              </Button>
            </Clerk.Connection>
          </CardContent>

          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/sign-in" className="text-primary font-medium">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </SignUp.Root>
    </div>
  );
}

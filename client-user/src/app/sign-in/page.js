"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Loader2 } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <SignIn.Root>
        <Card className="w-[400px] max-w-md p-6 shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle className="text-3xl font-extrabold text-center text-[#13289F]">
              Sign in
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
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="text-primary font-medium">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </SignIn.Root>
    </div>
  );
}

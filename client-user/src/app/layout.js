import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dhansetu Research",
  description: "Explore our advanced ALGO software, featuring powerful strategies for seamless trading across multiple brokers. Achieve maximum convenience and success in your investments with DhansetuResearch. &#128222; +91 9179042673"
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Toaster position="top-left" />
          <main className="px-0 lg:px-[10%] ">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}

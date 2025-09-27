"use client";
import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import { Poppins } from "next/font/google";

const poppinsFont = Poppins({ subsets: ["latin"], weight: "300" });
const poppinsFont1 = Poppins({ subsets: ["latin"], weight: "700" });
const poppinsFont2 = Poppins({ subsets: ["latin"], weight: "500" });


const Header1 = () => {
  return (
    <>
      {/* Headline Announcement - Fixed at the top with scrolling text */}
      <div className="bg-[#4169e1] w-full z-[101] fixed top-0 h-[40px] flex items-center overflow-hidden text-white">
        {/* Use flexbox here for proper vertical centering */}
        <div className="relative h-full w-full flex items-center">
          <div className="absolute flex items-center animate-scroll">
            <p className="text-base font-bold whitespace-nowrap">
              <span className={poppinsFont2.className}>
                {` 🚨 Please make payments only to bank accounts with the name "Brain Auto Tech Pvt Ltd"—whether through barcode, UPI, or bank details. Ensure the company name is present.  ⚠️ Important: Beware of scammers! Only trust official communications and payment details from Brain Auto Tech.`}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Navbar - Fixed just below the announcement */}
      <Popover
        className={
          "flex items-center border-b-2 w-[100%] px-6 bg-white py-2 h-20 text-black z-[100] fixed top-[40px] shadow-2xl bg-opacity-100 bg-blur"
        }
      >
        <a href="/" className="cursor-pointer outline-none border-none">
          <img src="/sidelogoplustext.PNG" width={190} />
        </a>
        <div className="grow flex justify-center items-center">
          <div className="hidden lg:flex items-center gap-2 md:gap-8 font-semibold">
            <a href="/" className="textdesign hover:cursor-pointer">
              Home
            </a>
            <a href="/about" className="textdesign hover:cursor-pointer">
              About
            </a>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 data-[hover=true]:bg-transparent"
                  radius="sm"
                  variant="light"
                >
                  <div className="flex gap-1 items-center justify-center">
                    <span className="textdesign">Services</span>
                    <img
                      src="https://static.thenounproject.com/png/1123247-200.png"
                      alt=""
                      width={23}
                    />
                  </div>
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="ACME features"
                className="w-[240px] rounded-[8px] font-semibold shadow-xl text-[16px] bg-gray-100"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                <DropdownItem
                  key="autoscaling"
                  className="flex justify-center py-[8px]"
                >
                  <a href="/algo-services" className="textdesign">
                    Algo services
                  </a>
                </DropdownItem>
                <DropdownItem
                  key="supreme_support"
                  className="flex justify-center py-[8px]"
                >
                  <a className="textdesign" href="/it-services">
                    IT services
                  </a>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <a href="/pricing" className="textdesign cursor-pointer">
              Pricing
            </a>
            <a href="/indicator" className="textdesign cursor-pointer">
              Indicator
            </a>
            <a href="/payment" className="textdesign hover:cursor-pointer">
              Payment
            </a>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  radius="sm"
                  variant="light"
                >
                  <div className="flex gap-1 items-center justify-center textdesign">
                    Policy
                    <img
                      src="https://static.thenounproject.com/png/1123247-200.png"
                      alt=""
                      width={23}
                    />
                  </div>
                </Button>
              </DropdownTrigger>

              <DropdownMenu
                aria-label="ACME features"
                className="w-[240px] bg-gray-100 rounded-[8px] font-semibold shadow-xl text-[16px] flex gap-[10px]"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                <DropdownItem
                  key="autoscal"
                  className="flex justify-center py-[8px]"
                >
                  <a className="textdesign" href="/disclaimer">
                    Disclaimer
                  </a>
                </DropdownItem>
                <DropdownItem
                  key="supreme_support"
                  className="flex justify-center py-[8px]"
                >
                  <a className="textdesign" href="/privacy">
                    Privacy Policy
                  </a>
                </DropdownItem>
                <DropdownItem
                  key="autoscaling"
                  className="flex justify-center py-[8px]"
                >
                  <a className="textdesign" href="/terms">
                    Terms and Condition
                  </a>
                </DropdownItem>
                <DropdownItem
                  key="supreme_supt"
                  className="flex justify-center py-[8px]"
                >
                  <a className="textdesign" href="/refund">
                    Refund Policy
                  </a>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <a href="/contact" className="textdesign">
              Contact
            </a>
            <a
              href="https://brainautotech.gitbook.io/intro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center relative tracking-[1px] font-sans font-bold text-white pt-[6px] bg-[#1676e4] duration-300 hover:bg-slate-700 xl:w-[140px] lg:w-[50px] h-[4vh] rounded-xl text-[2vh]"
            >
              Help Center
            </a>
          </div>
        </div>
        <div className="flex items-center justify-end lg:hidden">
          <Popover.Button
            className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400
     hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute   inset-x-0 top-0 origin-top-right transform p-2 transition xl:hidden z-[100]"
          >
            <div className="rounded-lg overflow-y-auto max-h-[90vh] bg-[#aee9e7] !text-[#102b5c] shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <a
                    href="/"
                    className="cursor-pointer outline-none border-none"
                  >
                    <img src="/Textonly.png" width={160} className="" />
                  </a>
                  <div className="-mr-2">
                    <Popover.Button
                      className="inline-flex items-center justify-center rounded-md bg-[#aee9e7] p-2 text-black
     hover:bg-gray-100 hover:text-gray-500 focus:outline-none"
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-5 text-white font-bold text-center">
                    <a
                      href="/"
                      className="focus:outline-none focus:ring-2 !text-[#102b5c] focus:ring-inset focus:ring-gray-500 px-2"
                    >
                      Home
                    </a>
                    <a
                      href="/about"
                      className="focus:outline-none focus:ring-2 !text-[#102b5c] focus:ring-inset focus:ring-gray-500 px-2"
                    >
                      About
                    </a>
                    <a
                      href="/it-services"
                      className="focus:outline-none focus:ring-2 !text-[#102b5c] focus:ring-inset focus:ring-gray-500 px-2"
                    >
                      IT-Services
                    </a>
                    <a
                      href="/algo-services"
                      className="focus:outline-none focus:ring-2 !text-[#102b5c] focus:ring-inset focus:ring-gray-500 px-2"
                    >
                      Algo-Services
                    </a>
                    <a
                      href="/indicator"
                      className="focus:outline-none focus:ring-2 !text-[#102b5c] focus:ring-inset focus:ring-gray-500 px-2"
                    >
                      Indicator
                    </a>
                    <a
                      href="/pricing"
                      className="focus:outline-none focus:ring-2 !text-[#102b5c] focus:ring-inset focus:ring-gray-500 px-2"
                    >
                      Pricing
                    </a>
                    <a
                      href="/payment"
                      className="focus:outline-none focus:ring-2 !text-[#102b5c] focus:ring-inset focus:ring-gray-500 px-2"
                    >
                      Payment
                    </a>
                    <a
                      href="/disclaimer"
                      className="focus:outline-none focus:ring-2 !text-[#102b5c] focus:ring-inset focus:ring-gray-500 px-2"
                    >
                      Disclaimer
                    </a>
                    <a
                      href="/privacy"
                      className="focus:outline-none focus:ring-2 !text-[#102b5c] focus:ring-inset focus:ring-gray-500 px-2"
                    >
                      Privacy Policy
                    </a>
                    <a
                      href="/terms"
                      className="focus:outline-none focus:ring-2 !text-[#102b5c] focus:ring-inset focus:ring-gray-500 px-2"
                    >
                      Terms and Condition
                    </a>
                    <a
                      href="/contact"
                      className="focus:outline-none focus:ring-2 !text-[#102b5c] focus:ring-inset focus:ring-gray-500 px-2"
                    >
                      Contact
                    </a>
                    <a
                      href="https://brainautotech.gitbook.io/intro/"
                      target="_blank"
                      className="focus:outline-none focus:ring-2 !text-[#102b5c] focus:ring-inset focus:ring-gray-500 px-2"
                    >
                      Help Center
                    </a>
                  </nav>
                </div>
                <div className="mt-6 flex items-center gap-2 text-white">
                  <a
                    href="https://login.brainautotech.com/login"
                    target="_blank"
                    className="rounded-md bg-purple-500 px-4 py-2 text-sm font-bold md:text-xl w-full
                 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 active:bg-gray-100 flex justify-center"
                  >
                    Login
                  </a>
                  <a
                    href="https://login.brainautotech.com/signup"
                    target="_blank"
                    className="rounded-md bg-purple-500 px-4 py-2 text-sm font-bold md:text-xl w-full
                 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 active:bg-gray-100 flex justify-center"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
        <div className="hidden lg:flex lg:gap-[20px] text-white">
          <a
            href="https://login.brainautotech.com/login"
            target="_blank"
            className="mr-2 text-center pt-1 bg-[#f4511d] duration-300 hover:bg-slate-700 xl:w-[85px] lg:w-[50px] h-[4vh] font-light rounded-xl text-[2vh]"
          >
            Login
          </a>
          <a
            href="https://login.brainautotech.com/signup"
            target="_blank"
            className="mr-2 text-center pt-1 bg-[#f4511d] duration-300 hover:bg-slate-700 xl:w-[85px] lg:w-[50px] h-[4vh] font-light rounded-xl text-[2vh]"
          >
            Register
          </a>
        </div>
      </Popover>

      {/* Ensure content is not hidden behind the fixed elements */}
      <div className="mt-[40px]">
        {/* Your sliding cards or other content goes here */}
      </div>
    </>
  );
};

export default Header1;
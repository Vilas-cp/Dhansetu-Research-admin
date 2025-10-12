"use client";
import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import {
  
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
    <div className={poppinsFont1.className}>
      <Popover
        className={
          "flex items-center border-b-2 w-[100%] px-6 bg-white py-2 h-20 text-black z-[100]  fixed shadow-2xl bg-opacity-100 bg-blur"
        }
      >
        <a href="/" className="cursor-pointer outline-none border-none">
          <img src="/sidelogoplustext.PNG" width={190} />
        </a>
        <div className="grow flex justify-center items-center">
          <div className="hidden lg:flex items-center gap-2 md:gap-8 ">
            <a href="/" className="textdesign hover:cursor-pointer">
              Home
            </a>
            <a href="/about" className="textdesign hover:cursor-pointer">
              About
            </a>
            <a href="/services" className="textdesign hover:cursor-pointer">
              Services
            </a>

            <a href="/pricing" className="textdesign cursor-pointer">
              Pricing
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
                className="w-[240px] bg-gray-100 rounded-[8px]  shadow-xl text-[16px] flex gap-[10px] "
                itemClasses={{
                  base: "gap-4",
                }}
              >
                <DropdownItem
                  key="autoscal"
                  className="flex justify-center py-[8px]"
                >
                  <a className="textdesign font-bold" href="/disclaimer">
                    Disclaimer
                  </a>
                </DropdownItem>
                <DropdownItem
                  key="supreme_support"
                  className="flex justify-center py-[8px]"
                >
                  <a className="textdesign font-bold" href="/privacy">
                    Privacy Policy
                  </a>
                </DropdownItem>
                <DropdownItem
                  key="autoscaling"
                  className="flex justify-center py-[8px]"
                >
                  <a className="textdesign font-bold" href="/terms">
                    Terms and Condition
                  </a>
                </DropdownItem>
                <DropdownItem
                  key="supreme_supt"
                  className="flex justify-center py-[8px]"
                >
                  <a className="textdesign font-bold" href="/refund">
                    Refund Policy
                  </a>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <a href="/contact" className="textdesign">
              Contact
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
                      href="/services"
                      className="focus:outline-none focus:ring-2 !text-[#102b5c] focus:ring-inset focus:ring-gray-500 px-2"
                    >
                      Services
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
            className="mr-2 flex items-center justify-center  bg-[#002366] duration-300 hover:bg-slate-700 xl:w-[85px] lg:w-[50px] h-[5vh] font-light rounded-xl text-[2vh]"
          >
            Login
          </a>
          <a
            href="https://login.brainautotech.com/signup"
            target="_blank"
            className="mr-2  flex items-center justify-center bg-[#002366] duration-300 hover:bg-slate-700 xl:w-[85px] lg:w-[50px] h-[5vh] font-light rounded-xl text-[2vh]"
          >
            Register
          </a>
        </div>
      </Popover>
</div>
     
    </>
  );
};

export default Header1;

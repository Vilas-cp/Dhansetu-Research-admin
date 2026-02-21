"use client";
import React, { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import DisclaimerMarque from "./Disclaimer";

const Header1 = () => {
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "https://blog.dhanseturesearch.in/", label: "Market course" },
    { href: "/pricing", label: "Pricing" },
    { href: "/payment", label: "Payment" },
  ];

  const servicesLinks = [
    { href: "/ra-services", label: "RA Services" },
    { href: "/services", label: "Services" },
  ];

  const policyLinks = [
    { href: "/disclaimer", label: "Disclaimer" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms and Condition" },
    { href: "/refund", label: "Refund Policy" },
    { href: "/complaint", label: "Complaint" },
    { href: "/disclosure", label: "Disclosure" },
    { href: "/investor-charter", label: "Investor Charter" },
    {href:"/grievance-redressal",label:"Grievance Redressal"}
  ];

  return (
    <>
      <Popover className="fixed top-0 w-full z-50 bg-white backdrop-blur-md shadow-lg border-b border-gray-100">
        <DisclaimerMarque/>
        <div className="w-full mx-auto px-4 sm:px-2 lg:px-2">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="/"
              className="flex-shrink-0 transition-transform hover:scale-105 duration-300"
            >
              <img
                src="/logos/side-text.png"
                className="h-12 w-auto"
                alt="Logo"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.label === "Market course" ? "_blank" : undefined}
                  className="textdesign text-base"
                >
                  {link.label}
                </a>
              ))}

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="textdesign text-base flex items-center gap-1"
                >
                  Services
                  <ChevronDownIcon
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <Transition
                  show={isServicesOpen}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <div
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-48"
                  >
                    <div className="rounded-xl shadow-xl bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-1 p-2">
                        {servicesLinks.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            className="flex items-center px-4 py-3 text-sm font-semibold text-[#1f3a68] hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-lg transition-all duration-200"
                          >
                            <span className="w-1.5 h-1.5 bg-[#ff3221] rounded-full mr-3"></span>
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>

              {/* Policy Dropdown */}
              <div className="relative group">
                <button
                  onMouseEnter={() => setIsPolicyOpen(true)}
                  onMouseLeave={() => setIsPolicyOpen(false)}
                  className="textdesign text-base flex items-center gap-1"
                >
                  Policy
                  <ChevronDownIcon
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isPolicyOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <Transition
                  show={isPolicyOpen}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <div
                    onMouseEnter={() => setIsPolicyOpen(true)}
                    onMouseLeave={() => setIsPolicyOpen(false)}
                    className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-56"
                  >
                    <div className="rounded-xl shadow-xl bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-1 p-2">
                        {policyLinks.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            className="flex items-center px-4 py-3 text-sm font-semibold text-[#1f3a68] hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-lg transition-all duration-200"
                          >
                            <span className="w-1.5 h-1.5 bg-[#ff3221] rounded-full mr-3"></span>
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>

              <a href="/contact" className="textdesign text-base">
                Contact
              </a>
            </nav>

            {/* Auth Buttons Desktop */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="https://client.dhanseturesearch.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-[#002366] text-white font-semibold rounded-lg hover:bg-[#003399] transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Login
              </a>
              <a
                href="https://client.dhanseturesearch.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-gradient-to-r from-[#ff3221] to-[#ff5544] text-white font-semibold rounded-lg hover:from-[#ff4532] hover:to-[#ff6655] transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Register
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <Popover.Button className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#002366] transition-all duration-200">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
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
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden max-h-screen overflow-y-auto"
              >
            <div className="rounded-2xl shadow-2xl bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 pb-3">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-6">
                  <a
                    href="/"
                    className="w-full flex items-center justify-center"
                  >
                    <img
                      src="/logos/side-text.png"
                      className="h-10 w-auto"
                      alt="Logo"
                    />
                  </a>
                  <Popover.Button className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none transition-all duration-200">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>

                {/* Mobile Navigation */}
                <nav className="grid gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="px-4 py-3 text-base font-bold text-[#1f3a68] hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-lg transition-all duration-200"
                    >
                      {link.label}
                    </a>
                  ))}

                  {/* Services Section Mobile */}
                  <div className="border-t border-gray-200 mt-2 pt-2">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Services
                    </div>
                    {servicesLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="px-4 py-3 text-sm font-semibold text-[#1f3a68] hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-lg transition-all duration-200 flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-[#ff3221] rounded-full mr-3"></span>
                        {link.label}
                      </a>
                    ))}
                  </div>

                  {/* Policy Section Mobile */}
                  <div className="border-t border-gray-200 mt-2 pt-2">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Policy
                    </div>
                    {policyLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="px-4 py-3 text-sm font-semibold text-[#1f3a68] hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-lg transition-all duration-200 flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-[#ff3221] rounded-full mr-3"></span>
                        {link.label}
                      </a>
                    ))}
                  </div>

                  <a
                    href="/contact"
                    className="px-4 py-3 text-base font-bold text-[#1f3a68] hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-lg transition-all duration-200"
                  >
                    Contact
                  </a>
                </nav>

                {/* Mobile Auth Buttons */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a
                    href="https://client.dhanseturesearch.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 bg-[#002366] text-white text-center font-semibold rounded-lg hover:bg-[#003399] transition-all duration-200 shadow-md"
                  >
                    Login
                  </a>
                  <a
                    href="https://client.dhanseturesearch.com/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 bg-gradient-to-r from-[#ff3221] to-[#ff5544] text-white text-center font-semibold rounded-lg hover:from-[#ff4532] hover:to-[#ff6655] transition-all duration-200 shadow-md"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

export default Header1;
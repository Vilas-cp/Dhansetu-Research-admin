"use client";
import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";

function Header() {
  return (
    <Navbar className="pt-6 px-[20px] fixed bg-white pb-6 z-[100]">
      <NavbarBrand>
        <p className="font-bold text-inherit">BrainTech</p>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex  font-semibold gap-[10vh] text-[#032b5f] text-[17px]"
        justify="center"
      >
        <NavbarItem>
          <Link href="#" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            About
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent "
                radius="sm"
                variant="light"
              >
                <div className="flex gap-1 items-center justify-center">
                  Services
                  <img
                    src="https://static.thenounproject.com/png/1123247-200.png"
                    alt=""
                    width={23}
                  />
                </div>
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[240px] rounded-[8px] font-semibold shadow-xl text-[16px] bg-white"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              className="flex justify-center py-[8px]"
            >
              Algo services
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              className="flex justify-center py-[8px]"
            >
              It services
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link color="foreground" href="#">
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Payment
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent "
                radius="sm"
                variant="light"
              >
                <div className="flex gap-1 items-center justify-center">
                  Policy
                  <img
                    src="https://static.thenounproject.com/png/1123247-200.png"
                    alt=""
                    width={23}
                  />
                </div>
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[240px] bg-white rounded-[8px] font-semibold shadow-xl text-[16px] flex gap-[10px] hover:border-none"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscal"
              className="flex justify-center py-[8px]"
            >
              Disclaimer
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              className="flex justify-center py-[8px]"
            >
              Privacy Policy
            </DropdownItem>
            <DropdownItem
              key="autoscaling"
              className="flex justify-center py-[8px]"
            >
              Terms and Condition
            </DropdownItem>
            <DropdownItem
              key="supreme_supt"
              className="flex justify-center py-[8px]"
            >
              Refund policy
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
            </Link>
          <Link href="https://brainautotech.gitbook.io/intro/" target="_blank" rel="noopener noreferrer" className="textdesign">
            Help Center
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Register
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default Header;

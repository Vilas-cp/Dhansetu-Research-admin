"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PlusCircle,
  FileText,
  Users,
  Menu,
  X,
  LogOut,
  Home,
  BarChart3,
  SubscriptIcon,
  DollarSign,
  CircleDollarSign,
} from "lucide-react";
import { Lora } from "next/font/google";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import toast from "react-hot-toast";
import { useUser, useClerk } from "@clerk/nextjs";
import { apiPost } from "@/lib/api";

const lora = Lora({
  subsets: ["latin"],
  weight: ["700"],
});

const Header = () => {
  const { user } = useUser();
  const { signOut } = useClerk();

  const pathname = usePathname();
  const currentPage = pathname?.split("/").pop();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const navigationItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/blogs", label: "Blogs", icon: FileText },
    { href: "/dashboard", label: "Dashboard", icon: BarChart3 },
    { href: "/subscription", label: "Subscription", icon: CircleDollarSign },
  ];

  const handleLogout = async () => {
    if (isLoggingOut) return;
    setIsLoggingOut(true);
    try {
      await apiPost("user/v1/logout");
    } catch (err) {
      toast.error("Backend logout failed, signing you out…");
    } finally {
      try {
        await signOut({ redirectUrl: "/" });
      } catch {
        window.location.href = "/";
      }
      setIsLoggingOut(false);
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row with different layout for mobile vs desktop */}
        <div className="flex justify-between items-center h-16">
          {/* Desktop Layout: Empty spacer, centered logo, user menu */}
          <div className="hidden md:block w-8 h-8"></div>

          {/* Mobile Layout: Logo on left, user menu on right */}
          <div className="flex items-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <span className="text-2xl md:text-4xl font-bold text-gray-900">
                <span className={lora.className}>Dhansetu</span>
              </span>
            </Link>
          </div>

          {/* User Menu/Sign In - Right side */}
          <div className="flex items-center space-x-4 ml-auto ">
            {/* Desktop User Dropdown - hidden on mobile */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="hidden md:flex ">
                  <Button
                    variant="ghost"
                    className="md:flex items-center space-x-2 hidden"
                  >
                    <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
                      {user.imageUrl ? (
                        <img
                          src={user.imageUrl}
                          alt={user.fullName || "User"}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      ) : (
                        <Users className="w-4 h-4 text-gray-600" />
                      )}
                    </div>
                    <span className="text-sm font-medium hidden md:block">
                      {user.fullName || user.primaryEmailAddress?.emailAddress}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link
                      href="/dashboard"
                      className="flex items-center space-x-2"
                    >
                      <Users className="w-4 h-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="text-red-600 focus:text-red-600 focus:bg-red-50"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    {isLoggingOut ? "Logging out…" : "Logout"}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/sign-in" className="hidden md:block">
                <Button className="bg-white text-black border border-black">Sign In</Button>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Full width separator line - spans edge to edge */}
        <div className="hidden md:block absolute left-0 right-0 border-t border-gray-200"></div>

        {/* Desktop Navigation - Below the logo */}
        <nav className="hidden md:flex items-center justify-center space-x-1 py-3">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.href.split("/").pop();
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={`flex items-center space-x-2 ${
                    isActive
                      ? "bg-[#fdeee9] text-[#f99d1d] hover:bg-[#fee3da]"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {/* <Icon className="w-4 h-4" /> */}
                  <span>{item.label}</span>
                </Button>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.href.split("/").pop();
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-100 text-blue-700"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                  </Link>
                );
              })}
              
              {/* Mobile User Profile Section */}
              {user && (
                <div className="pt-4 border-t border-gray-200">
                  {/* User Info Display */}
                  <div className="flex items-center space-x-3 px-3 py-2 mb-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
                      {user.imageUrl ? (
                        <img
                          src={user.imageUrl}
                          alt={user.fullName || "User"}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      ) : (
                        <Users className="w-4 h-4 text-gray-600" />
                      )}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">
                        {user.fullName || "User"}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {user.primaryEmailAddress?.emailAddress}
                      </div>
                    </div>
                  </div>
                  
                  {/* Profile Link */}
                  <Link
                    href="/dashboard"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg w-full transition-colors mb-1"
                  >
                    <Users className="w-5 h-5" />
                    <span className="font-medium">Profile</span>
                  </Link>
                  
                  {/* Logout Button */}
                  <button
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                    className="flex items-center space-x-3 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg w-full transition-colors disabled:opacity-60"
                  >
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">
                      {isLoggingOut ? "Logging out…" : "Logout"}
                    </span>
                  </button>
                </div>
              )}
              
              {/* Mobile Sign In */}
              {!user && (
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href="/sign-in"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-lg w-full transition-colors"
                  >
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Sign In</span>
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
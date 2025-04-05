"use client";

import { NAVIGATION } from "@/constants";
import useSticky from "@/hooks/use-sticky";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { HoverButton } from "./button/hover-button";
import MobileSidebarNav from "./mobile-sidebar-nav";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isSticky = useSticky();

  const toggleSidebar = useCallback(
    () => setIsSidebarOpen((prev) => !prev),
    []
  );

  return (
    <>
      <header
        className={cn(
          "fixed z-30 w-full lg:pt-12 top-0 transition-all duration-500",
          isSticky && "lg:pt-0"
        )}
      >
        <div
          className={cn(
            "transition-colors duration-500 bg-white ease-in-out py-5 lg:py-0",
            isSticky ? "bg-white py-0" : "bg-transparent"
          )}
        >
          <div className="max-w-full md:max-w-2xl lg:max-w-7xl mx-auto px-5">
            <div className="rounded-xl bg-white px-3 py-3 lg:px-5 lg:py-0">
              <nav className="py-0 flex justify-between items-center flex-wrap relative md:pt-0 lg:flex lg:flex-row lg:justify-start">
                <div className="transition-all duration-500 relative mr-10">
                  <Link className="flex items-center justify-between" href="/">
                    <Image
                      height={20}
                      width={60}
                      priority
                      src="/logo/logo.png"
                      alt="Sur consulting logo"
                    />
                  </Link>
                </div>
                <div className="flex-1 items-center hidden lg:flex lg:basis-auto">
                  <nav>
                    <ul className="site-menu-main px-0 lg:flex lg:items-center lg:mb-0 lg:pl-0">
                      {NAVIGATION?.map((item, i) => (
                        <li
                          key={i}
                          className="font-normal list-none group/submenu relative py-8 px-4"
                        >
                          <Link href={item.href} className="block">
                            <span className="menu-item-text relative flex items-center">
                              {item.label}
                              {item.submenu && item.submenu.length > 0 && (
                                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/submenu:rotate-180" />
                              )}
                              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 origin-center transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/submenu:scale-x-100"></span>
                            </span>
                          </Link>

                          {item.submenu && item.submenu.length > 0 && (
                            <ul
                              className={cn(
                                "absolute left-0 top-full mt-2 w-[22rem] bg-white shadow-lg rounded-lg overflow-hidden origin-top",
                                "transition-all duration-300 ease-out opacity-0 invisible scale-95 -translate-y-2.5",
                                "group-hover/submenu:opacity-100 group-hover/submenu:visible group-hover/submenu:scale-100 group-hover/submenu:translate-y-0"
                              )}
                            >
                              {item.submenu.map((subItem, subIndex) => (
                                <li
                                  key={subIndex}
                                  className="py-3 px-6 hover:bg-gray-100 hover:rounded-md transition-colors duration-200"
                                >
                                  <Link
                                    href={subItem.href}
                                    className="block text-heading-color"
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                <div className="hidden xl:flex items-center gap-4 xl:gap-6">
                  <Link
                    href="/portal-login"
                    className="inline-flex items-center justify-center px-6 py-4.5 text-sm font-medium bg-white border-2 rounded-md hover:scale-105 transition-transform duration-300"
                  >
                    Portal Login
                  </Link>
                  <HoverButton
                    customClass="border-blue-600 text-white"
                    bgAnimation="bg-blue-600"
                    textColor="text-blue-600"
                    href="/about"
                  >
                    Talk to an Expert
                  </HoverButton>
                </div>

                <div
                  className="flex h-7 w-7 cursor-pointer justify-center items-center xl:hidden"
                  onClick={toggleSidebar}
                >
                  <Menu className="h-5 w-5" />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <MobileSidebarNav isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
}

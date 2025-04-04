'use client';

import useSticky from '@/hooks/use-sticky';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import HoverButton from './button/hover-button';
import MobileSidebarNav from './mobile-sidebar-nav';
import NavBar from './nav-bar';

export default function Header() {
  const [isSearchBarOpen, setSearchBarOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isSticky = useSticky();

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <>
      <header
        className={cn(
          "fixed z-[30] w-full pt-12 top-0 transition-all duration-500",
          isSticky && "shadow-stickyMenu pt-0"
        )}
      >
        <div
          className={cn(
            "transition-colors duration-500 bg-white ease-in-out py-5 lg:py-0",
            isSticky ? "bg-white py-0" : "bg-transparent"
          )}
        >
          <div className="bstr-container mx-auto px-3">
            <div className="rounded-[10px] bg-white px-3 py-3 lg:px-[18px] lg:py-0">
              <nav className="py-0 flex justify-between items-center flex-wrap relative md:pt-0 lg:flex lg:flex-row lg:justify-start">
                <div className="max-w-[128px] transition-all duration-500 relative mr-10">
                  <Link className="flex items-center justify-between" href="/">
                    <Image
                      height={20}
                      width={60}
                      priority
                      src="/assets/images/logo/logo.png"
                      alt="Sur consulting logo"
                    />
                  </Link>
                </div>
                <div className="flex-1 items-center hidden lg:flex lg:basis-auto">
                  <NavBar />
                </div>
                <div className="hidden sm:flex md:hidden lg:flex">
                  <div className="flex items-center gap-6">
                    <Link
                      href="/portal-login"
                      className="inline-flex items-center justify-center px-6 py-4.5 text-sm font-medium bg-white border-2 rounded-md hover:bg-white hover:scale-105 transition-all duration-300"
                    >
                      Portal Login
                    </Link>
                    <HoverButton
                      customClass="border-accent text-white"
                      bgAnimation="bg-accent"
                      textColor="text-accent"
                      href="/about"
                    >
                      Talk to an Expert
                    </HoverButton>
                  </div>
                </div>

                <div
                  className="flex h-7 w-7 ml-10 cursor-pointer justify-center items-center lg:hidden"
                  onClick={toggleSidebar}
                >
                  <Menu className="h-4 w-4" />
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
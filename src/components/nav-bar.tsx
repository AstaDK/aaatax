"use client";

import { NAVIGATION } from "@/constants";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <ul className="site-menu-main px-0 lg:flex lg:items-center lg:mb-0 lg:pl-0">
        {NAVIGATION?.map((item, i) => (
          <li
            key={i}
            className="text-heading-color font-normal list-none nav-item-has-children group/submenu relative py-[30px] px-[15px]"
          >
            <Link href={item.href} className="block">
              <span className="menu-item-text relative flex items-center">
                {item.label}
                {item.submenu && item.submenu.length > 0 && (
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/submenu:rotate-180" />
                )}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-heading-color transition-all duration-300 group-hover/submenu:w-full"></span>
              </span>
            </Link>

            {item.submenu && item.submenu.length > 0 && (
              <ul
                className="
              absolute left-0 top-full mt-2 w-full bg-white shadow-lg rounded-lg overflow-hidden
              transition-all duration-300 ease-in-out opacity-0 invisible
              group-hover/submenu:opacity-100 group-hover/submenu:visible
              group-hover/submenu:translate-y-0 translate-y-[-10px]
            "
              >
                {item.submenu.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="py-2 px-4 hover:bg-gray-100 hover:rounded-md transition-colors duration-200"
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
  );
}

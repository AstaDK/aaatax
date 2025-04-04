'use client';

import { NAVIGATION } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';

export default function MobileSidebarNav({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-[350px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4">
          <h5>
            <div>
              <Link className="flex items-center justify-between" href="/">
                <Image
                  height={20}
                  width={60}
                  loading="lazy"
                  src="/assets/images/logo/logosmallT.png"
                  alt="Sur consulting logo"
                />
                <div
                  className="flex flex-col items-center"
                  style={{
                    background: "linear-gradient(to bottom, #007bff, #00ffff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  <p className="text-[10px] font-medium text-nowrap">
                    SUR CONSULTING
                  </p>
                  <p className="text-[3px] text-nowrap">
                    WHERE SUCCESS IS STANDARD, EXCELLENCE IS EXPECTED
                  </p>
                </div>
              </Link>
            </div>
          </h5>
          <button
            type="button"
            className="text-gray-400 hover:text-gray-500"
            onClick={onClose}
            aria-label="Close"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-4 overflow-y-auto h-full">
          <Sidebar className="!w-full !border-none">
            <Menu className="!bg-white">
              {NAVIGATION.map((item, i) =>
                item.submenu ? (
                  <SubMenu key={i} label={item.label}>
                    {item.submenu.map((item2, i2) => (
                      <MenuItem component={<Link href={item2.href} />} key={i2}>
                        <div onClick={onClose}>{item2.label}</div>
                      </MenuItem>
                    ))}
                  </SubMenu>
                ) : (
                  <MenuItem component={<Link href={item.href} />} key={i}>
                    <div onClick={onClose}>{item.label}</div>
                  </MenuItem>
                )
              )}
            </Menu>
          </Sidebar>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40"
          onClick={onClose}
        ></div>
      )}
    </>
  );
}

'use client';

import { NAVIGATION } from '@/constants';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect } from 'react';
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';
import { HoverButton } from './button/hover-button';

export default function MobileSidebarNav({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const handleEscapeKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [handleEscapeKey]);

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
                  src="/logo/logo.png"
                  alt="AAA Tax Logo"
                />
              </Link>
            </div>
          </h5>
          <button
            type="button"
            className="text-gray-400 hover:text-gray-500"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4 overflow-y-auto h-full">
          <Sidebar className="!w-full !border-none">
            <Menu className="!bg-white">
              {NAVIGATION.map((item, i) =>
                item.submenu && item.submenu.length > 0 ? (
                  <SubMenu key={i} label={item.label} className="font-semibold">
                    {item.submenu.map((item2, i2) => (
                      <MenuItem
                        component={<Link href={item2.href} />}
                        key={i2}
                        className="px-4 py-2"
                      >
                        <div onClick={onClose}>{item2.label}</div>
                      </MenuItem>
                    ))}
                  </SubMenu>
                ) : (
                  <MenuItem
                    component={<Link href={item.href} />}
                    key={i}
                    className="font-semibold"
                  >
                    <div onClick={onClose}>{item.label}</div>
                  </MenuItem>
                )
              )}
            </Menu>
          </Sidebar>
          <div className="flex flex-col gap-4 p-4">
            <Link
              href="/portal-login"
              className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-medium bg-white border-2 rounded-md hover:bg-white hover:scale-105 transition-all duration-300"
            >
              Portal Login
            </Link>
            <HoverButton
              customClass="w-full border-blue-600 text-white"
              bgAnimation="bg-blue-600"
              textColor="text-blue-600"
              href="/about"
            >
              Talk to an Expert
            </HoverButton>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose}></div>
      )}
    </>
  );
}

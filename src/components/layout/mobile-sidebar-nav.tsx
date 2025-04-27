'use client';

import { LINKS } from '@/constants';
import { cn } from '@/lib/utils';
import { ChevronDown, X } from 'lucide-react';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import Avatar from '@/components/ui/avatar';
import { HoverButton } from '@/components/animations/hover-button';

export default function MobileSidebarNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

  const handleEscapeKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
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

  const toggleSubmenu = useCallback(
    (index: number) => {
      setOpenSubmenu(openSubmenu === index ? null : index);
    },
    [openSubmenu]
  );

  return (
    <>
      <div
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-[280px] bg-white shadow-xl transform transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h5>
            <Link
              className="flex items-center justify-between"
              href="/"
            >
              <Avatar />
            </Link>
          </h5>
          <button
            type="button"
            className="text-navy"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4 overflow-y-auto">
          <ul className="space-y-2">
            {LINKS.map((item, i) => (
              <li key={i}>
                {item.submenu && item.submenu.length > 0 ? (
                  <>
                    <span
                      onClick={() => toggleSubmenu(i)}
                      className="w-full flex justify-between items-center px-4 py-3 text-left text-navy font-semibold rounded-lg"
                    >
                      <Link
                        href={item.href}
                        className="ps-menu-button font-semibold"
                        data-testid="ps-menu-button-test-id"
                        tabIndex={0}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {item.label}
                      </Link>
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 text-navy transition-transform duration-300',
                          openSubmenu === i ? 'rotate-180' : 'rotate-0'
                        )}
                      />
                    </span>
                    <ul
                      className={cn(
                        'space-y-1 pl-4 overflow-hidden transition-all duration-300 ease-in-out',
                        openSubmenu === i ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                      )}
                    >
                      {item.submenu.map((item2, i2) => (
                        <li key={i2}>
                          <Link
                            href={item2.href}
                            className="block px-4 py-2 text-navy rounded-lg"
                            onClick={onClose}
                          >
                            {item2.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-navy font-semibold"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <Link
            href="#portal-login"
            className="w-full inline-flex items-center justify-center px-4 py-3 mb-3 text-md font-semibold text-navy border-2 border-navy rounded-lg"
            onClick={onClose}
          >
            Portal Login
          </Link>
          <HoverButton
            customClass="w-full border-navy text-white"
            bgAnimation="bg-navy"
            textColor="text-navy"
            href="#about"
          >
            Talk to an Expert
          </HoverButton>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 transition-opacity duration-700 ease-in-out"
          onClick={onClose}
        ></div>
      )}
    </>
  );
}

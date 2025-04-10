import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type ButtonProps = {
  children: React.ReactNode;
  customClass?: string;
  textColor?: string;
  bgAnimation?: string;
  href: string;
};

export const HoverButton = ({ children, customClass, textColor, bgAnimation, href }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'relative inline-flex items-center justify-center px-[24px] py-[18px] overflow-hidden font-semibold text-[16px] leading-[1]',
        customClass,
        'transition duration-300 ease-out border-2 rounded-md shadow-md group h-14'
      )}
    >
      <span
        className={cn(
          'absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full',
          bgAnimation,
          'group-hover:translate-x-0 ease'
        )}
      >
        <ArrowRight className="w-6 h-6" />
      </span>
      <span
        className={cn(
          'absolute flex items-center justify-center w-full h-full',
          textColor,
          'transition-all duration-300 transform group-hover:translate-x-full ease'
        )}
      >
        {children}
      </span>
      <span className="relative invisible">{children}</span>
    </Link>
  );
};

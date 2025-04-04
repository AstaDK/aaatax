import Link from 'next/link';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
};

const BorderMovingButton: React.FC<ButtonProps> = ({ children, href }) => (
  <Link
    href={href}
    className="relative inline-flex h-14 w-full max-w-[calc(50%-2px)] items-center justify-center font-semibold text-[16px] leading-[1] overflow-hidden rounded-md p-[2px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-50"
  >
    <span
      className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#2b4dff_0%,#2b4dff_30%,#ffffff_35%,#ffffff_45%,#2b4dff_80%,#ffffff_85%,#ffffff_95%,#2b4dff_100%)] animate-spin"
      style={{ animationDuration: '5s' }}
    />
    <span className="relative inline-flex h-full w-full items-center justify-center rounded-md py-1 text-sm font-medium bg-blue-600/80 text-white backdrop-blur-3xl">
      {children}
    </span>
  </Link>
);

export default BorderMovingButton;
import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  customClass?: string;
  textColor?: string;
  bgAnimation?: string;
  href: string;
};

const HoverButton = ({ children, customClass, textColor, bgAnimation, href }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`relative inline-flex items-center justify-center px-[24px] py-[18px] overflow-hidden font-sora font-semibold text-[16px] leading-[1] ${customClass} transition duration-300 ease-out border-2 rounded-md shadow-md group h-14`}
    >
      <span
        className={`absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full ${bgAnimation} group-hover:translate-x-0 ease`}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span
        className={`absolute flex items-center justify-center w-full h-full ${textColor} transition-all duration-300 transform group-hover:translate-x-full ease`}
      >
        {children}
      </span>
      <span className="relative invisible">{children}</span>
    </Link>
  );
};

export default HoverButton;

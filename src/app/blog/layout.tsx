import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="pt-[9.5rem] lg:pt-[12.5rem]">
      <div className="max-w-full md:max-w-2xl lg:max-w-7xl mx-auto px-5">{children}</div>
    </div>
  );
}

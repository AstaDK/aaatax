import type { Metadata, ResolvingMetadata } from 'next';
import { Sora } from 'next/font/google';

import './globals.css';

const sora = Sora({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "AAA Tax Consulting: Expert Tax Services for Individuals and Businesses",
    description:
      "AAA Tax Consulting provides expert tax preparation and consulting services for both individuals and businesses, ensuring maximum refunds and financial efficiency. Our team offers affordable and reliable solutions for your tax and financial needs.",
    applicationName: "AAA Tax Consulting",
    authors: [{ name: "AAA Tax Consulting" }],
    keywords: [
      "tax services",
      "tax consulting",
      "tax preparation",
      "business tax services",
      "personal tax services",
      "tax filing",
      "payroll services",
      "financial consulting",
      "maximum tax refunds",
      "affordable tax services",
      "tax experts",
      "tax help",
    ],
    generator: "AAA Tax Consulting",
    creator: "AAA Tax Consulting",
    publisher: "AAA Tax Consulting",
    twitter: {
      card: "summary_large_image",
    },
  };
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sora.className}`}>{children}</body>
    </html>
  );
}

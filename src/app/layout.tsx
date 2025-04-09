import { inter } from '@/lib/fonts';
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'AAA Tax Consulting, LLC - Premium Tax Services at an affordable price',
    description:
      'AAA Tax Consulting provides expert tax preparation and consulting services for both individuals and businesses, ensuring maximum refunds and financial efficiency. Our team offers affordable and reliable solutions for your tax and financial needs.',
    applicationName: 'AAA Tax Consulting, LLC',
    authors: [{ name: 'AAA Tax Consulting, LLC' }],
    keywords: [
      'tax services',
      'tax consulting',
      'tax preparation',
      'business tax services',
      'personal tax services',
      'tax filing',
      'payroll services',
      'financial consulting',
      'maximum tax refunds',
      'affordable tax services',
      'tax experts',
      'tax help'
    ],
    generator: 'AAA Tax Consulting, LLC',
    creator: 'AAA Tax Consulting, LLC',
    publisher: 'AAA Tax Consulting, LLC',
    twitter: {
      card: 'summary_large_image'
    }
  };
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth antialiased"
    >
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

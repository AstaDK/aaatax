import Avatar from '@/components/ui/avatar';
import { LINKS, SOCIALS } from '@/constants';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-5 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <Avatar />
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            {LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-sm font-bold text-slate-800 hover:text-slate-600"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/tac"
              className="text-sm font-bold text-slate-800 hover:text-slate-600"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center justify-center border-t border-slate-700 pt-4 md:flex-row md:justify-between">
          <p className="mb-4 text-sm text-slate-800 text-center md:mb-0">
            © {new Date().getFullYear()}{' '}
            <Link
              href="/"
              className="hover:text-slate-600"
            >
              AAA Tax Consulting, LLC
            </Link>
            . All Rights Reserved.
          </p>
          <div className="flex gap-4">
            {SOCIALS.map(({ href, icon: Icon, id }) => (
              <Link
                key={id}
                href={href}
                className="text-slate-800 transition-colors hover:text-slate-600"
                aria-label={`Visit our ${id} page`}
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

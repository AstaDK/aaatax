import Image from 'next/image';
import Link from 'next/link';

export default function Help() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center rounded-lg bg-navy p-4 text-center md:rounded-xl md:p-6 lg:p-8">
      <div className="relative">
        <Image
          src="/logo/logo.png"
          alt="AAATax"
          width={100}
          height={100}
          className="mx-auto"
        />
      </div>
      <h3 className="mb-2 max-w-3xl text-white font-semibold lg:text-lg">Still have questions?</h3>
      <p className="mb-8 max-w-3xl text-gray-300 lg:text-lg">
        Can&apos;t find the answer you&apos;re looking for? Our support team is here to help with any technical
        questions or concerns.
      </p>
      <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
        <Link
          className="rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-white/90 hover:translate-y-[-2px] bg-white text-navy"
          href="#"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
}

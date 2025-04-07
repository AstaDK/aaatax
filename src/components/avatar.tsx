import Image from 'next/image'
import React from 'react'

export default function Avatar() {
  return (
    <Image
      height={20}
      width={60}
      priority
      src="/logo/logo.png"
      alt="Sur consulting logo"
    />
  );
}

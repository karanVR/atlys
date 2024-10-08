import AuthPageCard from '@/components/common/AuthPageCard';
import React from 'react';
import logo from '@/assets/icons/logo.png';
import Image from 'next/image';

const page = () => {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center gap-8 bg-atlys-bg p-8">
      <Image alt="logo" src={logo} className="h-12 w-12" />
      <AuthPageCard isAccount={true} />
    </div>
  );
};

export default page;

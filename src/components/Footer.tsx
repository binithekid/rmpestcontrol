import React from "react";
import Image from "next/image";
import { FiTwitter, FiMail } from "react-icons/fi";
import Link from "next/link";
import Logo from "../../public/rmlogo.png";

const Footer = () => {
  return (
    <div className="flex justify-center border-t bg-gradient-to-br from-white via-gray-50 bg-slate-200 items-center flex-col">
      <Link href="/">
        <div className="flex pt-8 flex-row items-center gap-2">
          <Image
            src={Logo}
            alt="logo"
            width={50}
            className="transition-all hover:opacity-60 cursor-pointer"
          />
          <h1 className="font-display font-bold text-xl tracking-normal text-gray-800">
            RM PEST CONTROL
          </h1>
        </div>
      </Link>
      <div className="py-2 md:text-md text-sm flex flex-row gap-8">
        <Link href="/termsOfService" target="_blank" rel="noopener noreferrer">
          <p className="text-gray-600 font-uncut tracking-tight">About</p>
        </Link>
        <Link href="/privacyPolicy" target="_blank" rel="noopener noreferrer">
          <p className="text-gray-600 font-uncut tracking-tight">Contact</p>
        </Link>
        <Link href="/termsOfService" target="_blank" rel="noopener noreferrer">
          <p className="text-gray-600 font-uncut tracking-tight">Services</p>
        </Link>
      </div>
      <div className="py-1 flex flex-row gap-8">
        <Link href="https://twitter.com/AimHireAI">
          <FiTwitter className="text-gray-500 text-md md:text-xl" />
        </Link>
        <Link href="mailto:aimhireai@gmail.com">
          <FiMail className="text-gray-500 text-md md:text-xl" />
        </Link>
      </div>
      <div className="py-2 flex flex-row gap-8 mb-4">
        <p className="text-sm text-gray-600 font-uncut tracking-tight">
          © 2024 RM Pest Control. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

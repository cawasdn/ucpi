"use client";
import Hamburger from "hamburger-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="flex justify-center w-full shadow-lg z-3 h-[70px] items-center fixed">
      <nav className="flex justify-between container mx-auto items-center px-10 text-slate-100 w-full">
        <div className="">
          <Link href="/">
            <Image
              src="/images/logo.png"
              width={150}
              height={150}
              alt="ucpilogo"
            />
          </Link>
        </div>
        <ul className="hidden sm:flex justify-center items-center w-lg space-x-10">
          <Link href="/">HOME</Link>
          <Link href="/services">SERVICES</Link>
          <Link href="/information">INFORMATION</Link>
          <Link href="/contact">CONTACT</Link>
        </ul>
        <div className="sm:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;

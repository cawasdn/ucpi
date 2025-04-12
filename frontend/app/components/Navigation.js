"use client";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="outline-solid flex h-[70px] justify-between container mx-auto items-center px-10">
      <div>logo</div>
      <ul className="hidden sm:flex justify-center items-center w-lg space-x-10">
        <li>HOME</li>
        <li>SERVICES</li>
        <li>INFORMATION</li>
        <li>CONTACT</li>
      </ul>
      <div className="sm:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </nav>
  );
};

export default Navigation;

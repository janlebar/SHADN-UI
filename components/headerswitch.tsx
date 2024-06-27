"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const Headerswitch = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <Button onClick={toggleMenu} className="text-white focus:outline-none">
        ☰
      </Button>
      {isOpen && (
        <ul className="absolute top-0 left-0 bg-primary text-primary-foreground flex flex-col gap-4 p-4 w-full" style={{ zIndex: 51 }}>
          <li className="mr-4">
            <Link href="/clients">
              <Button className="text-white hover:underline focus:outline-none cursor-pointer">clients</Button>
            </Link>
          </li>
          <li className="mr-4">
            <Link href="/contractors">
              <Button className="text-white hover:underline focus:outline-none cursor-pointer">contractors</Button>
            </Link>
          </li>
          <li className="mr-4">
            <Link href="/email">
              <Button className="text-white hover:underline focus:outline-none cursor-pointer">Email</Button>
            </Link>
          </li>
          <li className="mr-4">
            <Link href="/authentication">
              <Button className="text-white hover:underline focus:outline-none cursor-pointer">authentication</Button>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Headerswitch;

 
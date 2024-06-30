"use client";  // Ensure this component is always rendered on the client side

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Use a useEffect hook to ensure this runs only on the client side
  useEffect(() => {
    setIsOpen(false); // Ensure menu is closed initially
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button onClick={toggleMenu} className="text-white focus:outline-none">
          ☰
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuItem>
          <Link href="/email">Email</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/contractors">Contractors</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/clients">Clients</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileMenu;



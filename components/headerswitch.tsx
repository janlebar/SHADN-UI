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

const Headerswitch = () => {
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

export default Headerswitch;



// const Headerswitch = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative">
//       <Button onClick={toggleMenu} className="text-white focus:outline-none">
//         ☰
//       </Button>
//       {isOpen && (
//         <ul className="absolute top-0 left-0 bg-primary text-primary-foreground flex flex-col gap-4 p-4 w-full" style={{ zIndex: 51 }}>
//           <li className="mr-4">
//             <Link href="/clients">
//               <Button className="text-white hover:underline focus:outline-none cursor-pointer">clients</Button>
//             </Link>
//           </li>
//           <li className="mr-4">
//             <Link href="/contractors">
//               <Button className="text-white hover:underline focus:outline-none cursor-pointer">contractors</Button>
//             </Link>
//           </li>
//           <li className="mr-4">
//             <Link href="/email">
//               <Button className="text-white hover:underline focus:outline-none cursor-pointer">Email</Button>
//             </Link>
//           </li>
//           <li className="mr-4">
//             <Link href="/authentication">
//               <Button className="text-white hover:underline focus:outline-none cursor-pointer">authentication</Button>
//             </Link>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Headerswitch;
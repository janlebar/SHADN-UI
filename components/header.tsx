// components/Header.tsx

import React, { FC } from "react";
import { Input, InputProps } from "@/components/ui/input";
import { LocationButton } from "./ui/customUI/locationbutton";

interface HeaderProps {
  // Any additional props for the header
}

const Header: FC<HeaderProps> = () => {
  return (
    <header className="flex items-center justify-center py-4">
      <div className="max-w-4xl w-full px-4">
        <div className="flex justify-between items-center">
          {/* Your logo or title can go here */}
          <h1 className="text-xl font-bold">Logo</h1>
             {/* Search Input */}

        <div className="flex-1 ml-4">
             <LocationButton></LocationButton>
        </div>
          <div className="flex-1 ml-4">
            <SearchInput placeholder="Search..." />
          </div>

          {/* Other header elements can go here */}
        </div>
      </div>
    </header>
  );
};

interface SearchInputProps extends InputProps {
  placeholder?: string;
}

const SearchInput: FC<SearchInputProps> = ({ placeholder, ...rest }) => {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...rest}
    />
  );
};

export { Header };

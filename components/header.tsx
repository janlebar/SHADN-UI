import React, { FC } from "react";
import { Input, InputProps } from "@/components/ui/input";
import { LocationButton } from "./ui/components/location/locationbutton";
import { ChatButton } from "./ui/components/chat/chatbutton";
import ProfileMenu from "@/components/profilemenu";
// import { MailDisplay } from "./email/email"

interface HeaderProps {
  // Any additional props for the header
}

const Header: FC<HeaderProps> = () => {
  return (
    <header className="">
      <div className="py-4 flex items-center">
        <h1 className="text-xl font-bold mr-4 pl-4">Logo</h1>
        <div className="flex-1">
          <div className="flex justify-center items-center max-w-4xl w-full px-4 mx-auto">
            <div className="flex items-center">
              <div className="ml-4">
                <LocationButton />
              </div>
              <div className="ml-4">
                <SearchInput placeholder="Search..." />
              </div>
              <div className="ml-4">
                <ChatButton />
              </div>
            </div>
          </div>
        </div>
        <div className="mr-4 pr-4"><ProfileMenu /></div>
      </div>
    </header>
  );
};

export default Header;


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

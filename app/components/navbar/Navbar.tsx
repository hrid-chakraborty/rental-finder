"use client";

import { User } from "@prisma/client";
import ContainerComponent from "../ContainerComponent";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

interface NavbarProps {
  currentUser?: User | null;
}

const Navbar: React.FC<NavbarProps> = ({currentUser}) => {
  console.log(currentUser)
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b">
        <ContainerComponent>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </ContainerComponent>
      </div>
    </div>
  );
};

export default Navbar;

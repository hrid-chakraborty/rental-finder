"use client";

import { AiOutlineMenu } from "react-icons/ai";
import { useState, useCallback } from "react";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "../../hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import useRentModal from "@/app/hooks/useRentModal";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/app/types";

interface UserMenuProps {
  currentUser?: SafeUser | null
}

const UserMenu:React.FC<UserMenuProps> = ({currentUser}) => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [loginModal, rentModal, currentUser]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-md hover:bg-neutral-100 transition cursor-pointer"
        >
          Rent your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border border-neutral-200 flex flex-row items-center gap-3 rounded-md cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
              <MenuItem onClick={()=>router.push('/trips')} label="My Trips" />
              <MenuItem onClick={()=>router.push('/favorites')} label="My Favorites" />
              <MenuItem onClick={()=>router.push('/reservations')} label="My Reservations" />
              <MenuItem onClick={()=>router.push('/properties')} label="My Properties" />
              <MenuItem onClick={rentModal.onOpen} label="Rent My Home" />
              <hr />
              <MenuItem onClick={signOut} label="Log Out" />
              </>
            ) : (
              <>
              <MenuItem onClick={loginModal.onOpen} label="Login" />
              <MenuItem onClick={registerModal.onOpen} label="Sign Up" />
              </>
            )}
            
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;

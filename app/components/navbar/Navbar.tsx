"use client"

import ContainerComponent from "../ContainerComponent";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="py-4 border-b">
                <ContainerComponent>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <Logo />
                        <Search />
                    </div>
                </ContainerComponent>
            </div>
        </div>
    )
}

export default Navbar;
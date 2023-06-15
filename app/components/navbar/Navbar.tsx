"use client"

import ContainerComponent from "../ContainerComponent";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="py-4 border-b">
                <ContainerComponent>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <Logo />
                    </div>
                </ContainerComponent>
            </div>
        </div>
    )
}

export default Navbar;
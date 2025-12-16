'use client'

import { useState } from "react"
import Menu from "./menu"
import { Menu1 } from "../footer/menu"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div>
            {/* Header */}
            <div className=" flex items-center justify-between lg:py-4 py-4 px-4 lg:px-8 z-10 ">
                <div className="flex items-center gap-1 ">
                    <a href="/fr/" className="flex items-center gap-1"><img src="/assets/logo-medev-drk.svg" alt="" className="w-6" />
                        <span className="text-sm lg:text-base font-nunito">Medev Group Inc.</span></a>
                </div>
                <div className="text-xs lg:text-sm font-nunito hidden lg:flex">
                    ©2025
                </div>
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="cursor-pointer"
                >
                    <span className="text-sm lg:text-base font-nunito">[ Menu ]</span>
                </button>
            </div>

            {/* Menu déroulant */}
            <div
                className={`fixed top-0 left-0 z-50 w-full flex flex-col gap-20 bg-white justify-between overflow-hidden min-h-screen transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                <div className="container-fixed">
                    <div className="flex items-center justify-between lg:py-4 py-4 px-4 lg:px-8 z-10">
                        <div className="flex items-center gap-1 ">
                            <a href="/fr/" className="flex items-center gap-1"><img src="/assets/logo-medev-drk.svg" alt="" className="w-6" />
                                <span className="text-sm lg:text-base font-nunito">Medev Group Inc.</span></a>
                        </div>
                        <div className="text-xs lg:text-sm font-nunito hidden lg:flex">
                            ©2025
                        </div>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center justify-center cursor-pointer"
                        >
                            <span className="text-sm lg:text-base font-nunito">[ x ]</span>
                        </button>
                    </div>
                </div>
                <div className="container-fixed flex items-center justify-center">
                    <Menu />
                </div>
                <div className="container-fixed">
                    <div className="flex flex-col lg:flex-row items-center justify-between lg:py-9 py-4 px-4 lg:px-8 z-10 bg-neutral-100">
                        <span className="text-sm lg:text-base text-center">
                            © 2025 Medev Group Inc. Tous droits réservés.
                        </span>
                        <div className="">
                            <Menu1 />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
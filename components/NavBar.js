"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import {usePathname} from "next/navigation";
import Link from "next/link";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
    ];

    return (
        <nav className="bg-white border-gray-200  relative z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image
                        src="/logo.png"
                        alt="Raheim Bailey"
                        width={50}
                        height={50}
                    />
                </Link>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center text-black p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-700"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                >
                    {isOpen ? (
                        <XMarkIcon className="w-6 h-6" />
                    ) : (
                        <Bars3Icon className="w-6 h-6" />
                    )}
                </button>
                <div
                    className={`${isOpen ? "block" : "hidden"} 
            absolute top-full left-0 w-full bg-white md:static md:block md:w-auto`}
                    id="navbar-default"
                >
                    <ul
                        className="font-medium flex flex-col p-4 md:p-0 mt-0 border-t border-gray-100
              md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0
              md:bg-transparent dark:border-gray-700"
                    >
                        {links.map(link => (
                            <Link
                                href={link.href}
                                className={
                                    pathname === link.href
                                        ? "text-white bg-blue-700 md:text-blue-700 md:bg-transparent px-3 py-2 rounded-sm"
                                        : "text-gray-900 hover:text-blue-700 md:hover:bg-transparent px-3 py-2 rounded-sm"
                                }
                            >
                                {link.name}
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

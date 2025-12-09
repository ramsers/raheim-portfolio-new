"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Projects",
      href: "/projects",
      children: [
        {
          name: "Reforme Pilates",
          href: "/projects/reforme",
        },
        { name: "Task Feature", href: "/projects/billdr/task-feature" },
        // {
        //   name: "Construction Reports",
        //   href: "/projects/billdr/construction-report",
        // },
      ],
    },
  ];

  return (
    <nav className="bg-white border-gray-200 relative z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-10 py-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={() => setIsOpen(false)}
        >
          <Image src="/logo.png" alt="Raheim Bailey" width={50} height={50} />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center text-black p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
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
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white md:static md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-0 border-t border-gray-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
            {links.map((link) => (
              <li key={link.name} className="relative group">
                <Link
                  href={link.name === "Projects" ? "" : link.href}
                  className="block text-gray-900 hover:text-blue-700 px-3 py-2 rounded-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>

                {link.children && (
                  <ul className="mt-2 space-y-1 md:mt-0 md:space-y-0 md:absolute md:-left-10 md:top-full md:w-56 md:bg-white md:border md:rounded-lg md:hidden md:group-hover:block z-10">
                    {link.children.map((child) => (
                      <li key={child.name}>
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-6 md:px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-700"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

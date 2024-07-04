"use client";
import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa6";

const Navbar = ({ items }: { items: { url: string; name: string }[] }) => {
  return (
    <>
      <nav className="bg-transparent fixed w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-8">
          <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white hover:text-gray-300 rounded-lg md:hidden ms-auto">
            <span className="sr-only">Open main menu</span>
            <FaBars />
          </button>
          <NavList items={items} />
        </div>
      </nav>
    </>
  );
};

const NavList = ({ items }: { items: { url: string; name: string }[] }) => {
  return (
    <>
      <div className="hidden w-full mx-auto md:block md:w-auto" id="navbar-dropdown">
        <ul className="flex flex-col font-medium text-lg uppercase p-4 md:p-0 mt-4 rounded-lg md:space-x-24 rtl:space-x-reverse md:flex-row md:mt-0">
          {items.map((i) => (
            <li key={i.name}>
              <Link href={i.url} className="block py-2 px-3 text-white rounded bg-transparent md:p-0" aria-current="page">
                {i.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export { Navbar };

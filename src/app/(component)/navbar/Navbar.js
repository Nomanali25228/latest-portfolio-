"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main Navbar Container */}
      <nav className="bg-[#191919] px-4 py-3 lg:mx-64 rounded-lg">
        <div className="flex justify-between items-center">
          {/* Navbar Links (Desktop & Tablet) */}
          <ul className="hidden lg:flex items-center w-[40%] justify-between">
            <li className="border border-white px-4 py-2 rounded-lg bg-white text-black">
              <Link href="/">
                <p className="font-semibold">Home</p>
              </Link>
            </li>
              <Link href="/Portfolio">
            <li className="hover:border cursor-pointer hover:border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black">
                <p className="font-semibold">Portfolio</p>
            </li>
              </Link>
              <Link href="/Contact">
            <li className="hover:border cursor-pointer hover:border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black">
                <p className="font-semibold">Contact</p>
            </li>
              </Link>
          </ul>

          {/* Download Button (Always Visible) */}
          <button className="bg-[#B8FF32] text-black px-4 py-2 font-semibold rounded hover:bg-[#b7ff32e0]">
            Download Resume
          </button>

          {/* Hamburger Menu (Mobile Only) */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="lg:hidden mt-4 space-y-2">
            <li className="border border-white px-4 py-2 rounded-lg bg-white text-black">
              <Link href="/">
                <p className="font-semibold">Home</p>
              </Link>
            </li>
            <li className="hover:border cursor-pointer hover:border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black">
              <Link href="/Portfolio">
                <p className="font-semibold">Portfolio</p>
              </Link>
            </li>
            <li className="hover:border cursor-pointer hover:border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black">
              <Link href="/Contact">
                <p className="font-semibold">Contact</p>
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;

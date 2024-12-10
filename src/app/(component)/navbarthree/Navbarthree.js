"use client"
import Link from "next/link";
import React, { useState } from "react";

const Navbarthree = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main Navbar Container */}
      <nav className="bg-[#555555] px-4 py-3 mt-5 mb-5 lg:mx-64 rounded-lg">
        <div className="flex justify-between items-center">
          {/* Navbar Links (Desktop & Tablet) */}
          <div className="hidden lg:flex items-center w-[40%] justify-between">
          <Link href="/">
          <div className="hover:border cursor-pointer hover:border-white px-4 py-2 rounded-lg hover:bg-white  text-white hover:text-black">
          <h2 className="">Home</h2>
            </div>
          </Link>
          <Link href="/Portfolio">
          <div className="hover:border cursor-pointer hover:border-white px-4 py-2 rounded-lg hover:bg-white  text-white hover:text-black">
              <h2 className="">Portfolio</h2>
            </div>
          </Link>
          <Link href="/Contact">
          <div className="border border-white px-4 py-2 rounded-lg bg-white text-black">
          <h2 className="">Contact</h2>
            </div>
          </Link>
          </div>

          {/* Download Button (Always Visible) */}
          <button className="bg-[#B8FF32] text-black px-4 py-2 font-semibold rounded hover:bg-[#b7ff32e0]">
            Download Resume
          </button>

          {/* Hamburger Menu (Mobile Only) */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
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
         <div className="lg:hidden mt-4 space-y-2">
         <div className="hover:border cursor-pointer hover:border-white px-4 py-2 rounded-lg hover:bg-white  text-white hover:text-black">
         <h2 className="">Home</h2>
         </div>
         <div className="hover:border cursor-pointer hover:border-white px-4 py-2 rounded-lg hover:bg-white  text-white hover:text-black">
           <h2 className="">Portfolio</h2>
         </div>
         <div className="border border-white px-4 py-2 rounded-lg bg-white text-black">
           <h2 className="">Contact</h2>
         </div>
       </div>
        )}
      </nav>
    </>
  );
};

export default Navbarthree;
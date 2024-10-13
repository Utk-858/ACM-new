"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md" data-aos="fade-down">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl text-lg mx-auto font-medium flex justify-between items-center py-1.5 relative">
          <div className="flex items-center" data-aos="fade-right">
            <Image
              src="data:image/jpeg;base64,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"
              alt="Logo"
              width={220}
              height={40}
            />
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-8 text-gray-700 font-semibold ml-auto" data-aos="fade-left">
              <NavItem href="/" text="Home" />
              <span className="text-gray-400">|</span>
          {/* About */}
              <NavItem href="/about" text="About" />
              <span className="text-gray-400">|</span>
          {/* About */}
              <NavItem href="/gallery" text="Gallery" />
              <span className="text-gray-400">|</span>
          {/* About */}
              <NavItem href="/events" text="Events" />
              <span className="text-gray-400">|</span>
          {/* About */}
              <NavItem href="/blog" text="Blogs" />
              <span className="text-gray-400">|</span>
          {/* About */}
              <NavItem href="/membership" text="Membership" />
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavItem href="/" text="Home" />
            <MobileNavItem href="/about" text="About" />
            <MobileNavItem href="/gallery" text="Gallery" />
            <MobileNavItem href="/events" text="Events" />
            <MobileNavItem href="/blog" text="Blogs" />
            <MobileNavItem href="/membership" text="Membership" />
          </ul>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ href, text }) => (
  <li>
    <Link href={href}>
      <span className="transition-transform duration-300 ease-in-out transform hover:scale-125 inline-block">
        {text}
      </span>
    </Link>
  </li>
);

const MobileNavItem = ({ href, text }) => (
  <li>
    <Link href={href}>
      <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700">
        {text}
      </span>
    </Link>
  </li>
);

export default Navbar;
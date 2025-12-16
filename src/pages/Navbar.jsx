import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutGrid,
  X,
  House,
  UserRound,
  BookText,
  BriefcaseBusiness,
  Image,
  Send,
} from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      {/* ===== Desktop Navbar ===== */}
      <div className="border-b sticky top-0 bg-white z-50 hidden md:block">
        <div className="max-w-[85%] mx-auto flex justify-between py-5">
          <img
            src="https://placehold.co/50x50"
            alt="logo"
            className="rounded-full w-20"
          />

          <ul className="flex gap-5 items-center text-[#313131] text-lg font-semibold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* ===== Mobile Navbar ===== */}
      <div className="md:hidden">
        {/* Bottom Bar */}
        {!active && (
          <div className="w-full flex items-center justify-between fixed bottom-0 px-4 py-2 bg-white z-50 border-t">
            <img
              src="https://placehold.co/50x50"
              alt="logo"
              className="rounded-full w-10"
            />

            <button onClick={() => setActive(true)}>
              <LayoutGrid />
            </button>
          </div>
        )}

        {/* Menu */}
        {active && (
          <div className="fixed bottom-0 w-full bg-white z-50 px-4 pb-4">
            <ul className="grid grid-cols-3 text-[#313131] text-xs font-medium">
              <li className="px-5 py-4 text-center">
                <Link
                  to="/"
                  className="flex flex-col justify-center items-center gap-1"
                >
                  <House className="size-4"/>
                  Home
                </Link>
              </li>
              <li className="px-5 py-4 text-center">
                <Link
                  to="/about"
                  className="flex flex-col justify-center items-center gap-1"
                >
                  <UserRound className="size-4" />
                  About
                </Link>
              </li>
              <li className="px-5 py-4 text-center">
                <Link
                  to="/skills"
                  className="flex flex-col justify-center items-center gap-1"
                >
                  <BookText className="size-4" />
                  Skills
                </Link>
              </li>
              <li className="px-5 py-4 text-center">
                <Link
                  to="/services"
                  className="flex flex-col justify-center items-center gap-1"
                >
                  <BriefcaseBusiness className="size-4" />
                  Services
                </Link>
              </li>
              <li className="px-5 py-4 text-center">
                <Link
                  to="/portfolio"
                  className="flex flex-col justify-center items-center gap-1"
                >
                  <Image className="size-4" />
                  Portfolio
                </Link>
              </li>
              <li className="px-5 py-4 text-center">
                <Link
                  to="/contact"
                  className="flex flex-col justify-center items-center gap-1"
                >
                  <Send className="size-4" />
                  Contact
                </Link>
              </li>
            </ul>

            <div className="flex justify-end">
              <button onClick={() => setActive(false)}>
                <X />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

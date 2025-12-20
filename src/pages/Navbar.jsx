import React, { useState } from "react";
import { Link } from "react-scroll";
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

  const linkProps = {
    smooth: true,
    duration: 500,
    offset: active ? -10 : -80,
    spy: true,
  };

  return (
    <>
      {/* ===== Desktop Navbar ===== */}
      <div className="border-b sticky top-0 bg-white z-50 hidden md:block">
        <div className="max-w-[85%] mx-auto flex justify-between py-2">
          <div className="flex flex-row items-center gap-3">
            <img
              src="https://lh3.googleusercontent.com/d/1noufSozy1YfBnWN4LctsIg_DOCq1Xk5P"
              alt="logo"
              className="w-16 h-16 rounded-full"
            />

            <span className="items-center text-[#313131] text-xl font-bold">
              Md Rashid Ali
            </span>
          </div>

          <ul className="flex cursor-pointer gap-6 items-center text-[#313131] text-lg font-semibold">
            <li>
              <Link to="home" {...linkProps}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" {...linkProps}>
                About
              </Link>
            </li>
            <li>
              <Link to="skills" {...linkProps}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="services" {...linkProps}>
                Services
              </Link>
            </li>
            <li>
              <Link to="projects" {...linkProps}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" {...linkProps}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* ===== Mobile Navbar ===== */}
      <div className="md:hidden">
        {/* Bottom Bar */}
        {!active && (
          <div className="fixed bottom-0 w-full flex justify-between items-center px-4 py-2 bg-white z-50 border-t">
            <div className="flex flex-row gap-2 items-center">
              <img
                src="https://lh3.googleusercontent.com/d/1noufSozy1YfBnWN4LctsIg_DOCq1Xk5P"
                alt="logo"
                className="rounded-full w-10"
              />
              <span className="text-[#313131] text-lg font-bold">
                Md Rashid Ali
              </span>
            </div>
            <button onClick={() => setActive(true)}>
              <LayoutGrid />
            </button>
          </div>
        )}

        {/* Menu */}
        {active && (
          <div className="fixed bottom-0 w-full bg-white z-50 px-4 pb-4">
            <ul className="grid grid-cols-3 text-[#313131] text-xs font-medium">
              <li className="py-4">
                <Link
                  to="home"
                  {...linkProps}
                  onClick={() => setActive(false)}
                  className="flex flex-col items-center gap-1"
                >
                  <House className="size-4" /> Home
                </Link>
              </li>

              <li className="py-4">
                <Link
                  to="about"
                  {...linkProps}
                  onClick={() => setActive(false)}
                  className="flex flex-col items-center gap-1"
                >
                  <UserRound className="size-4" /> About
                </Link>
              </li>

              <li className="py-4">
                <Link
                  to="skills"
                  {...linkProps}
                  onClick={() => setActive(false)}
                  className="flex flex-col items-center gap-1"
                >
                  <BookText className="size-4" /> Skills
                </Link>
              </li>

              <li className="py-4">
                <Link
                  to="services"
                  {...linkProps}
                  onClick={() => setActive(false)}
                  className="flex flex-col items-center gap-1"
                >
                  <BriefcaseBusiness className="size-4" /> Services
                </Link>
              </li>

              <li className="py-4">
                <Link
                  to="projects"
                  {...linkProps}
                  onClick={() => setActive(false)}
                  className="flex flex-col items-center gap-1"
                >
                  <Image className="size-4" /> Projects
                </Link>
              </li>

              <li className="py-4">
                <Link
                  to="contact"
                  {...linkProps}
                  onClick={() => setActive(false)}
                  className="flex flex-col items-center gap-1"
                >
                  <Send className="size-4" /> Contact
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

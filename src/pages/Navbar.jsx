import React from "react";
import { Link } from "react-router-dom";
import { LayoutGrid } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="border-b sticky top-0">
      <div className="max-w-[85%] mx-auto flex flex-row justify-between py-5">
        <div>
          <img src="https://placehold.co/50x50" alt="" className="rounded-full w-20"/>
        </div>
          <ul className="flex flex-row gap-5 items-center text-[#313131] text-lg font-semibold">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link>About</Link></li>
            <li><Link>Skills</Link></li>
            <li><Link>Services</Link></li>
            <li><Link>Portfolio</Link></li>
            <li><Link>Contact</Link></li>
          </ul>
      </div>
    </div>
  );
};

export default Navbar;

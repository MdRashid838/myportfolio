import React from "react";
import { Linkedin , Github , Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full mb-6 md:mb-0 py-14 flex flex-col items-center justify-center gap-10 text-center bg-gray-50">
      
      {/* Name */}
      <h1 className="text-3xl font-bold text-[#313131]">
        Md Rashid Ali
      </h1>

      {/* Nav Links */}
      <div className="flex gap-12 text-gray-600 text-[16px] font-medium">
        <a href="about" className="hover:text-[#313131]">
          About
        </a>
        <a href="projects" className="hover:text-[#313131]">
          Projects
        </a>
        <a href="services" className="hover:text-[#313131]">
          Services
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6">
        <a
          href="#"
          className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#313131] text-white"
        >
          <Linkedin className="size-4"/>
        </a>
        <a
          href="#"
          className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#313131] text-white"
        >
          <Github className="size-4"/>
        </a>
        <a
          href="#"
          className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#313131] text-white"
        >
          <Instagram className="size-4"/>
        </a>
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-500 mt-8">
        © Crypticalcoder. All rights reserved
      </p>

    </footer>
  );
};

export default Footer;

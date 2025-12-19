import React from "react";
import { BadgeCheck } from "lucide-react";

const frontend = [
  {
    name: "HTML",
    label: "Basic",
  },
  {
    name: "HTML",
    label: "Basic",
  },
  {
    name: "HTML",
    label: "Basic",
  },
  {
    name: "HTML",
    label: "Basic",
  },
  {
    name: "HTML",
    label: "Basic",
  },
  {
    name: "HTML",
    label: "Basic",
  },
];

const backend = [
  {
    name: "Node.js",
    label: "Basic",
  },
  {
    name: "Node.js",
    label: "Basic",
  },
  {
    name: "Node.js",
    label: "Basic",
  },
  {
    name: "Node.js",
    label: "Basic",
  },
  {
    name: "Node.js",
    label: "Basic",
  },
  {
    name: "Node.js",
    label: "Basic",
  },
];

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen">
      <div className="flex flex-col justify-center items-center py-8 gap-1">
        <h1 className="text-3xl font-semibold text-[#313131]">Skills</h1>
        <p className="text-sm font-medium text-gray-700">My technical level</p>
      </div>
      <div className="flex md:flex-row flex-col justify-center gap-10 md:p-0 p-5">
        <div className="flex flex-col gap-4 md:w-96 p-6 w-full border rounded-xl"> 
          <p className="text-lg text-[#313131] text-center font-semibold">Front-end Developer</p>
          <ul className="grid grid-cols-2 gap-5 justify-center">
            {frontend.map((fskill, index) => (
              <li key={index} className="flex flex-row gap-3 justify-center">
                <BadgeCheck className="w-5 fill-[#313131] text-white"/>
                <span>
                  <p className="text-lg font-semibold text-[#313131]"> {fskill.name} </p>
                  <p className="text-[14px] text-[#313131]"> {fskill.label} </p>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 md:w-96 p-6 w-full border rounded-xl"> 
          <p className="text-lg text-[#313131] text-center font-semibold">Back-end Developer</p>
          <ul className="grid grid-cols-2 gap-5 justify-center">
            {backend.map((fskill, index) => (
              <li key={index} className="flex flex-row gap-3 justify-center">
                <BadgeCheck className="w-5 fill-[#313131] text-white"/>
                <span>
                  <p className="text-lg text-[#313131] font-semibold"> {fskill.name} </p>
                  <p className="text-[14px] text-[#313131]"> {fskill.label} </p>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;

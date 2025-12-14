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
    <div className="min-h-screen">
      <div className="flex flex-col justify-center items-center py-8 gap-1">
        <h1 className="text-3xl font-semibold text-[#313131]">Skills</h1>
        <p className="text-sm font-medium text-gray-700">My technical level</p>
      </div>
      <div className="flex flex-row justify-center gap-10">
        <div className="flex flex-col gap-6 w-96"> 
          <p className="text-lg text-[#313131] text-center">Front-end Developer</p>
          <ul className="grid grid-cols-2 p-10 gap-5 justify-center border rounded-xl">
            {frontend.map((fskill, index) => (
              <li key={index} className="flex flex-row gap-3 justify-center">
                <BadgeCheck className="w-4 text-[#313131]"/>
                <span>
                  <p className="text-lg text-[#313131]"> {fskill.name} </p>
                  <p className="text-[14px] text-[#313131]"> {fskill.label} </p>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-6 w-96"> 
          <p className="text-lg text-[#313131] text-center">Back-end Developer</p>
          <ul className="grid grid-cols-2 p-10 gap-5 justify-center border rounded-xl">
            {backend.map((fskill, index) => (
              <li key={index} className="flex flex-row gap-3 justify-center">
                <BadgeCheck className="w-4 text-[#313131]"/>
                <span>
                  <p className="text-lg text-[#313131]"> {fskill.name} </p>
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

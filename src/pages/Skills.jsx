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
    <div>
      <div className="flex flex-col justify-center items-center py-8 gap-1">
        <h1 className="text-3xl font-semibold text-[#313131]">About Me</h1>
        <p className="text-sm font-medium text-gray-700">My Introduction</p>
      </div>
      <div className="flex flex-row justify-center gap-10">
        <div className="flex flex-col gap-6"> 
          <p className="text-lg text-[#313131]">Front-end Developer</p>
          <ul className="grid grid-cols-2 p-10 border">
            {frontend.map((fskill, index) => (
              <li key={index} className="">
                <BadgeCheck />
                <span>
                  <p> {fskill.name} </p>
                  <p> {fskill.label} </p>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>Back-end Developer</p>
          <ul>
            {backend.map((fskill, index) => (
              <li key={index}>
                <BadgeCheck />
                <span>
                  <p> {fskill.name} </p>
                  <p> {fskill.label} </p>
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

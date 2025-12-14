import React, { useState } from "react";
import { GraduationCap, BriefcaseBusiness } from "lucide-react";

export default function Qualification() {
  const [active, setActive] = useState("education");

  const tabs = [
    { id: "education", name: "Education", icon: <GraduationCap /> },
    { id: "exprience", name: "Exprience", icon: <BriefcaseBusiness /> },
  ];
  const education = [
    {
      title: "Product Designer",
      company: "Microsoft - Spain",
      date: "2021 - Present",
    },
    {
      title: "Web Designer",
      company: "Figma - Spain",
      date: "2018 - 2020",
    },
    {
      title: "UX Designer",
      company: "Apple Inc - Spain",
      date: "2020 - 2021",
    },
    {
      title: "UX Designer",
      company: "Apple Inc - Spain",
      date: "2020 - 2021",
    },
  ];
  const exprience = [
    {
      title: "Product Designer",
      company: "Microsoft - Spain",
      date: "2021 - Present",
    },
    {
      title: "Web Designer",
      company: "Figma - Spain",
      date: "2018 - 2020",
    },
    {
      title: "UX Designer",
      company: "Apple Inc - Spain",
      date: "2020 - 2021",
    },
  ];

  return (
    <section className=" flex justify-center">
      <div className="max-w-3xl w-full text-center">
        {/* Tabs */}
        <div className="flex justify-center gap-10 mt-10 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              // 2. Click hone pe active state change karein
              onClick={() => setActive(tab.id)}
              className={`flex items-center gap-2 font-medium px-4 py-2 rounded transition-colors duration-300 ${
                // Active hone pe alag color, inactive hone pe gray
                active === tab.id
                  ? "text-gray-600 bg-gray-100 border-b-2 border-gray-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.icon} {tab.name}
            </button>
          ))}
        </div>

        {/* Timeline */}
        {active === "education" && (
          <div className="relative mt-12 grid grid-cols-2 gap-10">
            {/* Vertical line in center */}
            <span className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-300 transform -translate-x-1/2"></span>

            {education.map((item, idx) => {
              // LOGIC:
              // idx 0 -> Left (Even)
              // idx 1 -> Right (Odd)
              // idx 2 -> Left (Even)
              const isLeft = idx % 2 === 0;
              console.log(idx, isLeft, "s");

              return (
                <div
                  key={idx}
                  // Style tag use kar rahe hain taaki Row dynamic ho sake (Row 1, Row 2, Row 3...)
                  style={{ gridRowStart: idx + 1 }}
                  className={`relative flex flex-col gap-1 ${
                    isLeft
                      ? "col-start-1 text-right pr-4" // Left side
                      : "col-start-2 text-left pl-4" // Right side
                  }`}
                >
                  {/* Timeline Dot */}
                  <span
                    className={`w-4 h-4 bg-gray-400 rounded-full absolute top-2 ${
                      isLeft ? "-right-[26px]" : "-left-[26px]"
                    }`}
                  ></span>

                  <h3 className="font-semibold text-gray-600 text-lg">{item.title}</h3>
                  <p className="text-gray-500">{item.company}</p>

                  <div
                    className={`flex items-center text-gray-500 gap-1 mt-2 ${
                      isLeft ? "justify-end" : "justify-start"
                    }`}
                  >
                    {/* <MdDateRange /> */}
                    <span>{item.date}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* exprience */}
        {active === "exprience" && (
          <div className="relative mt-12 grid grid-cols-2 gap-10">
            {/* Vertical line in center */}
            <span className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-300 transform -translate-x-1/2"></span>

            {exprience.map((item, idx) => {
              // LOGIC:
              // idx 0 -> Left (Even)
              // idx 1 -> Right (Odd)
              // idx 2 -> Left (Even)
              const isLeft = idx % 2 === 0;
              console.log(idx, isLeft, "s");

              return (
                <div
                  key={idx}
                  // Style tag use kar rahe hain taaki Row dynamic ho sake (Row 1, Row 2, Row 3...)
                  style={{ gridRowStart: idx + 1 }}
                  className={`relative flex flex-col gap-1 ${
                    isLeft
                      ? "col-start-1 text-right pr-4" // Left side
                      : "col-start-2 text-left pl-4" // Right side
                  }`}
                >
                  {/* Timeline Dot */}
                  <span
                    className={`w-4 h-4 bg-gray-400 rounded-full absolute top-2 ${
                      isLeft ? "-right-[26px]" : "-left-[26px]"
                    }`}
                  ></span>

                  <h3 className="font-semibold text-gray-600 text-lg">{item.title}</h3>
                  <p className="text-gray-500">{item.company}</p>

                  <div
                    className={`flex items-center text-gray-500 gap-1 mt-2 ${
                      isLeft ? "justify-end" : "justify-start"
                    }`}
                  >
                    {/* <MdDateRange /> */}
                    <span>{item.date}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

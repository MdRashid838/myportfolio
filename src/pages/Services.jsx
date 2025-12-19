import React, { useState } from "react";
import {
  ChevronsLeftRight,
  SquarePen,
  PanelsLeftBottom,
  ArrowRight,
  X,
  BadgeCheck,
  GraduationCap,
  BriefcaseBusiness
} from "lucide-react";
import Qualification from "./Qualification";

const edudata = [
  {
    icon:<GraduationCap/>,
    title:'Education',
    education:[
      {
        degree: '10Th',
        intitution: 'M M Memorial Urdu High School , Gopalganj'
      }
    ]
  },
  {
    icon:<GraduationCap/>,
    title:'Education',
    education:[
      {
        degree: '10Th',
        intitution: 'M M Memorial Urdu High School , Gopalganj'
      }
    ]
  },
  {
    icon:<GraduationCap/>,
    title:'Education',
    education:[
      {
        degree: '10Th',
        intitution: 'M M Memorial Urdu High School , Gopalganj'
      }
    ]
  }
]

const data = [
  {
    icon: <PanelsLeftBottom />,
    name: "Web Designer",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, repudiandae? Ullam numquam facere voluptates at distinctio, molestiae nisi ab nostrum rem fuga odit vitae nisi, nesciunt explicabo eligendi? Molestiae aliquid voluptates eaque possimus debitis, earum at ad sit consequatur eos exercitationem et maxime corporis quas dolor quam quis deleniti, nobis temporibus excepturi unde.",
    first:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officia.",
    second:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officia.",
    third:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officia.",
    four: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officia.",
    five: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officia.",
  },
  {
    icon: <ChevronsLeftRight />,
    name: "UI/UX Designer",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, repudiandae? Ullam numquam facere voluptates at distinctio, molestiae nisi ab nostrum rem fuga odit vitae nisi, nesciunt explicabo eligendi? Molestiae aliquid voluptates eaque possimus debitis, earum at ad sit consequatur eos exercitationem et maxime corporis quas dolor quam quis deleniti, nobis temporibus excepturi unde.",
    first:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officia.",
    second:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officia.",
    third:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officia.",
    four: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officia.",
    five: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officia.",
  },
  // {
  //   icon: <SquarePen/>,
  //   name: "Web Designer",
  // },
];

// const details = [
//   {
//     name: "Web Designer",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, repudiandae? Ullam numquam facere voluptates at distinctio, molestiae nisi ab nostrum rem fuga odit vitae nisi, nesciunt explicabo eligendi? Molestiae aliquid voluptates eaque possimus debitis, earum at ad sit consequatur eos exercitationem et maxime corporis quas dolor quam quis deleniti, nobis temporibus excepturi unde.",
//     first:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officia.",
//     second:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officia.",
//     third:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officia.",
//     four: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officia.",
//     five: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officia.",
//   },
//   {
//     name: "UI/UX",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, repudiandae? Ullam numquam facere voluptates at distinctio, molestiae nisi ab nostrum rem fuga odit est quasi ipsam amet a commodi maxime assumenda incidunt aspernatur quibusdam ex  debitis, earum at ad sit consequatur eos exercitationem et maxime corporis quas dolor quam quis deleniti, nobis temporibus excepturi unde.",
//     first:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officia.",
//     second:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officia.",
//     third:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officia.",
//     four: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officia.",
//     five: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officia.",
//   },
// ];

const Services = () => {
  const [active, setActive] = useState(null);

  const activeItem = data.find((d) => d.name === active);
  return (
    <div id="services">
      <div>
        <div className="flex flex-col justify-center items-center py-8 gap-1">
          <h1 className="text-3xl font-semibold text-[#313131]">Services</h1>
          <p className="text-sm font-medium text-gray-700">What i offer</p>
        </div>
        <div>
          <div className="flex flex-row justify-center place-items-center md:gap-20 gap-10 md:p-0 p-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col border rounded-xl drop-shadow-xl gap-4 md:w-60 w-40 md:h-64 h-56 ps-5 pe-24 pt-20"
              >
                <span className="text-lg">{item.icon}</span>
                <p className="text-xl font-medium text-[#313131]">
                  {item.name}
                </p>
                <button
                  className="flex flex-row gap-1 w-24 hover:text-gray-600 hover:border-b text-sm font-medium text-[#313131]"
                  onClick={() => setActive(item.name)}
                >
                  View More <ArrowRight className="w-4" />{" "}
                </button>
              </div>
            ))}

            {activeItem && (
              <div className="fixed inset-0 bg-gray-50/50 flex justify-center items-center z-50">
                <div className="flex flex-col w-[90%] md:max-w-[50%] min-h-[65%] bg-white md:h-auto h-92 gap-2 border rounded-xl md:p-5 p-3 overflow-y-auto hide-scrollbar">
                  <div className="flex justify-end">
                    <X onClick={() => setActive(null)} />
                  </div>
                  <div className="flex flex-col gap-2 md:px-5">
                    <div className="text-center mb-2">
                      <h1 className="text-2xl font-medium text-[#313131] mb-2">
                        {" "}
                        {activeItem.name}{" "}
                      </h1>
                      <p className="text-[16px] text-gray-700 font-normal">
                        {" "}
                        {activeItem.desc}{" "}
                      </p>
                    </div>
                    <ul className="flex flex-col gap-2">
                      <li className="flex flex-row gap-2 text-[#313131] text-[16px]">
                        {" "}
                        <BadgeCheck /> {activeItem.first}{" "}
                      </li>
                      <li className="flex flex-row gap-2 text-[#313131] text-[16px]">
                        {" "}
                        <BadgeCheck /> {activeItem.second}{" "}
                      </li>
                      <li className="flex flex-row gap-2 text-[#313131] text-[16px]">
                        {" "}
                        <BadgeCheck /> {activeItem.third}{" "}
                      </li>
                      <li className="flex flex-row gap-2 text-[#313131] text-[16px]">
                        {" "}
                        <BadgeCheck /> {activeItem.four}{" "}
                      </li>
                      <li className="flex flex-row gap-2 text-[#313131] text-[16px]">
                        {" "}
                        <BadgeCheck /> {activeItem.five}{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-center items-center py-8 gap-1">
          <h1 className="text-3xl font-semibold text-[#313131]">Qualification</h1>
          <p className="text-sm font-medium text-gray-700">My Personal journey</p>
        </div>
        <div>
          <Qualification/>
        </div>
      </div>
    </div>
  );
};

export default Services;

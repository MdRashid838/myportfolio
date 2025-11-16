import React, { useState } from "react";
import {
  ChevronsLeftRight,
  SquarePen,
  PanelsLeftBottom,
  ArrowRight,
  X,
} from "lucide-react";

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
    <div className="min-h-screen">
      <div className="flex flex-col justify-center items-center py-8 gap-1">
        <h1 className="text-3xl font-semibold text-[#313131]">Services</h1>
        <p className="text-sm font-medium text-gray-700">What i offer</p>
      </div>
      <div>
        <div className="flex flex-row justify-center gap-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col border gap-4 w-60 h-64 ps-5"
            >
              <span className="text-lg">{item.icon}</span>
              <p className="text-xl font-medium text-[#313131]">{item.name}</p>
              <button
                className="flex flex-row gap-1 border text-sm font-medium text-[#313131]"
                onClick={() => setActive(item.name)}
              >
                View More <ArrowRight className="w-4" />{" "}
              </button>
            </div>
          ))}

          {activeItem && (
            
            <div>
              <button onClick={() => setActive(null)} >
                <X  />
              </button>
              <div>
                <h1> {activeItem.name} </h1>
                <p> {activeItem.desc} </p>
              </div>
              <ul>
                <li> {activeItem.first} </li>
                <li> {activeItem.second} </li>
                <li> {activeItem.third} </li>
                <li> {activeItem.four} </li>
                <li> {activeItem.five} </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;

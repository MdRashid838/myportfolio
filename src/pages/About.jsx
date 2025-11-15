import React from "react";
import { Briefcase, FileText, Award } from "lucide-react";

const About = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center py-8 gap-1">
          <h1 className="text-3xl font-semibold text-[#313131]">About Me</h1>
          <p className="text-sm font-medium text-gray-700">My Introduction</p>
        </div>
        <div className="flex flex-row">
          <div className="flex justify-center items-center w-1/2 p-10">
            <img
              src="https://placehold.co/150x150"
              alt=""
              className="w-92 rounded-3xl drop-shadow-xl"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-8 py-10 ps-10 pe-14 ">
            <div className="flex flex-row gap-10 p-2">
              <div className="flex flex-col justify-center items-center border broder-[#313131] py-3 rounded-xl shadow-md w-1/2 text-[#313131] gap-0.5">
                <Award />
                <p className="text-lg text-[#313131] font-medium">Exprience</p>
                <span>6 month</span>
              </div>
              <div className="flex flex-col justify-center items-center border broder-[#313131] py-3 rounded-xl shadow-md w-1/2 text-[#313131] gap-0.5">
                <Briefcase />
                <p className="text-lg text-[#313131] font-medium">Completed</p>
                <span>Projects</span>
              </div>
            </div>
            <p className=" text-[17px] text-[#313131]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro ab
              dicta hic ipsam temporibus laboriosam quo iste minima, molestiae
              odit rerum autem vel molestias! Cum maiores commodi dicta
              veritatis reiciendis labore dignissimos distinctio voluptatibus
              asperiores. Debitis nobis voluptatum nam eaque earum ex maxime
              distinctio quaerat nisi non? Odio, accusamus molestiae.
            </p>
            <button className="w-44 flex flex-row gap-1 border px-4 py-4 bg-[#313131] text-white text-lg font-medium rounded-xl">
              Download CV <FileText />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

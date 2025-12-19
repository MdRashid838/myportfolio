import React from "react";
import { Briefcase, FileText, Award } from "lucide-react";

const About = () => {
  return (
    <div id="about">
      <div className="flex flex-col justify-center items-center py-4 md:py-8 gap-1">
        <h1 className="text-3xl font-semibold text-[#313131]">About Me</h1>
        <p className="text-sm font-medium text-gray-700">My Introduction</p>
      </div>
      <div>
        <div className="flex md:flex-row flex-col">
          <div className="flex justify-center items-center md:w-1/2 w-full p-10">
            <img
              src="https://placehold.co/150x150"
              alt=""
              className="w-56 md:w-92 rounded-3xl drop-shadow-xl"
            />
          </div>
          <div className="md:w-1/2 w-full flex flex-col gap-4 md:gap-8 md:py-10 md:ps-10 md:pe-14 p-4">
            <div className="flex flex-row justify-center gap-6 md:gap-10 p-2">
              <div className="flex flex-col justify-center items-center border broder-[#313131] py-3 rounded-xl shadow-md w-1/2 text-[#313131] gap-0.5">
                <Award className="size-5" />
                <p className="text-sm md:text-lg text-[#313131] font-medium">
                  Exprience
                </p>
                <span className="text-xs md:text-sm">6 month</span>
              </div>
              <div className="flex flex-col justify-center items-center border broder-[#313131] py-3 rounded-xl shadow-md w-1/2 text-[#313131] gap-0.5">
                <Briefcase className="size-5" />
                <p className="text-sm md:text-lg text-[#313131] font-medium">
                  Completed
                </p>
                <span className="text-xs md:text-sm">Projects</span>
              </div>
            </div>
            <p className="text-sm text-center md:text-start md:text-[17px] text-[#313131]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro ab
              dicta hic ipsam temporibus laboriosam quo iste minima, molestiae
              odit rerum autem vel molestias! Cum maiores commodi dicta
              veritatis reiciendis labore dignissimos distinctio voluptatibus
              asperiores. Debitis nobis voluptatum nam eaque earum ex maxime
              distinctio quaerat nisi non? Odio, accusamus molestiae.
            </p>
            <div className="flex md:justify-start justify-center">
              <button className="w-36 md:w-44 flex items-center flex-row gap-1 border p-3 md:p-4 bg-[#313131] text-white text-sm md:text-lg font-medium rounded-xl">
                Download CV <FileText className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

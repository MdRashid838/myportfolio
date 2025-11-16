import React from "react";
import { Instagram, Globe, Github, Send, ArrowDown, Mouse } from "lucide-react";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";

const Home = () => {
  return (
    <div className="max-w-[80%] max-h-screen mx-auto">
      <div>
        <div className="flex flex-row gap-14 items-center justify-center py-10 px-20">
          <div className="flex flex-col gap-8 px-10 text-[#313131]">
            <Instagram />
            <Globe />
            <Github />
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl text-[#313131] font-bold">
                Md Rashid Ali
              </h1>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#313131]">
                  Full Stack Developer
                </h3>
                <p className="text-sm text-gray-600">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis, dolorum?
                </p>
              </div>
            </div>
            <button className="flex flex-row gap-1 text-lg text-start hover:bg-[#313131] bg-[#3B3B3B] text-white w-36 px-5 py-3 rounded-lg">
              Say Hello
              <Send className="w-6" />
            </button>
          </div>
          <div>
            <img
              src="https://placehold.co/100x100"
              alt=""
              className="w-60 rounded-full border-10 border-[#313131]"
            />
          </div>
        </div>
        <div>
          <span className="flex flex-row gap-1 justify-center mt-20 items-center">
            <p className="text-lg text-[#313131]">Scroll Down</p>{" "}
            <ArrowDown className="text-sm" />
          </span>
        </div>
      </div>
      <About/>
      <Skills/>
      <Services/>
    </div>
  );
};

export default Home;

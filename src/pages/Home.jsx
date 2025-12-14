import React from "react";
import { Instagram, Globe, Github, Send, ArrowDown, Mouse } from "lucide-react";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Home = () => {

  const BottomWindow = () => {
        window.scrollTo({top: document.documentElement.scrollHeight, left:0 ,scrollTo:"smooth"});
    }
  return (
    <div className="lg:max-w-[80%] max-h-screen mx-auto">
      <div>
        <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-14 gap-y-4 items-center justify-center lg:py-10 Lg:px-20 p-5">
          <div className="flex flex-col order-first  gap-8 lg:px-10 items-center text-[#313131]">
            <Instagram />
            <Globe />
            <Github />
          </div>
          <div className="flex flex-col order-last gap-8">
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
            <button className="group flex flex-row gap-1 text-lg text-start hover:bg-[#313131] bg-[#3B3B3B] text-white w-36 px-5 py-3 rounded-lg">
              Say Hello
              <Send className="w-5 transition-transform duration-300 group-hover:rotate-10" />
            </button>
          </div>
          <div className="order-first">
            <img
              src="https://placehold.co/100x100"
              alt=""
              className="w-60 rounded-full border-10 border-[#313131]"
            />
          </div>
        </div>
        <div>
          <span onClick={BottomWindow} className="flex flex-row gap-1 cursor-pointer text-[#313131] hover:text-gray-600 justify-center mt-20 items-center">
            <p className="text-lg ">Scroll Down</p>{" "}
            <ArrowDown className="text-sm" />
          </span>
        </div>
      </div>
      <About/>
      <Skills/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </div>
  );
};

export default Home;

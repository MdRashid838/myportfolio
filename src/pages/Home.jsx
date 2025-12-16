import React from "react";
import { Instagram, Globe, Github, Send, ArrowDown, Mouse } from "lucide-react";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Home = () => {
  const BottomWindow = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      left: 0,
      scrollTo: "smooth",
    });
  };
  return (
    <div className="lg:max-w-[80%] max-h-screen mx-auto">
      <div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-4 lg:gap-14 items-center justify-center p-5 lg:p-4">
          <div className="order-2 lg:order-3 w-full flex justify-center">
            <img
              src="https://placehold.co/100x100"
              alt=""
              className="w-60 rounded-full border-[10px] border-[#313131]"
            />
          </div>

          
          <div className="order-1 lg:order-1 flex flex-col gap-8 items-center text-[#313131]">
            <Instagram />
            <Globe />
            <Github />
          </div>

          
          <div className="order-3 lg:order-2 col-span-2 lg:col-span-1 flex flex-col gap-8">
            <div className="flex flex-col gap-2 md:gap-4">
              <h1 className="text-3xl md:text-5xl text-[#313131] font-bold">
                Md Rashid Ali
              </h1>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#313131]">
                  Full Stack Developer
                </h3>
                <p className="text-sm text-gray-600">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis, dolorum?
                </p>
              </div>
            </div>

            <button className="group flex gap-1 text-sm items-center md:text-lg hover:bg-[#313131] bg-[#3B3B3B] text-white w-28 md:w-36 px-3 py-2 md:px-5 md:py-3 rounded-lg">
              Say Hello
              <Send className="md:w-5 w-4 transition-transform duration-300 group-hover:rotate-10" />
            </button>
          </div>
        </div>

        {/* <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-8 p-5 lg:p-10">
          <div className="order-1 lg:order-3 flex justify-center w-[45%] lg:w-auto">
            <img
              src="https://placehold.co/100x100"
              alt=""
              className="w-68 rounded-full border-[10px] border-[#313131]"
            />
          </div>

          <div className="order-1 lg:order-1 w-[10%] flex flex-col gap-8 items-center text-[#313131]">
            <Instagram />
            <Globe />
            <Github />
          </div>

          <div className="order-3 lg:order-2 flex flex-col gap-8 max-w-[45%] min-h-80 lg:w-auto">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl font-bold text-[#313131]">
                Md Rashid Ali
              </h1>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#313131]">
                  Full Stack Developer
                </h3>
                <p className="text-sm text-gray-600">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis, dolorum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam sit numquam placeat iusto atque modi quas nobis laborum quibusdam harum dolorem ex ducimus ipsum eum nulla, natus possimus impedit obcaecati?
                </p>
              </div>
            </div>
            <button className="group flex gap-1 text-lg hover:bg-[#313131] bg-[#3B3B3B] text-white w-36 px-5 py-3 rounded-lg">
              Say Hello
              <Send className="w-5 transition-transform duration-300 group-hover:rotate-10" />
            </button>
          </div>
        </div> */}

        <div>
          <span
            onClick={BottomWindow}
            className="flex flex-row gap-1 cursor-pointer text-[#313131] hover:text-gray-600 justify-center mt-10 md:mt-20 items-center"
          >
            <p className="text-lg ">Scroll Down</p>{" "}
            <ArrowDown className="text-sm" />
          </span>
        </div>
      </div>
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;

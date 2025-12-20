import React from "react";
import { Instagram, Globe, Github, Send, ArrowDown } from "lucide-react";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Qualification from "./Qualification";

const Home = () => {
  // scroll to bottom (pure JS – correct way)
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div id="home" className="lg:max-w-[80%] mx-auto">
      {/* ===== HERO SECTION ===== */}
      <div className="min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-4 lg:gap-14 items-center justify-center p-5 lg:p-4">
          
          {/* Profile Image */}
          {/* <div className="order-2 lg:order-3 w-full flex justify-center">
            <img
              src="https://placehold.co/100x100"
              alt="profile"
              className="w-60 rounded-full border-[10px] border-[#313131]"
            />
          </div> */}

          <div className="order-2 lg:order-3 w-full flex justify-center">
  <img
    src="https://lh3.googleusercontent.com/d/1noufSozy1YfBnWN4LctsIg_DOCq1Xk5P"
    alt="profile"
    className="w-60 h-60 border-[10px] border-[#313131] animate-profile_animate"
  />
</div>


          {/* Social Icons */}
          <div className="order-1 lg:order-1 flex flex-col gap-8 items-center text-[#313131]">
            <Instagram />
            <Globe />
            <Github />
          </div>

          {/* Intro Content */}
          <div className="order-3 lg:order-2 col-span-2 lg:col-span-1 flex flex-col gap-8">
            <div className="flex flex-col gap-2 md:gap-4">
              <h1 className="text-3xl md:text-5xl font-bold text-[#313131]">
                Md Rashid Ali
              </h1>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#313131]">
                  Full Stack Developer
                </h3>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis, dolorum?
                </p>
              </div>
            </div>

            <button className="group flex items-center gap-1 text-sm md:text-lg
                               bg-[#3B3B3B] hover:bg-[#313131] text-white
                               w-28 md:w-36 px-3 py-2 md:px-5 md:py-3 rounded-lg">
              Say Hello
              <Send className="md:w-5 w-4 transition-transform duration-300 group-hover:rotate-12" />
            </button>
          </div>
        </div>

        {/* Scroll Down */}
        <div className="mt-10 md:mt-20">
          <span
            onClick={scrollToBottom}
            className="flex gap-1 cursor-pointer text-[#313131]
                       hover:text-gray-600 justify-center items-center"
          >
            <p className="text-lg">Scroll Down</p>
            <ArrowDown className="animate-bounce" />
          </span>
        </div>
      </div>

      {/* ===== SECTIONS ===== */}
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;

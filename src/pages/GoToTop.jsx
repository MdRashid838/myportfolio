import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const TopWindow = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenScroll = () => {
    let screenHeight = 250;
    const windowHeight =
      document.body.scrollTop || document.documentElement.scrollTop;
    console.log("window scroll", windowHeight);
    if (windowHeight > screenHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScroll);
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="flex justify-center items-center rounded-full bg-[#313131] text-white md:w-14 w-8  fixed md:bottom-5 bottom-18 right-5 md:px-4 py-2  md:py-4">
          <button onClick={TopWindow}>
            <ArrowUp className="size-4 md:size-0 animate-bounce"/>
          </button>
        </div>
      )}
    </div>
  );
};

export default GoToTop;

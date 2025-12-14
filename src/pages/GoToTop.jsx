import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const TopWindow = () => {
    window.scrollTo({ top: 0, left: 0, scrollTo: "smooth" });
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
        <div className="flex justify-center items-center rounded-full bg-[#313131] text-white w-14  fixed bottom-5 right-5 px-4 py-4">
          <button onClick={TopWindow}>
            <ArrowUp />
          </button>
        </div>
      )}
    </div>
  );
};

export default GoToTop;

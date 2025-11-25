"use client";
import { useEffect, useState } from "react";
import HomeImage from "./home-image/home-image";
import HomeText from "./home-text/home-text";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <div className="w-screen h-screen bg-white grid grid-cols-1 lg:grid-cols-12">
        {/* Arrow icon - responsive positioning and size */}
        <div className="absolute text-center w-screen h-screen flex items-end justify-center bottom-4 lg:bottom-10 z-10">
          <img
            onClick={() => scrollToSection("menu")}
            className="-rotate-90 drop-shadow-md cursor-pointer hover:scale-110 transition-transform duration-200 w-12 h-12 lg:w-16 lg:h-16"
            width="80"
            height="80"
            src="https://img.icons8.com/ios-filled/50/FFBC40/circled-left-2.png"
            alt="scroll to menu"
          />
        </div>
        
        {/* Text section - full width on mobile, half on desktop */}
        <div className="bg-white h-full lg:col-span-6 lg:py-20 px-6 lg:px-10 order-2 lg:order-1">
          <HomeText />
        </div>
        
        {/* Image section - full width on mobile, half on desktop */}
        <div className="bg-white h-full lg:col-span-6 order-1 lg:order-2">
          <HomeImage />
        </div>
      </div>
    </>
  );
}
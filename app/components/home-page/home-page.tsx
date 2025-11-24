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
      <div className="w-screen h-screen bg-white grid grid-cols-12">
        <div className="absolute text-center w-screen h-screen flex items-end justify-center bottom-10">
          <img
            onClick={() => scrollToSection("menu")}
            className="-rotate-90 drp-shadow-lg"
            width="80"
            height="80"
            src="https://img.icons8.com/ios-filled/50/FF6B35/circled-left-2.png"
            alt="circled-left-2"
          />
        </div>
        <div className="bg-white h-full col-span-6 py-20 px-10">
          <HomeText />
        </div>
        <div className="bg-white h-full col-span-6">
          <HomeImage />
        </div>
      </div>
    </>
  );
}

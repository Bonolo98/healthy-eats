"use client";

import Image from "next/image";
import logo from "../../../public/images/ht-white.png";
import { useEffect, useState } from "react";

export default function Navbar() {
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
    <div
      className={`bg-[#ef6d6d] w-screen h-20 p-4 fixed flex items-center z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Image src={logo} alt="" className="w-20 h-20" />
      <div className="absolute flex gap-x-4 justify-end px-10 items-center right-0">
        <button
          onClick={() => scrollToSection("home")}
          className="font-bold text-white hover:text-gray-200 transition-colors"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("menu")}
          className="font-bold text-white hover:text-gray-200 transition-colors"
        >
          Menu
        </button>
        <button
          onClick={() => scrollToSection("contacts")}
          className="font-bold text-white hover:text-gray-200 transition-colors"
        >
          Contacts
        </button>
      </div>
    </div>
  );
}

// export default function Navbar() {
//   return (
//     <>
//       <div className="bg-[#ef6d6d] w-screen h-20 p-4 fixed flex items-center z-50">
//         <Image src={logo} alt="" className="w-20 h-20" />
//         <div className="absolute flex gap-x-4 justify-end px-10 items-center right-0">
//           <button className="font-bold text-white ">Home</button>
//           <button className="font-bold text-white ">Menu</button>
//           <button className="font-bold text-white ">Contacts</button>
//         </div>
//       </div>
//     </>
//   );
// }

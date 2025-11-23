import HomeImage from "../home-page/home-image/home-image";
import HomeText from "../home-page/home-text/home-text";
import { MealImage } from "./menu-image";
import { MealText } from "./menu-text";

export default function Menu() {
  return (
    <>
      <div className="w-screen h-screen bg-stone-200 grid grid-cols-12">
        <div className="absolute text-center w-screen h-screen flex items-end justify-center bottom-10">
          <img
            className="-rotate-90 drp-shadow-lg"
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/FF6B35/circled-left-2.png"
            alt="circled-left-2"
          />
        </div>
        <div className="bg-white h-full col-span-6 py-20 px-10">
          <MealImage />
        </div>
        <div className="bg-white h-full col-span-6">
          <MealText />
        </div>
      </div>
    </>
  );
}

import PageNav from "../components/page-nav";
import { DrinksText } from "./drinks-text";
import { DrinkImage, MealImage } from "./menu-image";
import { MealText } from "./menu-text";

export default function Beverages() {
  return (
    <>
      <div className="w-screen h-screen bg-white grid grid-cols-12">
        <div className="absolute w-full h-full">
          <PageNav title="BEVERAGES" />
        </div>
        <div className="h-full col-span-6 flex items-center justify-center p-10">
          <DrinksText />
        </div>
        <div className=" h-full col-span-6 py-20 px-10">
          <DrinkImage />
        </div>
      </div>
    </>
  );
}

import PageNav from "../components/page-nav";
import { MealImage } from "./menu-image";
import { MealText } from "./menu-text";

export default function Menu() {
  return (
    <>
      <div className="w-screen h-screen bg-white grid grid-cols-12">
        <div className="absolute w-full h-full">
          <PageNav title="MENU" />
        </div>
        <div className=" h-full col-span-6 py-20 px-10">
          <MealImage />
        </div>
        <div className="h-full col-span-6 flex items-center">
          <MealText />
        </div>
      </div>
    </>
  );
}

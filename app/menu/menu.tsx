import PageNav from "../components/page-nav";
import { MealImage } from "./menu-image";
import { MealText } from "./menu-text";

export default function Menu() {
  return (
    <>
      <div className="w-full min-h-screen bg-white grid grid-cols-1 lg:grid-cols-12">
        <div className="absolute w-full h-full">
          <PageNav title="MENU" />
        </div>
        <div className="h-full lg:col-span-6 py-10 lg:py-20 px-6 lg:px-10 order-1 mt-10">
          <MealImage />
        </div>
        <div className="h-full lg:col-span-6 flex items-center py-10 lg:py-0 order-2">
          <MealText />
        </div>
      </div>
    </>
  );
}

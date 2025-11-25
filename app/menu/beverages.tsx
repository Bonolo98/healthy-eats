import PageNav from "../components/page-nav";
import { DrinksText } from "./drinks-text";
import { DrinkImage } from "./menu-image";

export default function Beverages() {
  return (
    <>
      <div className="w-screen min-h-screen bg-white grid grid-cols-1 lg:grid-cols-12">
        <div className="absolute w-full h-full">
          <PageNav title="BEVERAGES" />
        </div>
        {/* Text section - full width on mobile, half on desktop */}
        <div className="h-full lg:col-span-6 flex items-center justify-center p-6 lg:p-10 order-2 lg:order-1">
          <DrinksText />
        </div>
        {/* Image section - full width on mobile, half on desktop */}
        <div className="h-full lg:col-span-6 py-10 lg:py-20 px-6 lg:px-10 order-1 lg:order-2">
          <DrinkImage />
        </div>
      </div>
    </>
  );
}
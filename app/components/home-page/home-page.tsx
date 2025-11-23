import HomeImage from "./home-image/home-image";
import HomeText from "./home-text/home-text";

export default function HomePage() {
  return (
    <>
      <div className="w-screen h-screen bg-stone-100 grid grid-cols-12">
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
          <HomeText />
        </div>
        <div className="bg-white h-full col-span-6">
          <HomeImage />
        </div>
      </div>
    </>
  );
}

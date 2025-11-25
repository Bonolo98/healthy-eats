import Image from "next/image";
import drinksImage from "../../public/images/drinks.png";
import mealsImage from "../../public/images/meals.png";

export function MealImage() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Image 
        src={mealsImage} 
        alt="Healthy meals" 
        placeholder="blur" 
        className="w-full max-w-md lg:max-w-full h-auto object-contain"
      />
    </div>
  );
}

export function DrinkImage() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Image 
        src={drinksImage} 
        alt="Refreshing drinks" 
        placeholder="blur" 
        className="w-full max-w-md lg:max-w-full h-auto object-contain lg:scale-120"
      />
    </div>
  );
}
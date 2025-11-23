import Image from "next/image";
import drinksImage from "../../public/images/drinks.png";
import mealsImage from "../../public/images/meals.png";

export function MealImage() {
  return (
    <>
      <Image src={mealsImage} alt="image" />
    </>
  );
}

export function DrinkImage() {
  return (
    <>
      <Image src={drinksImage} alt="image" />
    </>
  );
}

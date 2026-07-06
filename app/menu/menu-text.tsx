import Menu from "./menu.json";

interface Menu {
  id: number;
  title: string;
  price: string;
  description: string;
}

// const menuItems: MenuItem[] = [
//   {
//     id: 1,
//     name: "Chickpea Power Bowl",
//     price: "R95",
//     description:
//       "Roasted chickpeas, mixed greens, cherry tomatoes, cucumbers, lemon-tahini dressing.",
//     category: "MEALS",
//   },
//   {
//     id: 2,
//     name: "Mediterranean Olive Salad",
//     price: "R105",
//     description:
//       "Kalamata olives, feta, cucumber, red onion, and herb vinaigrette.",
//     category: "MEALS",
//   },
//   {
//     id: 3,
//     name: "Grilled Chicken Greens",
//     price: "R118",
//     description:
//       "Juicy grilled chicken breast on fresh greens with honey-mustard dressing.",
//     category: "MEALS",
//   },
//   {
//     id: 4,
//     name: "Avocado Garden Crunch",
//     price: "R110",
//     description:
//       "Avocado, carrots, seeds, red cabbage, and zesty lime dressing.",
//     category: "MEALS",
//   },
//   {
//     id: 5,
//     name: "Salmon Super food Mix",
//     price: "R145",
//     description:
//       "Smoked salmon with quinoa, spinach, edamame, and citrus drizzle.",
//     category: "MEALS",
//   },
//   {
//     id: 6,
//     name: "Halloumi Harvest Salad",
//     price: "R125",
//     description:
//       "Grilled halloumi, roasted pumpkin, rocket, and balsamic glaze.",
//     category: "MEALS",
//   },
// ];

export function MealText() {
  return (
    <div className="w-full max-w-2xl px-4 lg:px-0 grid grid-cols-6">
      <h1 className="font-bold my-4 text-2xl lg:text-xl text-center lg:text-left">
        MEALS
      </h1>
      <div className="space-y-6 lg:space-y-4 col-start-1 col-span-3">
        {Menu.menu.meals.map((item, i) => (
          <div key={i} className="grid  gap-2 lg:gap-0">
            <div className="">
              <p className="font-bold text-md">{item.title}</p>
              <p className="font-bold text-sm">{item.price}</p>
              <p className="text-gray-600 text-sm lg:text-base mt-1 lg:mt-0">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DrinksText() {
  return <></>;
}

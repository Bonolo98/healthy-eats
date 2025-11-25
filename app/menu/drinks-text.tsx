interface DrinkItem {
  id: number;
  name: string;
  price: string;
  description: string;
  category: string;
}

const drinkItems: DrinkItem[] = [
  {
    id: 1,
    name: "Tropical Glow Smoothie",
    price: "R48",
    description: "Mango, pineapple, and yoghurt blend.",
    category: "DRINKS",
  },
  {
    id: 2,
    name: "Fresh Mint Lemonade",
    price: "R32",
    description: "Hand-pressed lemons with fresh mint and light syrup.",
    category: "DRINKS",
  },
  {
    id: 3,
    name: "Berry Energy Refresher",
    price: "R45",
    description: "Blueberry, strawberry, and apple splash.",
    category: "DRINKS",
  },
  {
    id: 4,
    name: "Ginger Citrus Cooler",
    price: "R52",
    description: "Orange, lemon, and ginger over crushed ice.",
    category: "DRINKS",
  },
];

export function DrinksText() {
  return (
    <div className="w-full max-w-2xl">
      <h1 className="font-bold my-4 text-2xl lg:text-xl text-center lg:text-left">DRINKS</h1>
      <div className="space-y-6 lg:space-y-4">
        {drinkItems.map((item) => (
          <div key={item.id} className="grid grid-cols-1 lg:grid-cols-6 gap-2 lg:gap-0">
            <p className="font-bold text-lg lg:text-base lg:col-span-3">{item.name}</p>
            <p className="font-bold text-lg lg:text-base lg:text-left">R48</p>
            <p className="text-gray-600 lg:col-span-3 text-sm lg:text-base mt-1 lg:mt-0">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
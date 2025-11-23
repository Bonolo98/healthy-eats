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
    <div>
      <h1 className="font-bold my-4 text-xl">DRINKS</h1>
      {drinkItems.map((item) => (
        <div key={item.id} className="grid grid-cols-6 mb-6">
          <p className="font-bold col-span-3">{item.name}</p>
          <p className="font-bold">{item.price}</p>
          <p className="col-span-3 text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

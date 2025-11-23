interface MenuItem {
  id: number;
  name: string;
  price: string;
  description: string;
  category: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Chickpea Power Bowl",
    price: "R95",
    description:
      "Roasted chickpeas, mixed greens, cherry tomatoes, cucumbers, lemon-tahini dressing.",
    category: "MEALS",
  },
  {
    id: 2,
    name: "Mediterranean Olive Salad",
    price: "R105",
    description:
      "Kalamata olives, feta, cucumber, red onion, and herb vinaigrette.",
    category: "MEALS",
  },
  {
    id: 3,
    name: "Grilled Chicken Greens",
    price: "R118",
    description:
      "Juicy grilled chicken breast on fresh greens with honey-mustard dressing.",
    category: "MEALS",
  },
  {
    id: 4,
    name: "Avocado Garden Crunch",
    price: "R110",
    description:
      "Avocado, carrots, seeds, red cabbage, and zesty lime dressing.",
    category: "MEALS",
  },
  {
    id: 5,
    name: "Salmon Super food Mix",
    price: "R145",
    description:
      "Smoked salmon with quinoa, spinach, edamame, and citrus drizzle.",
    category: "MEALS",
  },
  {
    id: 6,
    name: "Halloumi Harvest Salad",
    price: "R125",
    description:
      "Grilled halloumi, roasted pumpkin, rocket, and balsamic glaze.",
    category: "MEALS",
  },
];

export function MealText() {
  return (
    <div>
      <h1 className="font-bold my-4 text-xl">MEALS</h1>
      {menuItems.map((item) => (
        <div key={item.id} className="grid grid-cols-6 mb-6">
          <p className="font-bold col-span-3">{item.name}</p>
          <p className="font-bold">{item.price}</p>
          <p className="col-span-3 text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export function DrinksText() {
  return <></>;
}

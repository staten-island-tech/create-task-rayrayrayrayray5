let brainrots = [
  {
    name: "Tung Tung Tung Sahur",
    rarity: "Legendary",
    worth: 100000000,
  },
  {
    name: "Tralalero Tralala",
    rarity: "Epic",
    worth: 100000,
  },
  {
    name: "Bombardiro Crocodilo",
    rarity: "Common",
    worth: 100,
  },
  {
    name: "Spaghetti Spaghetto",
    rarity: "Rare",
    worth: 5000,
  },
  {
    name: "Mamma Mia Mammuth",
    rarity: "Epic",
    worth: 250000,
  },
  {
    name: "Pizzarino Pepperoni",
    rarity: "Common",
    worth: 250,
  },
  {
    name: "Luigi Linguini",
    rarity: "Rare",
    worth: 4200,
  },
  {
    name: "Ravioli Raptor",
    rarity: "Epic",
    worth: 180000,
  },
  {
    name: "Gnocchi Goblino",
    rarity: "Uncommon",
    worth: 1200,
  },
  {
    name: "Mozzarella Mafia",
    rarity: "Legendary",
    worth: 75000000,
  },
  {
    name: "Carbonara Cannon",
    rarity: "Rare",
    worth: 8000,
  },
  {
    name: "Vespa Vespino",
    rarity: "Common",
    worth: 180,
  },
  {
    name: "Gelato Gigante",
    rarity: "Epic",
    worth: 210000,
  },
  {
    name: "Panini Bandito",
    rarity: "Uncommon",
    worth: 950,
  },
  {
    name: "Bolognese Berserker",
    rarity: "Rare",
    worth: 11000,
  },
  {
    name: "Nonna Nuclear",
    rarity: "Legendary",
    worth: 99999999,
  },
  {
    name: "Espresso Depresso",
    rarity: "Uncommon",
    worth: 666,
  },
  {
    name: "Fettuccine Phantom",
    rarity: "Epic",
    worth: 300000,
  },
  {
    name: "Calzone Colosso",
    rarity: "Rare",
    worth: 9000,
  },
  {
    name: "Tiramisu Tsunami",
    rarity: "Legendary",
    worth: 50000000,
  },
  {
    name: "Prosciutto Poltergeist",
    rarity: "Epic",
    worth: 275000,
  },
  {
    name: "Pesto Possessed",
    rarity: "Uncommon",
    worth: 1300,
  },
  {
    name: "Lasagna Leviathan",
    rarity: "Legendary",
    worth: 88000000,
  },
  {
    name: "Mario Mozzarello",
    rarity: "Rare",
    worth: 7000,
  },
];

function getBrainrots(thing) {
  thing.forEach((element) => {
    console.log(element.name, element.rarity, element.worth);
  });
}

getBrainrots(brainrots);

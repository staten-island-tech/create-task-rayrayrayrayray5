let cash = 1000000;

let brainrots = [
  {
    name: "Tung Tung Tung Sahur",
    rarity: "Legendary",
    worth: 100000000,
    chance: 2,
  },
  { name: "Tralalero Tralala", rarity: "Epic", worth: 100000, chance: 2.5 },
  { name: "Bombardiro Crocodilo", rarity: "Common", worth: 100, chance: 10 },
  { name: "Spaghetti Spaghetto", rarity: "Rare", worth: 5000, chance: 4.1667 },
  { name: "Mamma Mia Mammuth", rarity: "Epic", worth: 250000, chance: 2.5 },
  { name: "Pizzarino Pepperoni", rarity: "Common", worth: 250, chance: 10 },
  { name: "Luigi Linguini", rarity: "Rare", worth: 4200, chance: 4.1667 },
  { name: "Ravioli Raptor", rarity: "Epic", worth: 180000, chance: 2.5 },
  { name: "Gnocchi Goblino", rarity: "Uncommon", worth: 1200, chance: 5 },
  { name: "Mozzarella Mafia", rarity: "Legendary", worth: 75000000, chance: 2 },
  { name: "Carbonara Cannon", rarity: "Rare", worth: 8000, chance: 4.1667 },
  { name: "Vespa Vespino", rarity: "Common", worth: 180, chance: 10 },
  { name: "Gelato Gigante", rarity: "Epic", worth: 210000, chance: 2.5 },
  { name: "Panini Bandito", rarity: "Uncommon", worth: 950, chance: 5 },
  { name: "Bolognese Berserker", rarity: "Rare", worth: 11000, chance: 4.1667 },
  { name: "Nonna Nuclear", rarity: "Legendary", worth: 99999999, chance: 2 },
  { name: "Espresso Depresso", rarity: "Uncommon", worth: 666, chance: 5 },
  { name: "Fettuccine Phantom", rarity: "Epic", worth: 300000, chance: 2.5 },
  { name: "Calzone Colosso", rarity: "Rare", worth: 9000, chance: 4.1667 },
  { name: "Tiramisu Tsunami", rarity: "Legendary", worth: 50000000, chance: 2 },
  {
    name: "Prosciutto Poltergeist",
    rarity: "Epic",
    worth: 275000,
    chance: 2.5,
  },
  { name: "Pesto Possessed", rarity: "Uncommon", worth: 1300, chance: 5 },
  {
    name: "Lasagna Leviathan",
    rarity: "Legendary",
    worth: 88000000,
    chance: 2,
  },
  { name: "Mario Mozzarello", rarity: "Rare", worth: 7000, chance: 4.1667 },
];

function getRandomBrainrot(brainrots) {
  if (cash < 100000) {
    console.log("Not enough cash to spin!");
    return;
  }
  cash -= 100000;

  let totalChance = 0;
  for (let i = 0; i < brainrots.length; i++) {
    totalChance += brainrots[i].chance;
    let random = Math.random() * totalChance;
  }
}

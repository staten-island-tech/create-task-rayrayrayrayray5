let cash = 1000000;
let brainrots = [
  {
    name: "Tung Tung Tung Sahur",
    rarity: "Legendary",
    worth: 1000000,
    chance: 1,
  },
  { name: "Tralalero Tralala", rarity: "Epic", worth: 100000, chance: 7 },
  { name: "Bombardiro Crocodilo", rarity: "Common", worth: 10000, chance: 35 },
  { name: "Spaghetti Spaghetto", rarity: "Rare", worth: 30000, chance: 15 },
  { name: "Mamma Mia Mammuth", rarity: "Epic", worth: 250000, chance: 7 },
  { name: "Pizzarino Pepperoni", rarity: "Common", worth: 250, chance: 35 },
  { name: "Luigi Linguini", rarity: "Rare", worth: 20000, chance: 15 },
  { name: "Ravioli Raptor", rarity: "Epic", worth: 180000, chance: 7 },
  { name: "Gnocchi Goblino", rarity: "Uncommon", worth: 1200, chance: 25 },
  { name: "Mozzarella Mafia", rarity: "Legendary", worth: -500000, chance: 1 },
  { name: "Carbonara Cannon", rarity: "Rare", worth: 8000, chance: 15 },
  { name: "Vespa Vespino", rarity: "Common", worth: 18000, chance: 35 },
  { name: "Gelato Gigante", rarity: "Epic", worth: 210000, chance: 7 },
  { name: "Panini Bandito", rarity: "Uncommon", worth: 9500, chance: 25 },
  { name: "Bolognese Berserker", rarity: "Rare", worth: 11000, chance: 15 },
  { name: "Nonna Nuclear", rarity: "Legendary", worth: 9999999, chance: 0.25 },
  { name: "Espresso Depresso", rarity: "Uncommon", worth: 666, chance: 25 },
  { name: "Fettuccine Phantom", rarity: "Epic", worth: 300000, chance: 7 },
  { name: "Calzone Colosso", rarity: "Rare", worth: 9000, chance: 15 },
  { name: "Tiramisu Tsunami", rarity: "Legendary", worth: 500000, chance: 1 },
  { name: "Prosciutto Poltergeist", rarity: "Epic", worth: 275000, chance: 7 },
  { name: "Pesto Possessed", rarity: "Uncommon", worth: 13000, chance: 25 },
  {
    name: "Lasagna Leviathan",
    rarity: "Legendary",
    worth: 88000000,
    chance: 1,
  },
  { name: "Mario Mozzarello", rarity: "Rare", worth: 7000, chance: 15 },
];

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getRandomNumber(minimum, maximum) {
  min = Math.ceil(minimum);
  max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getBrainrot() {
  if (cash < 100000) {
    console.log("You Don't Have Enough Money");
    rl.close();
    return;
  }

  rl.question(
    `Roll Brainrot for $100000? Y/N, Money: $${cash} `,
    (response) => {
      if (response.toLowerCase() === "y") {
        if (cash < 100000) {
          console.log("You Don't Have Enough Money");
          rl.close();
          return;
        }

        cash -= 100000;
        let totalChance = 0;
        for (let i = 0; i < brainrots.length; i++) {
          totalChance += brainrots[i].chance;
        }

        const roll = getRandomNumber(1, totalChance);
        let current = 0;

        for (let i = 0; i < brainrots.length; i++) {
          current += brainrots[i].chance;
          if (roll <= current) {
            console.log(
              `${brainrots[i].name}, ${brainrots[i].rarity}, Value: ${brainrots[i].worth},`,
            );
            cash += brainrots[i].worth;
            break;
          }
        }
        console.log("Money:", cash);
        getBrainrot();
      }
      if (response.toLowerCase() === "n") {
        rl.close();
      } else {
        getBrainrot();
      }
    },
  );
}
getBrainrot();

//use "node app.js" in terminal
//to start rolling, type "y" in the terminal
//to continue rolling, type "y", to stop, type "n"
//if cash is under 100000, the game ends

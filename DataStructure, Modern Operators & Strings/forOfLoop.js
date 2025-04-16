"use Strict";
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //call the function
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "21:00",
    addres,
  }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and 
          ${this.mainMenu[mainIndex]} will be delivered to
           ${addres} at ${time}`);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

//Looping Array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// For of Loop : -- Each element logged one by one
for (const item of menu) console.log(item);

//Finding index of each elemnet using for of loop
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

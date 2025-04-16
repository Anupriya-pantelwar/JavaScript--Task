// Spead Operator: used to expand an array into all its elements. or unpacking all the array elements at one

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
};

const arr = [7, 8, 9];
const badArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArr);

//with Spread Operator

const newArr = [1, 2, ...arr];
console.log(newArr);

//for printing individiual array
console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, "Gnoci"];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables: arrays, String, maps, sets. NOT Objects
const str = "jonas";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);

//take a input from a prompt window
//real world example
const ingredients = [
  prompt("Let's make pasta! Integredient 1?"),
  prompt("Ingredient 2?"),
  prompt("Ingredient 3"),
];
console.log(ingredients);
// printing through normal
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[3]);
//printing through spread operator
restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Anupriya" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Mithas";
console.log(restaurantCopy.name);
console.log(restaurant.name);

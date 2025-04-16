// Rest : - is used to pack elements into an array

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

// 1) Destructuring

//SPREAD , because on the RIGHT side of = operator
const arr = [1, 2, ...[3, 4]];
console.log(9, 8, ...arr);

// REST , because on LEFT side of  = operator
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

//... use both side of the operator
//NOTE: - rest syntax collects all the ARRAY after the last variable.
//I twill not include skip element
//rest element will be the last element.
//there can only be one rest in any destructuring assignment.

const [pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, Risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2)  Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 3, 6, 7, 8, 9);

const x = [2, 3, 5];
add(...x);

//the first argument was stored into this main argument here and all the remaining arguments that
//were stord in the array by rest parameter of syntax.
restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms");

"use strict";
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
};

//passing them into object of objects
restaurant.orderDelivery({
  time: "23:30",
  addres: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  addres: "Via del Sole, 21",
  starterIndex: 1,
});

//for destructure object we use  {} braces.

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//variable name diff from property name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//setting default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//nested objects
const { fri } = openingHours;
console.log(fri);

const {
  sat: { open, close },
} = openingHours;
console.log(open, close);

const {
  thu: { open: o, close: c },
} = openingHours;
console.log(o, c);

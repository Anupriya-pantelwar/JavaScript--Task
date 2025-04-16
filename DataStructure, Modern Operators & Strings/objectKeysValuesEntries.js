"use Strict";

//Object Literals
/* ES6 introduced three ways to write object literals:-
 */
/* 3) we can compute propertynames instead of having to write them out
     manually and literally
*/
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
//  1) we have an object outside of this object

const hours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[2]]: {
    open: 11,
    close: 23,
  },
  [weekdays[6]]: {
    open: 0, // open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //ES6 enhance object literals
  hours, //create a property name with exactly that variable name.

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  /*2). ES6 we not have to create a property, and then set it to a 
       function expression.
  */
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "21:00", addres }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and 
          ${this.mainMenu[mainIndex]} will be delivered to
           ${addres} at ${time}`);
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};
console.log(restaurant);

//Looping over property name also called as keys.
const properties = Object.keys(hours);
console.log(properties);

//no of days open
console.log(`we are open on ${properties.length} days`);

console.log("-------Keys--------");
for (const day of Object.keys(hours)) {
  console.log(day);
}

//Property Values
console.log("-----values--------");
const values = Object.values(hours);
console.log(values);

//Enteries Object:- It transformed the object into an array in the form of key and value pair,
console.log("-----enteries-----");
const entries = Object.entries(hours);
console.log(entries);

//destructuring [key, value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

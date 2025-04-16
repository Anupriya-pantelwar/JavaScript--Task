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
  [`day-${2 + 4}`]: {
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

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

//creating new restaturant object
const rest1 = {
  name: "Capri",
  //numguests: 20,
  numguests: 0,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

//rest1.numguests = rest1.numguests || 10;
//rest2.numguests = rest2.numguests || 10;
//OR assignment operator
// rest1.numguests ||= 10;
// rest2.numguests ||= 10;

//nullish assignment operator (null or undefined)
rest1.numguests ??= 10;
rest2.numguests ??= 10;

rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);

/*Nullish Operator--- It works almost the same way as the OR Operator,but it will 
fix the error.. It is because the nullish coalescing operator works with the idea
 or with the concept of nullish values instead of falsy values.
 and nullish values are (  null / undefined ) it willnot include ( 0 / ' ')

*/
restaurant.numguests = 0;
const guestCorrect = restaurant.numguests ?? 10;
console.log(guestCorrect);

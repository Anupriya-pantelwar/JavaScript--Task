let marks = {
  harry: 90,
  subham: 67,
  lovish: 9,
  monika: 78,
};

for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "The marks of " +
      Object.keys(marks)[i] +
      " are " +
      marks[Object.keys(marks)[i]]
  );
}

//forIn loop
for (let key in marks) {
  console.log("The marks of " + key + " are " + marks[key]);
}

/*p3
let cn = 43;
let inwhile (i !=cn){
    i = prompt("Enter a number");
}

console.log("You have entered a correct number");  */

// finding mean
const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4;
};
console.log(mean(4, 5, 6, 7));

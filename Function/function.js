function onePlusAvg(x, y) {
  console.log("Done");
  return Math.round(1 + (x + y) / 2);
}

//Arrow function
const sum = (p, q) => {
  return p + q;
};

//function without parameter
const hello = () => {
  console.log("Hey how are u");

  return "hi";
};
let a = 1;
let b = 2;
let c = 3;

console.log("One plus Average of", onePlusAvg(a, b));
console.log("One plus Average of", onePlusAvg(c, b));
console.log("One plus Average of", onePlusAvg(a, c));
console.log(sum(4, 6));
hello();

let v = hello();
console.log(v);

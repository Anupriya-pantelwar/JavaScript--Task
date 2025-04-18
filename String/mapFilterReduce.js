//Map--

let arr = [45, 23, 21];
console.log(arr);

let a = arr.map((value, index, array) => {
  console.log(value, index, array);
  return value + 1;
});
console.log(a);

//Filter:-
let arr2 = [45, 58, 21, 9, 2, 3, 0];
let a2 = arr2.filter((a) => {
  return a < 10;
});
console.log(a2);

//Reduce:-
let arr3 = [1, 4, 7, 8, 3, 8, 0];
let newArr3 = arr.reduce((h1, h2) => {
  return h1 + h2;
});
console.log(newArr3);

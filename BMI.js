// store Mark's and John's mass and height
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

//Calculate BMI
let BMIMark = massMark /(heightMark * heightMark);
let BMIJohn = massJohn /(heightJohn * heightJohn);

//log the BMI values
console.log("Mark's BMI:",BMIMark);
console.log("John BMI:",BMIJohn);

//BONUS: Check if mark has a higher BMI than John
let markHigherBMI = BMIMark > BMIJohn;
console.log("Does Mark have a higher BMI than John?" , markHigherBMI);


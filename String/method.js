//length -- proprty
let name = "Anupriya";
console.log(name.length);

//toUpperCase() -- function , built in string function
console.log(name.toUpperCase());

//toLowerCase() -- loer case
console.log(name.toLowerCase());

//break the string/ replicate
console.log(name.slice(1, 5)); //5 not included

//relpace --something replace with something
console.log(name.replace("Anu", "Tanu"));

//concat :- add string   (+)
let friend = "Tanupriya";
console.log(name.concat(" is a friend of ", friend, "Ok"));

//trim :-- to remove the spaces
let friend2 = "      Meena         ";
console.log(friend2.trim());

//String are immutable :--- means we can't change the string.
//we can create a new String

for (let i = 0; i <= name.length; i++) {
  console.log(name[i]);
}

//include()-- if that word present then it will return true

const sentence = "The quick brown fox jumps over the lazy dog.";
const word = "fox2";
console.log(sentence.includes(word));
console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);

//startWith  //endsWith
console.log(sentence.startsWith("The"));
console.log(sentence.endsWith("dog."));

//ques:
let str1 = "Please give Rs 1000";
let amount = Number.parseInt(str1.slice("Please give Rs".length));
console.log(amount);

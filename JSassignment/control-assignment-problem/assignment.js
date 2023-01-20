const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// FIRST ASSAINMENT
// ****************
if (randomNumber > 0.7) {
  alert("Hello World");
} else {
  alert("not greater than 0.7");
}

// SECOND ASSAINMENT
// *****************
let myArray = [4, 2, 7, 3, 7];

for (let i = 0; i <= myArray.length; i++) {
  console.log(myArray[i]);
}

for (const number of myArray) {
  console.log(number);
}

// THIRD ASSAINMENT
// ****************
let arrayReversed = [];

for (let i = 0; i <= myArray.length; i++) {
  arrayReversed.push(myArray[i]);
}

console.log(arrayReversed.reverse());

// FORTH ASSAINMENT
// ****************
const random = Math.random();

console.log(randomNumber);
console.log(random);

if (
  (randomNumber > 0.7 && random > 0.7) ||
  randomNumber <= 0.2 ||
  random <= 0.2
) {
  alert("hello world");
}

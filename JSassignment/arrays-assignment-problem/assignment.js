const simpleArr = [3, 6, 9, 2, 8, 44];

// Assignment 1

/* const simpleArr = [3, 6, 9, 2, 8, 44];
const filteredArr = simpleArr.filter((arr) => arr > 5);
console.log(filteredArr);
const mapArr = filteredArr.map((arr) => ({ num: arr }));

console.log(mapArr);

const reducedArr = simpleArr.reduce(
  (curResult, curValue) => curResult * curValue,
  1
);
console.log(reducedArr);
 */

// Assignment 2
/* 
function findMax(arr) {
  const maxNum = Math.max(...arr);
  console.log(maxNum);
}
findMax(simpleArr);
 */

// Assignment 3
/* 
function findMaX(...arr) {
  let MinMax = [];
  let maxNum = arr[0];
  let minNum = arr[0];
  arr.forEach((ar) => {
    if (ar > maxNum) {
      maxNum = ar;
    }
    if (ar < minNum) {
      minNum = ar;
    }
  });
  MinMax.push(minNum, maxNum);
  return MinMax;
}
const [minNum, maxNum] = findMaX(...simpleArr);

console.log(minNum, maxNum);
 */

// Assignment 4

const arrSet = new Set();
arrSet.add(simpleArr);
console.log(arrSet);

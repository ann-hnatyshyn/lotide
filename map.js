//Our map function will take in two arguments:
//An array to map
//A callback function
//The map function will return a new array based on the
//results of the callback function.

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);

//console.log(results1);

const numbers = [1, 2, 3, 4, 5];
const results2 = map(numbers, (num) => num * 2);
//console.log(results2); // Expected output: [2, 4, 6, 8, 10]

const stringLengths = map(["hello", "world", "Javascript", "fun"], (str) => str.length);
console.log(stringLengths); // Expected output: [5, 5, 10, 3]

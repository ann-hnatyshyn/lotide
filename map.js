const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
module.exports = map;

// const results1 = map(words, (word) => word[0]);
// const words = ["ground", "control", "to", "major", "tom"];
// console.log(results1);


// const numbers = [1, 2, 3, 4, 5];
// const results2 = map(numbers, (num) => num * 2);
// console.log(results2);

// const stringLengths = map(["hello", "world", "Javascript", "fun"], (str) => str.length);
// console.log(stringLengths);

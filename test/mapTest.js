const map = require("../map.js");

const numbers = [1, 2, 3, 4, 5];
const results2 = map(numbers, (num) => num * 2);
console.log(results2);

const stringLengths = map(["hello", "world", "Javascript", "fun"], (str) => str.length);
console.log(stringLengths);
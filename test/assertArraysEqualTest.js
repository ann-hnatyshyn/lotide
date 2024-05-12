const assertArraysEqual = require("../assertArraysEqual.js");
const assertEqual = require("../assertEqual");

console.log(assertArraysEqual([1,2,3], [4,5,6]));
console.log(assertArraysEqual([1,2,3], [1,2,3]));

assertEqual(assertArraysEqual([1,2,3],[1,2,3]), true);
assertEqual(assertArraysEqual([1,2,3],[1,2,5,6,7]), false);
assertEqual(assertArraysEqual([1,2,3],[1,2,1,2,3]), false);
assertEqual(assertArraysEqual([1,2,3,4],[1,2,3,4]), true);
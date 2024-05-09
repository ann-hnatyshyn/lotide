const eqArrays = require("../eqArrays.js");
const assertEqual = require("../assertEqual");

assertEqual(eqArrays([0, 9, 8, 7], [6, 5, 4, 3]), false);
assertEqual(eqArrays([1, 2, 3, 4], [5, 6, 7, 8]), false);
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true);
assertEqual(eqArrays([3, 2, 3, 6], [3, 2, 3, 6]), true);
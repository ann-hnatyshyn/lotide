const middle = require("../middle.js");
const assertArraysEqual = require("../assertArraysEqual.js");

console.log(middle([1, 2, 3, 4, 5]));

assertArraysEqual(middle([1, 2, 3, 4]));
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]));
assertArraysEqual(middle([1, 2, 3, 4, 5]));
const middle = require("../middle.js");
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual(middle([1, 2, 3, 4]), [3, 2, 1]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [5, 6, 7, 8]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [1, 2, 3, 4]);
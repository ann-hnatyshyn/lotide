const middle = require("../middle.js");
const assertArraysEqual = require("../assertArraysEqual");

console.log(middle([1, 2, 3, 4, 5]));

assertArraysEqual([1, 2, 3, 4], [4,3,2,1]);
assertArraysEqual([1, 2, 3, 4, 5, 6], [5,6,7,8]);
assertArraysEqual([1, 2, 3, 4, 5], [1,2,3,4]);
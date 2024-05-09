const assertArraysEqual = require("../assertArraysEqual.js");
const assertEqual = require("../assertEqual");

assertEqual(assertArraysEqual([1,2,3],[1,2,3]), true);
assertEqual(assertArraysEqual([1,2,3],[1,2,5,6,7]), false);
assertEqual(assertArraysEqual([1,2,3],[1,2,1,2,3]), false);
assertEqual(assertArraysEqual([1,2,3,4],[1,2,3,4]), true);
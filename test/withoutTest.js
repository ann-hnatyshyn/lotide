const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');

assertArraysEqual(without([1,2,3], [1,2,3]));
assertArraysEqual(without([1,2,3], [1,2]));

const words = ["hello", "world"];
without(words, ["lighthouse"]);
assertArraysEqual(without(words["hello", "world", "lighthouse"]));
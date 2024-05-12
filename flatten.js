const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(arr) {
  return (arr.flat(Infinity));
};
module.exports = flatten;



// console.log(flatten([1, 2, [3, 4], 5, [6]]));
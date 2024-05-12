const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] !== itemsToRemove[j]) {
        return [source[i]];
      }
    }
  }
};
module.exports = without;



// assertArraysEqual([1,2,3], [1,2,3]);
// assertArraysEqual([1,2,3], [1,2]);

// const words = ["hello", "world"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
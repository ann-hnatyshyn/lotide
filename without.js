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

// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++)
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   return true;
// };

// const assertArraysEqual = function(arr1, arr2) {
//   if (eqArrays(arr1, arr2)) {
//     console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
//   } else {
//     console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
//   }
// };

// assertArraysEqual([1,2,3], [1,2,3]);
// assertArraysEqual([1,2,3], [1,2]);

// const words = ["hello", "world"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
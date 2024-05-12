const takeUntil = (array, callback) => {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return results;
    }
    results.push(array[i]);
  }
  return results;
};
module.exports = takeUntil;

// const assertArraysEqual = function(arr1, arr2) {
//   if (eqArrays(arr1, arr2)) {
//     console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
//   } else {
//     console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
//   }
// };

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



// const numberLessThan6 = (x) => {
//   return (x >= 6);
// };

// const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr2 = [0, 1, 2, 3, 4, 5];


// console.log(takeUntil(arr1, numberLessThan6));
// console.log(takeUntil(arr2, numberLessThan6));
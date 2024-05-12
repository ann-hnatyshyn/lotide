const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

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



// const numberLessThan6 = (x) => {
//   return (x >= 6);
// };

// const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr2 = [0, 1, 2, 3, 4, 5];


// console.log(takeUntil(arr1, numberLessThan6));
// console.log(takeUntil(arr2, numberLessThan6));
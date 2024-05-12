const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return "❌Assertion Failed";
  }
  for (let i = 0; i < arr1.length; i++)
    if (arr1[i] !== arr2[i]) {
      return "❌Assertion Failed";
    }
  return "✅Assertion Passed";
};
module.exports = assertArraysEqual;

// console.log(assertArraysEqual([1,2,3], [4,5,6]));
// console.log(assertArraysEqual([1,2,3], [1,2,3]));


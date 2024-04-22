const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++)
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const middle = function(arr1) {
  if (arr1.length <= 2) {
    return [];
  } else if (arr1.length % 2 !== 0) {
    let midIndex = Math.floor(arr1.length / 2);
    return [arr1[midIndex]];
  } else {
    let midIndex1 = arr1.length / 2 - 1;
    let midIndex2 = arr1.length / 2;
    return [arr1[midIndex1], arr1[midIndex2]];
  }
};
console.log(middle([1, 2, 3, 4, 5]));
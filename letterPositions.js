const letterPositions = function(string2) {
  const results = {};
  const count = 0;
  for (const item of string2) {
    console.log(item);
  }
};


const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  if (arr1.length === arr2.length) {
    return true;
  }
};

console.log(eqArrays([1, 2, 3], [1, 2, 3]));

const string2 = "hello";

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};
assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,3], [1,2]);

assertArraysEqual(letterPositions("hello").e, [1]);
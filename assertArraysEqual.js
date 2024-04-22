const assertEqual = function(actual, expected) {
  if (actual === expected) {
   console.log("✅Assertion Passed:", `${actual}`, "===", `${expected}`);
  } else {
    console.log("❌Assertion Failed:", `${actual}`, "!==", `${expected}`);
 }
};

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++)
    if (arr1.length === arr1.length && arr1[i] === arr2[i]) {
      return true;
    } else {
      false;
    }
};

const assertArraysEqual = function(arr1, arr2) {
  console.log(arr1, arr2);
};

assertArraysEqual("❌Assertion Failed:", "✅Assertion Passed:");
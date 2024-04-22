const assertEqual = function(actual, expected) {
  if (actual === expected) {
   console.log("✅Assertion Passed:", `${actual}`, "===", `${expected}`);
  } else {
    console.log("❌Assertion Failed:", `${actual}`, "!==", `${expected}`);
 }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length &&
    arr1.every((element, index) => element === arr2[index])) {
    return true;
  } else {
    return false;
  }
};
console.log(eqArrays[3,2,1], [7,22,9]);

const assertArraysEqual = function(arr1, arr2) {

};


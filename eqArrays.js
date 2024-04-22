//const assertEqual = function(actual, expected) {
//  if (actual === expected) {
//   console.log("✅Assertion Passed:", `${actual}`, "===", `${expected}`);
//  } else {
//    console.log("❌Assertion Failed:", `${actual}`, "!==", `${expected}`);
//  }
//}; assertEqual(3, 4);

const eqArrays = function (arr1, arr2) {
  if (arr1 === arr2) {
    return true;
  } else {
    return false;
  }
};
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
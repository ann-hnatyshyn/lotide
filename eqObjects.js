const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };


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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅Assertion Passed:", `${actual}`, "===", `${expected}`);
  } else {
    console.log("❌Assertion Failed:", `${actual}`, "!==", `${expected}`);
  }
};

const eqObjects = function(shirtObject, anotherShirtObject) {
  const keys = Object.keys(shirtObject);
  for (const value of keys) {
    if (shirtObject[value] !== anotherShirtObject[value]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};

assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(anotherShirtObject,longSleeveShirtObject), false);
assertEqual(eqObjects(longSleeveShirtObject, shirtObject), false);
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

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



// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };




// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

// const longSleeveMultiColorShirtObject = {
//   size: "medium",
//   colors: ["red", "blue"],
//   sleeveLength: "long",
// };

// assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
// assertEqual(eqObjects(anotherShirtObject,longSleeveShirtObject), false);
// assertEqual(eqObjects(longSleeveShirtObject, shirtObject), false);
// assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
const assert = require('chai').assert;
const assertEqual = require("../assertEqual");
const eqObjects = require("../eqObjects.js");

describe("#eqObjects", () => {
  it("it will take in two objects, if the same return true, if not return false", () => {
    assert.deepEqual(eqObjects({ color: "red", size: "medium" }), ({ size: "medium", color: "red" }));
  });
  it("it will take in two objects and returns true or false, based on a perfect match.", () => {
    assert.deepEqual(eqObjects({ size: "medium", color: "red", sleeveLength: "long" }), ({ size: "medium", color: "red" }));
  });
});


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
const eqObjects = require("../eqObjects.js");
const assert = require('chai').assert;


describe("#eqObjects", () => {
  it("it will take in two objects, if the same return true, if not return false", () => {
    assert.deepEqual(eqObjects({ color: "red", size: "medium" }, { size: "medium", color: "red" }));
  });
  it("it will take in two objects and returns true or false, based on a perfect match.", () => {
    assert.deepEqual(eqObjects({ size: "medium", color: "red", sleeveLength: "long" }, { size: "medium", color: "red" }));
  });
});

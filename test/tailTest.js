const assert = require('chai').assert;
const tail = require("../tail.js");

describe("#tail", () => {
  it("returns the tail of an array, every item but the first item", () => {
    assert.deepEqual(tail([1,2,3,4], [1,2,3,4]));
  });
  it("returns the tail of an array, every item but the first item", () => {
    assert.deepEqual(tail(["Lighthouse", "Labs"], ["Lighthouse", "Labs"]));
  });
});

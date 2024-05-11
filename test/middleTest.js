const assert = require('chai').assert;
const middle = require("../middle.js");

describe("#middle", () => {
  it("return the middle-most element(s) of the given array.", () => {
    assert.deepEqual([2,3], [2,3]);
  });
  it("return the middle-most element(s) of the given array.", () => {
    assert.deepEqual(["3"], ["3"]);
  });
});

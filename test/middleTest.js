const assert = require('chai').assert;
const middle = require("../middle.js");

describe("#middle", () => {
  it("return the middle-most element(s) of the given array.", () => {
    assert.deepEqual(middle("[1,2,3], [2]"));
  });
  it("return the middle-most element(s) of the given array.", () => {
    assert.deepEqual(middle(["1,2,3,4"], ["2,3"]));
  });
});

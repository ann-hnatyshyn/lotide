const middle = function(arr1) {
  if (arr1.length <= 2) {
    return [];
  } else if (arr1.length % 2 !== 0) {
    let midIndex = Math.floor(arr1.length / 2);
    return [arr1[midIndex]];
  } else {
    let midIndex1 = arr1.length / 2 - 1;
    let midIndex2 = arr1.length / 2;
    return [arr1[midIndex1], arr1[midIndex2]];
  }
};

module.exports = middle;

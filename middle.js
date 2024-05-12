const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 !== 0) {
    let midIndex = Math.floor(arr.length / 2);
    return [arr[midIndex]];
  } else {
    let midIndex1 = arr.length / 2 - 1;
    let midIndex2 = arr.length / 2;
    return [arr[midIndex1], arr[midIndex2]];
  }
};
module.exports = middle;

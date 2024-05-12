const assertEqual = require('./assertEqual');

const findKeyByValue = function(obj,value) {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (value === obj[keys[i]]) {
      return keys[i];
    }
  }
  return undefined;
};
module.exports = findKeyByValue;



// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire",
// };


// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


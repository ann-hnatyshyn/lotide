const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {
  const key = Object.keys(object);
  const value = Object.values(object); 
  for (let i = 0; i < value.length; i++) {
    if (callback(value[i])) {
      return (key);
    }
  }
  return undefined;
};
module.exports = findKey;


// const starObject = (
//   {
//     "Blue Hill": { stars: 1 },
//     Akaleri: { stars: 3 },
//     noma: { stars: 2 },
//     elBulli: { stars: 3 },
//     Ora: { stars: 2 },
//     Akelarre: { stars: 3 },
//   }
//   //(x) => x.stars === 2
// ); //=> "noma"





// const returnFirstKey = (x) => {
//   return (x === "stars: 3");
// };

// console.log(findKey(starObject, returnFirstKey));

// assertEqual("noma");
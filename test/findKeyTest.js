const findKey = require('../findKey');

const starObject = (
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  }
);

const returnFirstKey = (x) => {
  return (x.stars === 2, "noma");
};

console.log(findKey(starObject, returnFirstKey));
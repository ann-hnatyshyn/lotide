const assertEqual = require('./assertEqual');

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const [key, value] of Object.entries(itemsToCount)) {
    if (value === true) {
      let count = 0;
      for (const item of allItems) {
        if (item === key) {
          count += 1;
        }
      }
      if (count > 0) {
        results[key] = count;
      }
    }
  } console.log(results);
  return results;
};
module.exports = countOnly;


// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe",
// ];

// const result1 = countOnly(firstNames,{
//   "Jason": true,
//   "Karima": true,
//   "Fang": true,
//   "Agouhanna": false,
// });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], 1);
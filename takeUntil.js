
const names = ["Stella", "Max", "Toby", "Polly", "Sarah"];

const takeUntil = function(names, callback) {
  const results3 = [];
  for (let i = 0; i < names.length; i++) {
    if (callback(names[i])) {
      return results3;
    }
    results3.push(names[i]);
  }
};
console.log(takeUntil(names));
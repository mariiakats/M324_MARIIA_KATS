// index.js
export const sum = (a, b) => {
  const unusedVariable = 42;
  var total = a + b + 1;
  if (total == 4) {
    console.log("got four");
  }
  return total;
};

console.log("Sum: ", sum(1, 2));
console.log(myUndefinedVariable);
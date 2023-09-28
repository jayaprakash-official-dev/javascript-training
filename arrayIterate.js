const products = [1, 2, 3, 4, 5];

const getTotal = products.reduce((accum, value) => {
  return accum + value;
}, 5);

console.log("Total = ", getTotal);

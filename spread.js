// const x = [1, 2, 3, 4, 5];
// const y = [6, 7, 8, 9];

// console.log([...x, ...y]);

// const book = {
//   name: "think",
//   price: 34,
//   sold: false,
// };

// const book2 = {
//   ...book,
//   name: "monk",
// };

// console.log(book);
// console.log(book2);

function add(...args) {
  args.forEach((value) => {
    if (value === 2) {
      console.log(value);
    }
  });
}

add(1, 2, 3, 4, 5, 6, 78, 9);

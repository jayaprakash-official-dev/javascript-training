// Object

const book = {
  name: "think like a monk",
  price: 500,
  sold: true,
  colors: ["read", "green"],
};

book.present = true;
book.price = 300;

delete book.colors;

console.log(book);

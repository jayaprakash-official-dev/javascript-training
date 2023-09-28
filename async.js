const one = () => {
  return "red-1";
};

const two = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("green - 2");
    }, 2000);
  });
};

const three = () => {
  return "blue-3";
};

const callAllFunction = async () => {
  console.log(one());
  const result = await two();
  console.log(result);
  console.log(three());
};

callAllFunction();

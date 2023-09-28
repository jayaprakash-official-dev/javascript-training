const getUser = () => {
  return new Promise((resolve, reject) => {
    const user = {
      name: "jay",
      age: 20,
    };

    if (true) {
      resolve(user);
    } else {
      reject("something went wrong !");
    }
  });
};

getUser()
  .then((response) => {
    console.log("response =", response);
  })
  .catch((error) => {
    console.log("error =", error);
  });

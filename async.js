// console.log("start");
// const emails = (email, password, callback) => {
//   setTimeout(() => {
//     console.log("data aquaired");
//     callback({ usermail: email, passwords: password });
//   }, 2000);
// };
// const userlogin = emails("shyam", 12345, (user) => {
//   console.log(user);
// });
// console.log("end");

function first() {
  console.log("first");
}

function second(callback) {
  setTimeout(() => {
    console.log("second");
    callback();
  }, 2000);
}
function third() {
  console.log("third");
}

first();
second(third);

function callbackhell() {
  setTimeout(() => {
    const data = { name: "shyam" };
    console.log(data);
    setTimeout(() => {
      console.log("callbackhell has been excuted");
    }, 1000);
  }, 2000);
}

callbackhell();

const num = 10;
const new_pormise = new Promise((resovle, reject) => {
  if (num === 10) {
    resovle("is equal to");
  } else {
    reject("is not equal to");
  }
});
new_pormise
  .then((value) => {
    console.log(value);
  })
  .catch((valvue) => {
    console.log(valvue);
  });

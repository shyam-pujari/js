function isequalto(number1, number2) {
  if (number1 == number2) {
    console.log("number1 is equal to number2");
  } else console.log("number1 is not equal to number2");
}

myobj = {
  0: "1",
  1: "2",
  2: "3",
  3: "4",
  4: "5",
};
myarr = [1, 2, 3, 4, 5];
// isequalto(myarr, myobj);
// console.log(myobj);
// console.log(myarr);
////////////////////////////////
function callingeacharr() {
  myarr.forEach((element) => {
    console.log(element);
  });
}
console.log(callingeacharr());
function callingeachobj() {
  for (property in myobj) {
    // console.log(`${property}: ${myobj[property]}`);
    console.log(`${myobj[property]}`);
  }
}
console.log(callingeachobj());

function checkingobjandArr(obj, arr) {
  console.log(arr);
  console.log(obj);
  if (typeof obj == typeof arr) {
    console.log("both are equal");
  } else console.log("not equal");
}
checkingobjandArr(callingeacharr(), callingeachobj());

const to_add = (a, b, c) => {
  total = a * b + c;
  return `the total of the sum is = ${total}`;
};
console.log(to_add(2, 2, 2));

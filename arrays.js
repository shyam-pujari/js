arr = [
  { Name: "bike", price: 3 },
  { Name: "car", price: 30 },
  { Name: "bus", price: 300 },
  { Name: "train", price: 3000 },
];
filtered = arr.filter((item) => {
  return item.price >= 30;
});
// console.log(arr);
console.log(filtered);

mapped = arr.map((item) => {
  return item.Name;
});
// console.log(arr);
console.log(mapped);

found = arr.find((item) => {
  return item.Name === "bike";
});

console.log(found);

arr.forEach((element) => {
  console.log(element.price);
});
// console.log(arr);

hasexpsive = arr.some((element) => {
  return element.price >= 400;
});
console.log(hasexpsive);

eve = arr.every((element) => {
  return element.price <= 5000;
});
console.log(eve);

total = arr.reduce((totalvalue, element) => {
  return element.price + totalvalue;
}, 0);
console.log(total);

arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "arr"];
incu = arr2.includes("arr" && 2);
console.log(incu);

letters = ["a", "b", "c", "d", "e", "f", "g"];
console.log(letters[2]);
console.log(letters.indexOf("b"));
for (let i = 1; i <= letters.length; i++) {
  console.log("hi " + i);
}

let element = 1;
console.log(`the desired element is 4`);
while (element <= 5) {
  if (element === 4) {
    console.log(`the element id = ${4}`);
    break;
  }
  console.log("element " + element);
  element++;
}

animal = "cow";
switch (animal) {
  case "cow":
    console.log("cow gives milk");
    break;
  case "dog":
    console.log("dog barks loud");
    break;
  default:
    console.log("input invalid");
}

i = 1;
do {
  console.log("hi " + i);
  i++;
} while (i <= 5);

obj = { a: "1", b: "2" };
obj1 = { b: "3", c: "4" };
const key = Object.keys(obj);
console.log(key);
const value = Object.values(obj);
console.log(value);
const key_value = Object.assign({}, obj, obj1);
console.log(key_value);

let userinput;
const given = () => {
  // userinput = prompt("enter a value")
  if (userinput == "5") {
    console.log("nice");
  } else {
    console.log("nice try");
  }
};

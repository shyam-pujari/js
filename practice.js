num = Number(22);
console.log(num);
var v = String("hello world");
console.log(typeof v);
is = true;
console.log(typeof is);
var value;
console.log(value);
value = 44;
console.log(value);
a = null;
console.log(a);
first = "pujari";
middle = null;
last = "prasad";
console.log(first + " " + middle + " " + last);
console.log(typeof null);

list = [1, 2, 3, 4, 5, 6];
mm = 123 + "4";
console.log(typeof mm);
z = 10;
x = "10";
if (typeof z == typeof x) {
  console.log("v is e");
} else console.log("not e");

myobj = {
  kye: "22",
  kye1: "22",
  innerobj: {
    innerobject: "22",
    secondobject: "key",
  },
};
console.log(myobj);
console.log(myobj["innerobj"]["innerobject"]);
if (myobj.kye === myobj.innerobj.innerobject) {
  console.log("v is e");
} else console.log("not e");
delete myobj.innerobj.innerobject;
console.log(myobj);

array = ["object", "array"];
console.log(array);
console.log(typeof array);
function sayshello() {
  console.log("hello");
}
sayshello;
function say(a, b) {
  return a + b;
}
a = prompt("enter any number");
b = 5;
console.log(say(a, b));

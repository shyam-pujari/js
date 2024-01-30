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
/////////////////////////////////
list = [1, 2, 3, 4, 5, 6];
mm = 123 + "4";
console.log(typeof mm);
z = 10;
x = "10";
if (typeof z == typeof x) {
  console.log("v is e");
} else console.log("not e");
////////////////////////////////
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
////////////////////////////////
array = ["object", "array"];
console.log(array);
console.log(typeof array);
//////////////////////////////////
function sayshello() {
  console.log("hello");
}
sayshello();
//////////////////////////////////
function adding(a, b) {
  return a + b;
}
a = 10;
b = 30;
console.log(adding(a, b));

function redirecting_add() {
  return adding(a, b) + 30;
}
console.log(redirecting_add());

function adding_both() {
  return adding(a, b) + redirecting_add();
}
console.log(adding_both());
///////////////////////////////////
function def(name) {
  console.log("hello " + name);
}
function hello(fn, name) {
  fn(name);
}
hello(def, "'shyam'");
/////////////////////////////////
newobj = {
  apple: 1,
};

newobj.ball = 2;
console.log(newobj);
newobj.newfunction = function () {
  console.log("function in a object");
};
console.log(newobj);
newobj.newfunction();
//////////////////////////////////
function f(first) {
  return function s(second) {
    return first * second;
  };
}
console.log(f(2)(4));
//////////////////////////////////
name_obj = {
  first_name: "pujari",
  last_name: "shyam",
  getfullname: function () {
    // below line leads to undefined undefined because the name_obj is empty
    // return name_obj.first_name + " " + name_obj.last_name;
    return this.first_name + " " + this.last_name;
  },
};
console.log(name_obj.getfullname());
name_obj2 = name_obj;
name_obj = {};
console.log(name_obj2.getfullname());
///////////////////////////////////
// address_check exercise//
person = {
  first_n: "xxx",
  last_n: "yyy",
  address: {
    street: 123,
    city: "hyd",
    state: "ts",
  },
  address_check: function (state, city) {
    //prints ture or false comparing the given aurgument with object containing person.address.state||city
    return this.address.state === state || this.address.city === city;
  },
};
console.log(person.address_check("ts", "hyd"));
/////////////////////////////////////////////
sum_Of_two = function () {
  console.log(arguments);
  var i,
    sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};
console.log(sum_Of_two(10, 30, 50));
//////////////////////////////////

is_array = [];
is_array.push(30, 40);
is_array.unshift(2, 3);
console.log(is_array);
console.log(typeof is_array);
my_fun = function (i) {
  console.log("this is a forEach method " + i);
};
is_array.forEach(my_fun);
/////////////////////////////////
// scopes
var Name = "shyam";
function allocate() {
  if (Name === "shyam") {
    var deparment = "bsc";
    console.log(deparment);
  }
}
// below line give error bacause deparmant variable is only related to function, calling it outside the function requires a same variable with same name
// console.log(deparment);
allocate();
////////////////////////////////
top = 10;
inner = 20;
console.log(inner);
function boo() {
  inner = 10;
  console.log(inner);
}
console.log(inner);
boo();
aa = function (a, b) {
  a = 1;
  b = 2;
  console.log(a + b);
};
aa();

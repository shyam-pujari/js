//b example strings
myarr = [4, 2, 3, 1, 5];
myarr1 = ["pujari", "shyam", "prasad"];
myarr2 = ["c", "java", "javascript", "python"];
console.log(myarr);
//sort() => sort method
myarr.sort();
console.log(myarr);
// also a sort method in which the arr is stored in a new variable
sorted = myarr.sort();
console.log(myarr);
console.log(sorted);
//at() => at method which gives the value looking up through index which is provied in at("index number")
At = myarr.at(2);
console.log(At);
//toString() => converts array to string
Name = myarr1.toString();
console.log(myarr1);
console.log(Name);
console.log(typeof Name);
//concat() => concat method combines(or)joins multiple arrays
bio = myarr1.concat(myarr2, myarr);
console.log(bio);
console.log(bio.toString());
// ??????????
con = myarr2.constructor;
console.log(con);
//copyWithin() => copyWithin method copy and rewrites the array in which the parameter are given copyWithin(target,start,stop)
console.log(myarr);
copy = myarr.copyWithin(4, 0);
console.log(copy);
// ???????????????????
itre = myarr2[Symbol.iterator]();
console.log(itre);
for (value of itre) {
  console.log(value);
}
//entries() => iterates through array and print in new line
itre1 = myarr.entries();
console.log(itre1.next().value);
console.log(itre1.next().value);
//every() => checks the array with condition provided returns true || false
new_arr = [1, 4, 33, 39, 4];
function check(new_arr) {
  return new_arr < 40;
}
console.log(new_arr.every(check));

function is_positive(value) {
  return value > 0;
}

function fun() {
  numbers = [1, 2, 3, 4];
  let is_value = numbers.every(is_positive);
  console.log(is_value);
}
fun();

new_number = [2, 4, 6];
function is_even(new_number) {
  return new_number % 2 == 0;
}
console.log(new_number.every(is_even));
//prints every value present in the array in a new line
for (langs of myarr2) {
  console.log(langs);
}
//fill() replaces or edits the array with given value fill(value, start index, end index)
console.log(myarr.fill(0, 0, 5));
// console.log(myarr2.fill("c"));
//filter() => checks the array with given condition||function() and filters and stores them in a new array
Fi = myarr2.filter((arr) => arr.length > 5);
console.log(Fi);

lower = myarr1.filter((arr) => arr.length < 6);
console.log(lower);

function bigenough(filtered) {
  return filtered > 10;
}
filterd = [66, 3, 77, 88, 4, 99, 10].filter(bigenough);
console.log(filterd);

prime = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function isprime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(prime.filter(isprime));
//
natural = [2, 6, 10, , 90, 100, 150];
natural1 = natural.find((Element) => Element > 90);
console.log(natural1);

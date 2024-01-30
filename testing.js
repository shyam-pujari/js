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

lessthen = (currentvalue) => currentvalue < 40;

new_arr = [1, 4, 33, 39, 40];
console.log(new_arr.every(lessthen));

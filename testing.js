myobj = {
  0: "1",
  1: "2",
  2: "3",
  3: "4",
  4: "5",
  5: "6",
  7: "shyam",
};
myarr = [1, 2, 3, 4, 5, 6, "shyam"];
function callingarr() {
  return myarr;
}
const logarr1 = callingarr();

function callingeachobj() {
  const objValues = [];
  for (property in myobj) {
    objValues.push(myobj[property]);
  }
  return objValues;
}
const logobj = callingeachobj();
//this function only checks in order wise if the array and object are not in same order this function give "not equal"
function checkingarrandobj(arr, obj) {
  //   console.log(arr);
  //   console.log(obj);
  const strarr = arr.toString();
  const strobj = obj.toString();

  //const arraysarequal = JSON.stringify(arr) === JSON.stringify(obj);  ===> not woking
  if (strarr === strobj) {
    console.log("both are equal");
  } else console.log("not equal");
}
checkingarrandobj(callingarr(), callingeachobj());

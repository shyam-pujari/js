arr = [
  { Name: "bike", price: 3 },
  { Name: "car", price: 30 },
  { Name: "bus", price: 300 },
  { Name: "train", price: 3000 },
];
filtered = arr.filter((item) => {
  return item.price >= 300;
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
// console.log(arr);
console.log(found);

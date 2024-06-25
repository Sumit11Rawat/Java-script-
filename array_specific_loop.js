// for of loops
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(num);
}

const sumit = "sumit_rawat";
for (const word of sumit) {
  console.log(`${word}`);
}

const map = new Map();
// for storing unique value
map.set("sumit", "rawat");
map.set("coollege", "BTKIT");
console.log(map);
for (const key of map) {
  console.log(key);
}

// we can also print key value seprately
for (const [key, value] of map) {
  console.log(key, "->", value);
}
// NOTE->we cannot iterate objects like map via for of loop
// to iterate object we use forin loop

const obj = {
  sumit: "rawat",
  college: "BTKIT",
};
for (const key in obj) {
  console.log(`${key},'->',${obj[key]}`);
}

// for each function for array
const arr1 = [1, 2, 3, 477, 5];
arr1.forEach(function (i) {
  console.log(i);
});
const arr2 = [1, 2, 3, 4, 5];
arr2.forEach((i) => {
  console.log(i);
});

// accessing object key in arrays via forEach
const arr3 = [
  {
    language: "js",
    editor: "zed",
  },
  {},
  {},
];
arr3.forEach((item) => {
  console.log(item.language);
});

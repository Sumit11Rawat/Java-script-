//arrays in js

// to define an array
const arr = [1, 2, 3, 4];
console.log(arr[1]);
// output ->2

console.log(arr);
// output ->[1,2,3,4]

arr.push(44);
// to push an element into array

arr.pop();
// removes the last element

arr.unshift(22);
// ads new element to the start of array
console.log(arr);
// output->[ 22, 1, 2, 3, 4 ]
//

console.log(arr.includes(1));
// output->true;
console.log(arr.indexOf(3));
// output->3
// return -1 if parameter doesnt exist in array

const newArr = arr.join();
console.log(typeof newArr);
console.log(newArr);
// output->string
//         22,1,2,3,4

const myArr1 = arr.slice(1, 3);
console.log(arr);
console.log(myArr1);
// output ->[ 22, 1, 2, 3, 4 ]
[1, 2];
// the original array doesn't get affected
// print the new array from index 1 to last-1

const myArr2 = arr.splice(1, 3);
console.log(arr);
console.log(myArr1);
// output->[ 22, 4 ]
//         [ 1, 2 ]
// here splice prints the element from inex 1 to 3
// original arrays also gets affected

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [8, 9, 10];
// arr1.push(arr2);
console.log(arr1);

// output->[ 1, 2, 3, 4, 5, 6, 7, [ 8, 9, 10 ] ]

const newarr = arr1.concat(arr2);
console.log(newarr);
// output ->
// [
//   1, 2, 3, 4,  5,
//   6, 7, 8, 9, 10
// ]
// similar output is produced by
console.log(...arr1, ...arr2);

// flat function
const anotherArray = [1, 2, [3, (4)[(5, 6)]]];
const newAnotherArray = anotherArray.flat();
console.log(newAnotherArray);
// output->[ 1, 2, 3, undefined ]

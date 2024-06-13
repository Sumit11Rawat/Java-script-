// object literals

const mySym = Symbol("key1");

const myObject = {
  name: "sumit",
  [mySym]: "new key",
  age: 12,
  location: "uttarkashi",
};
console.log(myObject.name);
console.log(myObject["location"]);
console.log(typeof myObject[mySym]);

// update the value of key of object using .
myObject.age = 33;
console.log(myObject.age);
Object.freeze(myObject);
// using freeze no changes to object will be propagated
myObject.age = 33;
console.log(myObject.age);

const newObject = {};
newObject.id = 44;
newObject.name = "sumit";
console.log(newObject);

// object inside object
const first_object = {
  name1: "amit",
  second_object: {
    name2: "ajit",
    third_object: {
      name3: "sujit",
    },
  },
};
// accessing nested object
console.log(first_object.second_object.third_object);

// merging two objects
const obj_1 = { 1: "a", 2: "b" };
const obj_2 = { 3: "c", 4: "d" };
const obj_3 = { obj_1, obj_2 };
console.log(obj_3);
// output ->{ obj_1: { '1': 'a', '2': 'b' }, obj_2: { '3': 'c', '4': 'd' } }
const obj_4 = Object.assign(obj_1, obj_2);
console.log(obj_4);
// output->{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// similar output is produced by obj_5={...obj_1, ...obj_2};

const construct = {
  name: "sumit",
  age: 22,
};
const { age } = constructor;
console.log(age);

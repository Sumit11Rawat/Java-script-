//functions

function my_funct() {
  console.log("Hello everyone");
}
my_funct();

// parameterised function
function add(num1, num2) {
  console.log("sum of no is ", num1 + num2);
}
add(2, 2);

// storing value of a functin in a variable
function fun_ction(num1, num2) {
  return num1 + num2;
}
const result = fun_ction(3, 4);
console.log("Result:", result);

function show(name = "default_name") {
  if (name === undefined) {
    console.log("please enter a name ");
    return;
  }
  if (name == "default_name") {
    return `${name} is called`;
    return;
  }
  return `${name} is inside the show funcion`;
}
console.log(show());

function f1(...num1) {
  return num1;
}
console.log(f1(200, 300, 400));
// output->[ 200, 300, 400 ]
// return array of parameter
function f1(val1, val2, ...num1) {
  return num1;
}
console.log(f1(200, 300, 400, 500, 600));
// output ->[ 400, 500, 600 ]
// val1 and val2 occupied the first 2 values

// passing object as parameter in a function
const user = {
  name: "sumit",
  age: 22,
};
function use_obj(obj) {
  console.log(`the name is ${obj.name} and age is ${obj.age}`);
}
use_obj(user);
// direct whole object can also be passed as
use_obj({
  name: "sumit",
  age: 22,
});

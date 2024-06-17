//this keyword
user = {
  username: "sumit",
  welcomeMessage: function () {
    console.log(`${this.username} welcome to ZED`);
    console.log(this);
  },
};
user.welcomeMessage();
console.log(this);

function show() {
  const lastname = "rawat";
  console.log(this.username);
}

// arrow function
const func = (num1, num2) => {
  return num1 + num2;
};
console.log(func(2, 2));
// similar output can be produced by
// const func=(num1,num2) =>(num1+num2)

// Immediately Invoked function->IIFE
// ()->first parenthesis for definiton
// ()->second parenthesis for immediate running
// named iife
(function chai() {
  console.log("Trying IIFE");
})();

// another way to define iife
// unnamed iife
((name) => {
  console.log(`${name} welcome to IIFE second`);
})("sumit_rawat");

/**
 A Higher-Order Function is a function that does at least ONE of the following:

1️⃣ Takes one or more functions as arguments
2️⃣ Returns a function as its result

👉 If either is true → Higher-Order Function
 */


/*
 1️⃣ Function as a Value (Core Idea)
In JavaScript, functions are first-class citizens, meaning:
- Can be stored in variables
- Passed as arguments
- Returned from functions
*/

function greet() {
  console.log("Hello");
}

const sayHello = greet; // function stored in variable
sayHello();
// This capability makes HOFs possible.


// 2️⃣ HOF Type 1: Function Taking Another Function

function add(a ,b ){
    return a+b;
}

function multiply(a ,b){
    return a*b;
}

function calculate(a, b, operation){
    return operation(a,b);
}

// ✔ calculate is a Higher-Order Function
// ✔ add, multiply are callback functions

console.log(calculate(5,3,add))
console.log(calculate(5,3,multiply))

//3️⃣ Callback Function (Important Term)

//A callback is a function passed to another function to be executed later.

setTimeout(() => {
  console.log("Executed later");
}, 1000);
// setTimeout → Higher-Order Function  &  Arrow function → Callback


// 4️⃣ HOF Type 2: Function Returning Another Function

function greet1(message) {
  return function(name) {
    return `${message}, ${name}`;
  };
}

/*
using Arrow Function

const greet = message => name => `${message}, ${name}`;

const energy = greet("How the Josh");
console.log(energy("Penil"));

*/

const energy = greet1("How the Josh ?");
const output = energy("Penil");
console.log(output)

/**
 🔥 Real-world use cases
 */
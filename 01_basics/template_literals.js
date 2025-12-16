/* 
Template literals are a modern way to create strings in JavaScript using backticks ( ) instead of quotes.

They make strings more readable, powerful, and cleaner.

*/


// Basic Syntax
const name = "Penil";
const age = 22;

const msg = `My name is ${name} and I am ${age} years old`;
// 👉 ${} allows expression interpolation.


// Before
const msg1 = "My name is " + name + " and I am " + age + " years old";

// With template literals
const msg3 = `My name is ${name} and I am ${age} years old`;

function greet(name) {
  return `Hello ${name}`;
}

console.log(`${greet("Penil")}`);


/*
  Common Mistakes

❌ Using quotes instead of backticks
"Hello ${name}"   // ❌ won't interpolate

  
❌ Forgetting ${}
`Hello name`      // ❌ literal text



Why Template Literals

API messages
Logging
React JSX readability

*/